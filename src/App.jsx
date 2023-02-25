import Catalog from "./components/Catalog/Catalog"
import Container from "./components/Container/Container"
import Header from "./components/Header/Header"
import Navigation from "./components/Navigation/Navigation"

const App = () => {

  return (
    <>
    <Header />

    <main>
      <Navigation/>
      <Catalog />
    </main>

    <footer></footer>

    
    </>
  )
}

export default App
