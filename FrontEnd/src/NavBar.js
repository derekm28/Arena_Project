import react from 'react';
import { Navbar, 
    NavbarBrand, 
    NavLink, 
    NavItem, 
    Nav, 
    Collapse, 
    NavbarToggler,
    } from 'reactstrap';
import FitnessPage from './FitnessPage';
import SleepPage from './SleepPage';
import MentalHealthPage from './MentalHealth';
import HomePage from './HomePage';
import NutritionPage from './NutritionPage';
import { BrowserRouter, Route } from "react-router-dom";

function NavBar(props){
    return (
        <div>
    <BrowserRouter>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
        <Route exact path = "/homepage">
      <HomePage />
      </Route>
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            <FitnessPage />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            <NutritionPage />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            <SleepPage />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            <MentalHealthPage />
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
  </BrowserRouter>
</div>
    )
}

export default NavBar;