import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './s1-main/App'
import reportWebVitals from './reportWebVitals'
import store from './s2-homeworks/hw10/bll/store'
import {Provider} from 'react-redux'

const users = [
    {id: '1qwerty', name: 'viktoriia', age: 5},
    {id: '2qwerty', name: 'mark', age: 1},
    {id: '3qwerty', name: 'alina', age: 33},
    {id: '4qwerty', name: 'lubov', age: 60},
    {id: '5qwerty', name: 'anatoliy', age: 61}
]

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        {/*для дз 10*/}
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
