import {createStore} from 'redux'
import TaskReducer  from "./TaskReducer"

const Store=createStore(TaskReducer)

export default Store 