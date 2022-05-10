import { slide as Menu } from "react-burger-menu";
import "./Menu.css";
import Logo from "./components/images/logos.png";
import User1 from "./components/images/aimee.png";

//Usage
import { FiHome } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiFlag2Line } from "react-icons/ri";
import { CgSmartphoneChip } from "react-icons/cg";
import {
  IoCalendarClearOutline,
  IoChatbubbleEllipsesOutline,
  IoChatbubblesOutline,
  IoSettingsOutline,
  IoSearchOutline,
  IoExitOutline
} from "react-icons/io5";

const Menuside = () => {
  return (
    <Menu>
      <div className="sidebar-header">
        <a className="header">
          <img className="img-logo" src={Logo} alt="" />
        </a>
      </div>

      <div className="menu-containermenu">
        <a id="home" className="menu-item" href="/home">
          <i class="fas fa-home">
            <FiHome />
          </i>
          Home
        </a>

        <a id="calendario" className="menu-item" href="/">
          <i class="fas fa-home">
            <IoCalendarClearOutline />
          </i>
          Calendario
        </a>

        <a id="dashboard" className="menu-item" href="/dashboard">
          <i class="fas fa-home">
            <MdOutlineDashboard />
          </i>
          Dashboard
        </a>

        <a id="metas" className="menu-item" href="/">
          <i class="fas fa-home">
            <RiFlag2Line />
          </i>
          Metas
        </a>

        <a id="componentes" className="menu-item" href="/">
          <i class="fas fa-home">
            <CgSmartphoneChip />
          </i>
          Componentes
        </a>

        <a id="foro" className="menu-item" href="/">
          <i class="fas fa-home">
            <IoChatbubblesOutline />
          </i>
          Foro
        </a>

        <a id="calendario" className="menu-item-u" href="/">
          <i className="fa fa-home">
            <IoSearchOutline />
          </i>
          Buscar
        </a>
      </div>

      <div className="menu-containeruser">
        <a id="mensajes" className="menu-item" href="/">
          <i class="fas fa-home">
            <IoChatbubbleEllipsesOutline />
          </i>
          Mensajes
        </a>

        <a id="configuracion" className="menu-item-u" href="/">
          <i className="fa fa-home">
            <IoSettingsOutline />
          </i>
          Configuración
        </a>

        <a id="calendario" className="menu-item-u" href="/">
          <img className="user" src={User1} alt="" />
        </a>

        <a id="salir" className="menu-item-u" href="/">
          <i className="fa fa-home">
            <IoExitOutline />
          </i>
          Salir
        </a>
      </div>
    </Menu>
  );
};

export default Menuside;
