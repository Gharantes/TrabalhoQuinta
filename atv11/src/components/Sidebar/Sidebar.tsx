import { RoutesEnum } from "../../enums/routesEnum"
import SidebarButton from "../SidebarButton/SidebarButton";
import './Sidebar.css';

export type SidebarProps = {
  activeRoute: RoutesEnum,
  setActiveRoute: (route: RoutesEnum) => void
}

function Sidebar({
  activeRoute,
  setActiveRoute
}: SidebarProps) {
    return (
      <div className="sidebar-container">
        <SidebarButton 
          route={RoutesEnum.PAGINA_HOME}
          activeRoute={activeRoute}
          setRoute={setActiveRoute}
        />
        <SidebarButton 
          route={RoutesEnum.PAGINA_2}
          activeRoute={activeRoute}
          setRoute={setActiveRoute}
        />
      </div>
    )
  }
  
  export default Sidebar