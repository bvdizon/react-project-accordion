import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Accordion = ({ id, title, info }) => {
  const [state, setstate] = useState(false);

  return (
    <div className='accordion' onClick={() => setstate(!state)}>
      <header
        style={{
          borderBottom: state
            ? '1px solid blueviolet'
            : '1px solid transparent',
        }}>
        <h3>{title}</h3>
        <span>{state ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
      </header>
      <p>{state && info}</p>
    </div>
  );
};

export default Accordion;
