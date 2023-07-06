import { useState, useCallback, useEffect, Fragment } from "react";
import axios, { AxiosResponse } from "axios";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { debounce } from "lodash";

import "./CurrencyForm.css";

const CurrencyForm = () => {
  const [result, setResult] = useState<string | number | string[] | undefined>(
    undefined
  );
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("GBP");
  const [amount, setAmmount] = useState<string | number | string[] | undefined>(
    undefined
  );
  const [currencies, setCurrencies] = useState<Array<{}>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorModalOpen, setErrorModalOpen] = useState<boolean>(false);

  const onlyNumberKey = debounce(
    useCallback((e: any) => {
      const ASCIICode = e.persist ? e.persist : e.keyCode;
      return ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)
        ? false
        : true;
    }, []),
    1000
  );

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response: AxiosResponse = await axios.get(
        "https://free.currconv.com/api/v7/currencies?apiKey=6cf3a122f68b6389d5fa"
      );
      const currencyAr = ["EUR"];
      for (const key in response.data.results) {
        currencyAr.push(key);
      }
      setCurrencies(currencyAr);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setErrorModalOpen(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const convertHandler = useCallback(async () => {
    try {
      if (fromCurrency !== toCurrency) {
        setLoading(true);
        const response: AxiosResponse = await axios.get(
          `https://free.currconv.com/api/v7/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=3b385138a6bddd2a8b03`
        );
        setResult(response.data[`${fromCurrency}_${toCurrency}`]);
        const resultFixed =
          Number(amount) * response.data[`${fromCurrency}_${toCurrency}`];
        setResult(resultFixed.toFixed(5));
        localStorage.setItem("amount", String(amount));
        localStorage.setItem("fromCurrency", fromCurrency);
        localStorage.setItem("toCurrency", toCurrency);
        localStorage.setItem(
          "result",
          response.data[`${fromCurrency}_${toCurrency}`]
        );
        setLoading(false);
      } else {
        setResult("You cant convert the same currency!");
        setLoading(false);
      }
    } catch (error: any) {
      console.log("Opps", error.message);
    } finally {
      setLoading(false);
    }
  }, [fromCurrency, toCurrency, amount]);

  const selectHandler = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "from") {
      setFromCurrency(value);
    } else {
      if (name === "to") {
        setToCurrency(value);
      }
    }
  }, []);

  return loading ? (
    <div className="Loading">{"Loading"}</div>
  ) : (
    <Fragment>
      <div className="Converter">
        <h2>
          <span>{"Konwerter walut"}</span>
        </h2>
        <div className="From">
          <div>
            <input
              name="amount"
              placeholder="Wpisz kwotę"
              type="number"
              value={amount}
              onKeyPress={(e) => onlyNumberKey(e)}
              required
              style={{ width: "50%" }}
              onChange={(event) => setAmmount(event.target.value)}
            />
          </div>
          <div>
            <input
              name="result"
              placeholder="Wynik"
              type="number"
              value={result}
              onChange={(e) => onlyNumberKey(e)}
              style={{ width: "50%" }}
              required
            />
          </div>
          <div>
            <select
              name="from"
              onChange={(event) => selectHandler(event)}
              value={fromCurrency}
            >
              {currencies.map((cur, index) => (
                <option key={index}>{cur}</option>
              ))}
            </select>
            <i className="fas fa-exchange-alt"></i>
            <select
              name="to"
              onChange={(event) => selectHandler(event)}
              value={toCurrency}
            >
              {currencies.map((cur, index) => (
                <option key={index}>{cur}</option>
              ))}
            </select>
          </div>
          <Button size="lg" className="ConvertButton" onClick={convertHandler}>
            {"Konwertuj"}
          </Button>
        </div>
      </div>
      <Fragment>
        <span>
          <Link to="/history">
            <div className="HistoryLabel">{"Historia"}</div>
          </Link>
        </span>
        <Modal className="Modal" isOpen={errorModalOpen}>
          <ModalHeader style={{ textAlign: "center" }}>
            {"Komunikat błędu"}
          </ModalHeader>
          <ModalBody style={{ textAlign: "center", backgroundColor: "white" }}>
            {
              "Nie udało się wykonać żądanej operacji, ponieważ nie znaleziono zasobu powiązanego z serwerem"
            }
          </ModalBody>
          <ModalFooter style={{ textAlign: "right" }}>
            <Button
              style={{ cursor: "pointer" }}
              color="secondary"
              onClick={() => setErrorModalOpen(false)}
            >
              {"Zamknij"}
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    </Fragment>
  );
};

export default CurrencyForm;
