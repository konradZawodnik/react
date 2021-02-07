import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

import { decreaseCount, increaseCount, refreshCount } from '../../../store/actions/actions';

import './AddedProductsToBasket.css';

const AddedProductsToBasket = ({ amount, count, decreaseCount, item, increaseCount,
    refreshCount, setAmount }) => {
    const [isBlocked, setIsBlocked] = useState(false);
    const checkCount = useCallback(debounce(async (item) => {
        try {
            await axios.post('/api/product/check', {
                "pid": item.pid,
                "quantity": count
            });
            if (count < 0 || count > 10) {
                refreshCount();
                setIsBlocked(false);
            }
        } catch (err) {
            console.error(err);
        }
    }, [count, item.pid, refreshCount, setIsBlocked]));

    useEffect(() => {
        if (count < 0 || count > item.max) {
            setIsBlocked(true);
        }
    }, [count, item.max, setIsBlocked]);

    return (
        <div className="signsContainer">
            <button
                className={"sign"}
                disabled={isBlocked}
                onClick={() => {
                    increaseCount(count);
                    setAmount(amount + Number(item.price));
                    checkCount();
                }}
                type="button"
            >
                +
            </button>
            <button
                className={"sign"}
                disabled={isBlocked}
                onClick={() => {
                    decreaseCount(count);
                    setAmount(amount - Number(item.price));
                    checkCount();
                }}
                type="button"
            >-
            </button>
            <div>{`Obecnie masz ${count} sztuk produktu`}</div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count: state.countReducer.count,
})

export default connect(mapStateToProps, { increaseCount, decreaseCount, refreshCount })(AddedProductsToBasket);
