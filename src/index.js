import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import User from "./componentes/user"

import "./styles.css";


const randomNum = () => Math.floor(Math.random() * 100) + 1;

function App() {
    const user = {
        name: "Jesús",
        lastname: "Alonso",
        email: "jesusalonsosan@gmail.com",
        image:
            "https://avatars0.githubusercontent.com/u/46055113?s=460&v=4"
    };

    const peppapig = {
        name: " Влади́мир",
        lastname: "Пу́тин",
        email: "blad@putin.com",
        image: "https://image.cnbcfm.com/api/v1/image/104542854-RTS179Y5-vladimir-putin.jpg?v=1529452317&w=630&h=422"
    };

    return (
        <div className="App">
            <h1>
                {user.name} {user.lastname}
            </h1>
            <p>{randomNum()} años</p>
            <h2>{user.email}</h2>
            <User user={user} />
            <p>{randomNum()} años</p>
            <User user={peppapig} />
        </div>
    );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);