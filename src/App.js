import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineDingding,
  AiOutlineClose
} from "react-icons/ai";

//image
import blocklogo from './assets/logo3.png';

//components
import Home from './components/home.js';
import NewPoll from './components/NewPoll';
import PollingStation from './components/PollingStation';
import Hero from './components/Hero/Hero'
import Subscribe from './components/Subscribe/Subscribe'
import Developer from './components/Developer/Developer'
// import About from './components/About/About'
// import NewReview frocomponentsm './components/NewReview';
// import CompanyReview from './components/CompanyReview';

// console.log(About,'___About');
// console.log(Hero,'___Hero');

import getConfig from './config'
import { async } from 'regenerator-runtime/runtime';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
const { networkId } = getConfig('development')


export default function App() {
  // const changeCompanyFunction = async (companyName) => {
  //   console.log(companyName);
  //   let companyUrl = await window.contract.getCompanyByName({companyName: companyName });
  //   console.log(companyUrl);
  //   localStorage.setItem("imageUrl",companyUrl[0]);
  //   localStorage.setItem("webUrl",companyUrl[1]);
  //   localStorage.setItem("companyName",companyName);
  //   window.location.replace(window.location.href + "CompanyReview" );
  // }
  const changeCandidatesFunction = async (prompt) => {
    console.log(prompt);
    let namePair = await window.contract.getCandidatePair({ prompt: prompt });
    localStorage.setItem("Candidate1", namePair[0]);
    localStorage.setItem("Candidate2", namePair[1]);
    localStorage.setItem("prompt", prompt);
    window.location.replace(window.location.href + "PollingStation")
  }
  console.log(window.accountId,'__window.accountId')

  return (<Router>
    {/****************** 
    * End Nav bar
    ********************/}
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >  {/*sticky="top"*/}
      <Container>
        <Navbar.Brand href="/">
        <h1 style={{ marginLeft: "1rem", color: "#00d8ff" }}>
          <AiOutlineDingding />
        </h1>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/' >Home</Nav.Link>
            {/* <Nav.Link href='/NewReview' >New Review</Nav.Link> */}
            <Nav.Link href='#/newpoll' >New Record</Nav.Link>
            {/* <Nav.Link href='#/pollingstation' >Record Preview</Nav.Link> */}
           
          </Nav>
          <Nav>
            <Nav.Link onClick={window.accountId === "" ? login : logout} >
              {window.accountId === "" ? "Login" : window.accountId}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    {/* End Nav Bar */}

    {/****************** 
    * Frontend
    ********************/}
    <ScrollToTop />
    <Switch>
      <Route exact path="/">
        <Hero />  
        <Home changeCandidates={changeCandidatesFunction} />
        <Developer />
        <Subscribe />
        <Footer/>
        {/* <About /> */}

        {/* <Home changeCompany={changeCompanyFunction} /> */}
      </Route>
      <Route exact path="/PollingStation">
        <PollingStation />
        <Subscribe />
        <Footer/>
      </Route>
      {/* <Route exact path="/CompanyReview">
        <CompanyReview />
      </Route> */}
      <Route exact path="/NewPoll">
        <NewPoll />
        <Subscribe />
        <Footer/>
      </Route>
      {/* <Route exact path="/NewReview">
        <NewReview />
      </Route> */}
    </Switch>






  </Router>)
}
