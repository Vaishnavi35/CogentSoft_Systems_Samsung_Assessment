import React, { useState, useCallback } from 'react'

export default function DebounceThrottle() {
    const [inputValue, setInputValue] = useState('');
    const [DTValue, setDTValue] = useState('Debounce');

    function throttle(func, limit) {
        let lastFunc;
        let lastRan;
        return function (...args) {
            const context = this;
            if (!lastRan) {
                func.apply(context, args);
                lastRan = Date.now();
            } else {
                if (lastFunc) clearTimeout(lastFunc);
                lastFunc = setTimeout(function () {
                    if ((Date.now() - lastRan) >= limit) {
                        func.apply(context, args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        };
    }

    function debounce(func, delay) {
        let timerId;
        return function (...args) {
            if (timerId) {
                clearTimeout(timerId);
            }
            timerId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }

    // Handle input change
    const handleInputChange = useCallback(
        (DTValue === 'Throttle' ?
            throttle((value) => {
                console.log('Input value:', value);
                setInputValue(value);
            }, 5000) :
            debounce((value) => {
                console.log('Input value:', value);
                setInputValue(value);
            }, 5000))
        
    ,[DTValue]);

    const handleChange = (event) => {
        const { value } = event.target;
        handleInputChange(value);
    };

    const dtChanged = (event) => {
        const { value } = event.target;
        if (value === 'debounce') {
            setDTValue('Debounce');
        } else {
            setDTValue('Throttle');
        }
    }

    return (
        <div>
            <input type='radio' name='dt' value='debounce' defaultChecked='true' onChange={(e) => dtChanged(e)}/> Debounce
            <input type='radio' name='dt' value='throttle' onChange={(e) => dtChanged(e)} /> Throttle
            <br />
            <input
                type="text"
                onChange={handleChange}
                placeholder="Type something..."
            />
            
            <p> Typed value : {inputValue}</p>
        </div>
    );
}
