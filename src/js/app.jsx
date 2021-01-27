import {render} from 'react-dom'
import React from 'react'
import SearchBlock from "./components/SearchBlock"
import ingredients from './services/ingredients.js'

const INGREDIENTS = ingredients

render(<SearchBlock ingredients={INGREDIENTS}/>, document.getElementById('app'))
