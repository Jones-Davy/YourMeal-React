import Catalog from "./components/Catalog/Catalog"
import Header from "./components/Header/Header"
import Navigation from "./components/Navigation/Navigation"
import ModalDelivery  from "./components/ModalDelivery/ModalDelivery"
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
    <ModalDelivery />
    
    </Provider>
  )
}

export default App
