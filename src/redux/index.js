import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./root-reducer"
import rootSaga from "../saga/index"

function configureStore(preloadedState) {
  const middleware = []
  const enhancers = []

  // create middleware
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  // Assemble Middleware
  enhancers.push(applyMiddleware(...middleware))

  // Attach redux dev tool for development environment
  let composeEnhancers = null
  if (process.env.NODE_ENV === "production") {
    composeEnhancers = compose
  } else {
    composeEnhancers = require("redux-devtools-extension").composeWithDevTools
  }

  // create store
  const store = createStore(rootReducer, composeEnhancers(...enhancers))
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
