import { useCallback, useEffect, useState } from 'react';

import './SquareBlock.css';

const SquareBlock = () => {
    const [clicked, setClicked] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);

    const changeColor = useCallback(() => {
        setClicked(true);
        setCount(count + 1);
    }, [count]);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setClicked(false);
            setCount(0);
        }, 2000);
        return () => {
            window.clearInterval(timer);
        }
    }, []);

    return (
        <div
            className={clicked ? "squareBlockAfterFirstClick" : "squareBlock"}
            onClick={changeColor}
            style={{ backgroundColor: count === 3 && "#ff0000" }}
        />
    )

}

export default SquareBlock;