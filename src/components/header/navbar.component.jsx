import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import logo from '../../assets/logo.gif';
import './navbar.style.css'
const NavbarHeader = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" data-bs-theme="white" dir="rtl">
            <Container fluid id="headerNavbar">
                <Navbar.Brand href="#home" className="">
                    <img src={logo} alt="logo" height="48" width="160" />
                </Navbar.Brand>

                <Nav className="me-5 d-sm-none d-md-inline-flex" >
                    <NavDropdown title="بلیط" id="collasible-nav-dropdown">
                        <NavDropdown.Item className="text-end" href="#action/1.1">پرواز داخلی</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="text-end" href="#action/1.2">پرواز خارجی</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="text-end" href="#action/1.3">قطار</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="text-end" href="#action/1.4">اتوبوس</NavDropdown.Item>
                    </NavDropdown>
                    <div className="vr" id="vrDivider" />
                    <NavDropdown title="اقامت" id="collasible-nav-dropdown">
                        <NavDropdown.Item className="text-end" href="#action/2.1">هتل</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="text-end" href="#action/2.2">ویلا و اقامتگاه</NavDropdown.Item>
                    </NavDropdown>
                    <div className="vr" id="vrDivider" />
                    <Nav.Link href="#ticket" id="collasible-nav-dropdown">تور</Nav.Link>
                    <div className="vr" id="vrDivider" />
                    <NavDropdown title="بیشتر" id="collasible-nav-dropdown">
                        <NavDropdown.Item className="text-end" href="#action/3.1">علی بابا پلاس</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="text-end" href="#action/3.2">مجله علی بابا</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="text-end" href="#action/3.3">بیمه مسافرتی</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="me-auto">
                    <Nav.Link className="me-5" href="#online" id="header-links">مرکز پشتیبانی آنلاین</Nav.Link>
                    <Nav.Link className="me-3" href="#my-travel" id="header-links">سفرهای من</Nav.Link>
                    <Nav.Link className="me-3" href="#ticket" id="header-links">ورود یا ثبت نام</Nav.Link>
                </Nav>
                
            </Container>
        </Navbar>
    );
}

export default NavbarHeader;