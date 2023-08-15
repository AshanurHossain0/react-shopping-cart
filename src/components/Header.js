import React from 'react'
import {Navbar,Container, FormControl,Nav, Dropdown, Badge} from 'react-bootstrap'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{height:80}}>
        <Container>
            <Navbar.Brand>
                <Link>Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl className='m-auto' placeholder='Seacrh product' style={{width:500}}/>
            </Navbar.Text>
            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant='success'>
                        <FaShoppingCart color="white" fontSize="25px" style={{marginRight:5}}/>
                        <Badge>10</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{minWidth:370}}>
                        <span style={{padding:10}}>Cart is empty!</span>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header