
import {Nav, Navbar} from 'react-bootstrap'
import { Link, Route, Switch } from "react-router-dom";
import './Header.css'

function Header(props) {
    
    
    return(
        <>     
            <Navbar bg="dark" variant="dark" className="justify-content-center customNavbarBackground">              
                    <Nav className="mr-auto">               
                        <Link style={{ textDecoration: 'none' }} to="/home" className="customNavItemPadding">O nas</Link>
                        <Link style={{ textDecoration: 'none' }} to="/servicesInfo" className="customNavItemPadding">Usługi</Link>
                        <Link style={{ textDecoration: 'none' }} to="/contact" className="customNavItemPadding">Kontakt</Link>
                        <Link style={{ textDecoration: 'none' }} to="/location" className="customNavItemPadding">Lokalizacja</Link>                               
                    </Nav>           
            </Navbar>
        </>
    );
  }

  export default Header;