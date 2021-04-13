import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

export const Timer = () => {
    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    });
    return(
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
        </div>
    )
}
// cleanup used to reset process, avoid leak

export default Timer;