/* @refresh reload */
import { render } from 'solid-js/web'

import './tailwind.css'
import './custom.css'
import App from './App'

const root = document.getElementById('root')

render(() => <App />, root!)
