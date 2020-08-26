import React, { useState, useCallback, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from "axios";
import moment from 'moment';

import './CurrencyHistory.css';

const CurrencyHistory = () => {
    const [historyData, setHistoryData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorModalOpen, setErrorModalOpen] = useState(false);

    const fetchHistoryData = useCallback(async () => {
        try {
            setLoading(true);
            const fromCurrency = localStorage.getItem('fromCurrency');
            const toCurrency = localStorage.getItem('toCurrency');
            const actualDate = moment().format('YYYY-MM-DD');
            const oldestPossibleDate = moment().subtract(7, 'days').format('YYYY-MM-DD');
            const response = await axios.get(`https://free.currconv.com/api/v7/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&date=${oldestPossibleDate}&endDate=${actualDate}&apiKey=3b385138a6bddd2a8b03`)
            let id = 0;
            const historyResults = Object.entries(response.data[`${fromCurrency}_${toCurrency}`]).map(([key, value], index) => ({
                date: key,
                value,
                amount: Number(localStorage.getItem('amount')),
                id: id++
            }));
            setLoading(true);
            setHistoryData(historyResults);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setErrorModalOpen(true);
        } finally {
            setLoading(false);
        }
    }, []);

    const clearHistory = useCallback(() => {
        if (historyData.length) {
            historyData.splice(0, historyData.length);
        }
        setHistoryData([...historyData]);
    }, [historyData]);

    useEffect(() => {
        fetchHistoryData();
    }, [fetchHistoryData]);

    if (loading) {
        return <div className="Loading">{"Loading"}</div>
    }
    return (
        <span className="HistoryArea">
            {historyData.length ?
                <Fragment>
                    <div className="HistoryData">
                        <span><strong>Data</strong></span>
                        <span><strong>Przed konwersją</strong></span>
                        <span className="AfterConvertion"><strong>Po konwersji</strong></span>
                        {historyData.map(item => (
                            <Fragment key={item.id}>
                                <span key={item.id}>{item.date}</span>
                                <span key={item.id}>{item.amount}</span>
                                <span key={item.id} className="AfterConvertion">{item.value}</span>
                            </Fragment>
                        ))}
                    </div>
                    <span onClick={() => clearHistory()} className="ClearHistory">
                        {'Wyczyść historię'}
                    </span>
                </Fragment>
                : <div className="LackOfHistory">
                    {"Brak historii konwersji walut"}
                </div>}
            <div className="HistoryButton">
                <Link to="/" className="CloseIcon">
                    {'x'}
                </Link>
            </div>
            <Modal
                className="Modal"
                isOpen={errorModalOpen}
            >
                <ModalHeader style={{ 'textAlign': "center" }}>{'Komunikat błędu'}</ModalHeader>
                <ModalBody style={{ 'textAlign': "center", 'backgroundColor': 'white' }}>
                    {"Nie udało się wykonać żądanej operacji, ponieważ nie znaleziono zasobu powiązanego z serwerem"}
                </ModalBody>
                <ModalFooter style={{ 'textAlign': "right" }}>
                    <Button style={{ cursor: 'pointer' }} color="secondary" onClick={() => setErrorModalOpen(false)}>{'Zamknij'}</Button>
                </ModalFooter>
            </Modal>
        </span>
    );
};

export default CurrencyHistory;