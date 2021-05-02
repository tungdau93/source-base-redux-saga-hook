import { combineReducers } from "redux"

const rootReducer = combineReducers({
  post: require("./post-redux").reducer,
})

export default rootReducer
