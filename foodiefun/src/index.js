import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import '../src/components/styles-scss/components/_app.scss'
import 'semantic-ui-css/semantic.min.css' ;
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
