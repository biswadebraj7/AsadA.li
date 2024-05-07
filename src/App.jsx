
import { Outlet } from 'react-router-dom'
import Client from './Component/Client'

import About from './Pages/About'
import Nav from './Navbar/Nav'
import Banner from './Component/Banner'
import Benefit from './Component/Benefit'
import Facts from './Component/Facts'
import Testimotiner from './Pages/Testimotiner'
import Footer from './Pages/Footer';
import Sourcs from './Component/Sourcs'

function App() {


  return (
    <>
      <Nav></Nav>
      <div className=' container mx-auto max-w-[1620px]'>
        <Banner></Banner>
      </div>
      <Client></Client>
      <Benefit></Benefit>
      <About></About>
      <div className=' mx-auto max-w-[1620px]'>
      <Facts></Facts>
      </div>
 
      <Outlet></Outlet>
      <div className=' mx-auto max-w-[1620px]'>
      <Sourcs></Sourcs>
      <Testimotiner></Testimotiner>
    </div>
     <div className=' bg-[#222122]'>
     <Footer></Footer>
     </div>

     
    </>
  )
}

export default App
