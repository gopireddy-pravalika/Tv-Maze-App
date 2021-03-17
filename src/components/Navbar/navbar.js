import React ,{useState ,useEffect} from "react";
import { Navbar, Nav, Container, Form, FormControl, Row, Col  } from "react-bootstrap";
import { NavWrapper } from "./style";
import { Link} from "react-router-dom";
import { FaSearch,FaHome } from "react-icons/fa";
import { useHistory } from 'react-router-dom';

//Holds home page navigation along with search
export default function Navbars() {
  const history = useHistory();

  let  handleChange = (event) =>{
    if (event.charCode === 13){
      if(event.target.value ===""){
        history.push('/');
      }else{
        history.push('/search/'+event.target.value)
      }
     }
 }
  return (
    <NavWrapper>
      <Container>
        <Navbar expand="lg">
        <Row>
        <Col md="4"  xs="4">
          <Link to="/">
          <img id="logo" src="//static.tvmaze.com/images/tvm-header-logo.png" alt="TVmaze" width="80%"/>
          </Link>
          </Col>
          <Col md="8"  xs="8">
          <Form inline>
            <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onKeyPress={handleChange}
              />
            </Form>
            </Col>
            </Row>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline>
              <FaSearch />
            <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onKeyPress={handleChange}
              />
            </Form>
          </Navbar.Collapse> */}
        </Navbar>
      </Container>
    </NavWrapper>
  );
}
