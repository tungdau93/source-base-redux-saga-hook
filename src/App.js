import "./App.css"
import { Provider } from "react-redux"
import configureStore from "./redux/index"
import ListPost from "./pages/ListPost.jsx"

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <ListPost />
      </div>
    </Provider>
  )
}
export default App
