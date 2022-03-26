import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='qs-ans'>
            <div className='qs-one'>
                <h3>Qs- How to react works?</h3>
            <p>React only work in front of an application. React allows to re-constract DOM in javascript.push only chnges data in DOM. React.createElements it crate a plain javascript object. React components always see where changes and update only change data in DOM.</p>
            </div>
            <div className='qs-two'>
                <h3>Qs- Difference between Props and State?</h3>
            <p>
                <b>Props: </b>Pass data only one components to another components. Props data do not modified. Props only read data.
            </p>
            <p>
                <b>State: </b>Pass data only local components. state data can be modified. State only use in state components. state data read and write.
            </p>
            </div>
        </div>
    );
};

export default Questions;