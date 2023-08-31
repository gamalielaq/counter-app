import { useState } from 'react';
import PropTypes from 'prop-types';



export const CounterApp = ({ value }) => {
    if (!value) {
        throw new Error('El value esta vacio');
    }

    const [ counter, setCounter ] = useState(10);

    const handleAdd = (event, message) => {
        console.log(event)
        console.log(message);
        // setCounter(counter + 1);
        setCounter( (c) => c + 1);
    }

    const handleSubtract = () => {
        setCounter( (c) => c - 1);
    }

    const handleReset = () => {
        setCounter( value );
    }

    return (
        <>
            <h1> CounterApp </h1>
            <h2> { counter } </h2>

            {/* <button onClick={ (event) => handleAdd(event) }>+1</button> */}
            {/* <button onClick={ handleAdd }>+1</button> */}
            <button onClick={(event) => handleSubtract(event, 'hola')}>-1</button>
            <button onClick={(event) => handleAdd(event, 'hola')}>+1</button>
            <button onClick={ handleReset }> reset </button>
        </>
    );
}

CounterApp.PropTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 'Soy un valor por defecto de counter app',
}