import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './store';


//Fake comments
function emitComment(id) {
    setInterval(() => {
        //add eventListener, khi su kien xay ra trong DOM, DOM tu phat. Nhung trong truong hop nay, tu phat Event.
        window.dispatchEvent(
            new CustomEvent(`lesson-${id}`, {
                detail: `Noi dung comment cua lesson ${id}`
            })
        )
    }, 2000)
}

emitComment(1)
emitComment(2)
emitComment(3)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <StoreProvider>
            <App />
        </StoreProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
