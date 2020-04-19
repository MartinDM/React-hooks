import React, { useState } from 'react';
import Link from 'next/link';

const InputElement = () => {
  const [defaultPlaceholder, changeDefaultPlaceholder] = useState('Default text')
  const [historyList, setHistoryList] = useState([]);
  return (  
  <div className="container">
      <div>
      <Link href="/ImageChangeOnScroll">
        <a title="Demo 1">Demo 1 - Hover</a>
      </Link> &nbsp; / &nbsp;
      <Link href="/ImageChangeOnMouseOver">
        <a title="Demo 2">Demo 2 - Scroll</a>
      </Link>
      <p>Hello Next.js</p>
    </div>

    <input onChange={(e) => {
      setHistoryList([...historyList, e.target.value])
      changeDefaultPlaceholder(e.target.value)
    }} placeholder='Hi' />
    
    <p>{defaultPlaceholder}</p>
    <ul>
    {
      historyList.map( t => <li>{t}</li> )
    }
    </ul>
  </div>
  );
}
 
export default InputElement;