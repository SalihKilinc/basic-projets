
import ReactDOM from 'react-dom/client';
import App from './App';

import "bootstrap/scss/bootstrap.scss";
// import "bootstrap"; Bu import eğer bootstrap static olarak kullanılacaksa Javascript i etkinleştirmek için kullanılmalıdır. Dinamik yapıda buna gerek yoktur.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

