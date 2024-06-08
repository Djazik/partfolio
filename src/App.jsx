import './App.css'
import Abot from './components/about/Abot'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Partfolio from './components/partfolio/Partfolio'
import Prinsing from './components/prinsing/Prinsing'
import Resume from './components/resume/Resume'
import Services from './components/services/Services'
import SideBar from './components/sidebar/SideBar'
import Tastimol from './components/tastimol/Tastimol'

function App() {

  return (
    <>
    <SideBar/>
    <main className='main'>
      <Home/>
      <Abot/>
      <Services/>
      <Resume/>
      <Partfolio/>
      <Prinsing/>
      <Tastimol/>
      <Blog/>
      <Contact/>
    </main>
    </>
  )
}

export default App
