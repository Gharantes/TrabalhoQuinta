import { RoutesEnum } from "../../enums/routesEnum"
import './SidebarButton.css';

export type SidebarButtonProps = {
    route: RoutesEnum,
    activeRoute: RoutesEnum,
    setRoute: (route: RoutesEnum) => void
}

function SidebarButton({
    route,
    activeRoute,
    setRoute
}: SidebarButtonProps) {
    return (
      <button 
        onClick={() => setRoute(route)} 
        className={activeRoute == route ? 'active' : ''}>
        { printRouteName() } 
      </button>

    )
  function printRouteName() {
    switch (route) {
        case RoutesEnum.PAGINA_HOME: { return 'Home'; }
        case RoutesEnum.PAGINA_2: { return 'Página 2'; }
        default: return '';
    }
  }
}

export default SidebarButton