import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Accordion = ({ id, title, info }) => {
  // state to control the show and hide of accordion content
  const [state, setstate] = useState(false);

  return (
    <div className='accordion' onClick={() => setstate(!state)}>
      <header
        // Conditionally styling based if accordion is open or close
        style={{
          borderBottom: state
            ? '1px solid blueviolet'
            : '1px solid transparent',
        }}>
        <h3>{title}</h3>
        <span>{state ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
      </header>
      {/* Conditional Render using Short-circuit Evaluation  */}
      <p>{state && info}</p>
    </div>
  );
};

export default Accordion;
