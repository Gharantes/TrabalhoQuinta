import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import PageHome from './components/PageHome'
import { useState } from 'react'
import { RoutesEnum } from './enums/routesEnum'
import Page2 from './components/Page2'

function App() {
  const [activeRoute, setActiveRoute] = useState<RoutesEnum>(RoutesEnum.PAGINA_HOME);

  return (
    <>
      <Header />

      <div className='container'>
        <Sidebar 
          activeRoute={activeRoute} 
          setActiveRoute={setActiveRoute}
        />
        {
          activeRoute == RoutesEnum.PAGINA_HOME ? <PageHome /> 
          : activeRoute == RoutesEnum.PAGINA_2 ? <Page2 />
          : <div></div> 
        }
        
      </div>
    </>
  )
}

export default App
