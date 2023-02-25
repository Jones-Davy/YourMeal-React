import Catalog from "./components/Catalog/Catalog"
import Container from "./components/Container/Container"
import Header from "./components/Header/Header"
import Navigation from "./components/Navigation/Navigation"
import { Provider } from "react-redux"
import { store } from "./store"

const App = () => {

  return (
    <Provider store={store}>
    <Header />

    <main>
      <Navigation/>
      <Catalog />
    </main>

    <footer></footer>

    
    </Provider>
  )
}

export default App
