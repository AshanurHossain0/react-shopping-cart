import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <App />
  </Context>
);


const B = () => {
  const sayHello = () => alert("Hello From B");
  return null;
};

const A = () => {
  const bRef = useRef(null); // Create a ref to hold the reference to component B

  const callSayHello = () => {
    if (bRef.current) {
      bRef.current.sayHello();
    }
  };

  return (
    <div>
      <B ref={bRef} />
      <button onClick={callSayHello}>Call sayHello in B</button>
    </div>
  );
};

export default A;
