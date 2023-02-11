import Hero from './components/containers/Hero'
import Nav from './components/containers/Nav'
import Card from './components/containers/Card'
import Footer from './components/containers/Footer'
import './style/main.css'

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Hero />
      <Card />
      <Footer />
    </div>
  )
}

export default App
