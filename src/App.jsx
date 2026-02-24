import './App.css'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import ServicesLanding from './Components/LandingPageBelow'
import Footer from './Components/Footer'
function App() {
  

  return (
    <>
     <main className="relative">
 <Navbar className="sticky top-0 z-50"/>
      <LandingPage className="mt-40"/>
<ServicesLanding className="mt-60"/>
<Footer className="mt-60"/>
     </main>
     
    </>
  )
}

export default App
