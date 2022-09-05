import {combineReducers,createStore} from 'redux'
import setData from './reducer.js'

// const reducer = combineReducers({
//     user
// })

const store = createStore(setData)

export default store;