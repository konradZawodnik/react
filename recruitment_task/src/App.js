import React, { useCallback, useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [addHouseData, setAddHouseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [area, setArea] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [owner, setOwner] = useState('');
  const [id, setId] = useState(null);
  
  const showData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://mr-test-backend.sadek.usermd.net/houses');
      setData(response.data.houses);
      setLoading(false);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const showDetails = useCallback(async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://mr-test-backend.sadek.usermd.net/houses${id}`);
      setData(response.data.houses);
      setLoading(false);
      setId()
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const addHouse = useCallback(async () => {
    try {
      setLoading(true);
      let i = 0;
      let j = 0;
      const response = await axios.post('http://mr-test-backend.sadek.usermd.net/houses', {
        address,
        owner,
        price,
        area: Number(area),
        _v: i++,
        _id: { description: String(j++) }
      });
      setData(response.data);
      setLoading(false);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  }, [address, owner, price, area]);

  const deleteHouse = useCallback(async (id) => {
    try {
      setLoading(true);
      let i = 0;
      const response = await axios.delete(`http://mr-test-backend.sadek.usermd.net/houses${id}`);
      setAddHouseData(response.data);
      setLoading(false);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    showData();
  }, []);

  if (loading) {
    return <div className="loading">{"Loading"}</div>
  }
  return (
    <div className="App">
      <div className="container">
        <div className="grid-1">
          <div className="title">Kilka słów o nas</div>
          <div className="question">Czyli kim jesteśmy i dokąd zmierzamy?</div>
          <div className="Lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
           sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          <div>
            <button className="button" type="button" onClick={(e, id) => showDetails(id)}>Zobacz Więcej</button></div>
          <div>
          </div>
        </div>

        <div className="grid-2">
          <div className="second_container">
            {data.length && Object.keys(data).map((item, index) => (
              <Fragment key={index}>
                <div className="grid-2-part1" key={index}>
                  <span className="spanMargin">{`Właściciel: ${data[item].owner}`}</span>
                  <span className="spanMargin">{`Adres zamieszkania: ${data[item].address}`}</span>
                  <span className="spanMargin">{`Miejsce zamieszkania: ${data[item].area}`}</span>
                  <span className="spanMargin">{`Cena: ${data[item].price}`}</span>
                </div>
                <div className="grid-2-part2" key={index}>
                  <span className="spanMargin">{`Właściciel: ${data[item].owner}`}</span>
                  <span className="spanMargin">{`Adres zamieszkania: ${data[item].address}`}</span>
                  <span className="spanMargin">{`Miejsce zamieszkania: ${data[item].area}`}</span>
                  <span className="spanMargin">{`Cena: ${data[item].price}`}</span>
                </div>
                <div className="grid-2-part3" key={index}>
                  <span className="spanMargin">{`Właściciel: ${data[item].owner}`}</span>
                  <span className="spanMargin">{`Adres zamieszkania: ${data[item].address}`}</span>
                  <span className="spanMargin">{`Miejsce zamieszkania: ${data[item].area}`}</span>
                  <span className="spanMargin">{`Cena: ${data[item].price}`}</span>
                </div>
                <div className="grid-2-part4" key={index}>
                  <span className="spanMargin">{`Właściciel: ${data[item].owner}`}</span>
                  <span className="spanMargin">{`Adres zamieszkania: ${data[item].address}`}</span>
                  <span className="spanMargin">{`Miejsce zamieszkania: ${data[item].area}`}</span>
                  <span className="spanMargin">{`Cena: ${data[item].price}`}</span>
                </div>
              </Fragment>
            ))}
          </div>

        </div>

        <div className="grid-3">
          <div className="label">Budowa domów z drewna</div>
          <div className="label">Budowa bram wjazdowych</div>
          <div className="label">Wykończenie wnętrz</div>
          <div className="label">Altany ogrodowe</div>
          <div className="label">Kamienie Elementy Architektury</div>
          <div className="label">Remonty</div>
        </div>

        <div className="grid-4">
          <div className="title">Nasza oferta</div>
          <div className="question">Dowiedz się, co możemy Tobie zaoferować?</div>
          <div className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
         sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          <div className="inputs">
            <input
              name="owner"
              type="text"
              value={owner}
              placeholder={"Wpisz właściciela"}
              onChange={event => setOwner(event.target.value)}
            />
            <input
              name="address"
              type="text"
              value={address}
              placeholder={"Wpisz adres mieszkania"}
              onChange={event => setAddress(event.target.value)}
            />
            <input
              name="area"
              type="number"
              value={area}
              placeholder={"Wpisz miejsce mieszkania"}
              onChange={event => setArea(event.target.value)}
            />
            <input
              name="price"
              type="text"
              value={price}
              placeholder={"Wpisz cenę mieszkania"}
              onChange={event => setPrice(event.target.value)}
            />
            <button
              type="button"
              className="button"
              onClick={addHouse}
            >
              {"Dodaj domek"}
            </button>
            <button
              onClick={deleteHouse}
              className="button"
              type="button"
            >
              {"Usuń domek"}
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
