import { useSelector, useDispatch } from "react-redux";
import {incrementCount, decrementCount} from "../../store/actions/actions";

import "./Counter.css"

export default function Counter() {
    const count = useSelector((state) => state.count);

    const dispatch = useDispatch();

    return (
        <div className="counter-container">
            <h1>Counter: {count}</h1>
            <div className="counter-buttons">
                <button onClick={() => dispatch(decrementCount())} className="counter-button">-</button>
                <button onClick={() => dispatch(incrementCount())} className="counter-button">+</button>
            </div>
        </div>
    )
}