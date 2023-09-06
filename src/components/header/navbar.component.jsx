import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

import logo from '../../assets/logo.gif';

const NavbarHeader = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" data-bs-theme="white" >
            <Container>
                <Navbar.Brand href="#home" className="position-absolute end-0">
                    <img src={logo} alt="logo" height="48" width="160" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="me-3" href="#ticket">ورود یا ثبت نام</Nav.Link>
                        <Nav.Link className="me-3" href="#my-travel">سفرهای من</Nav.Link>
                        <Nav.Link className="me-5" href="#online">مرکز پشتیبانی آنلاین</Nav.Link>
                    </Nav>
                    <Nav className="me-5" >
                        <NavDropdown title="بیشتر" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">علی بابا پلاس</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">مجله علی بابا</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">بیمه مسافرتی</NavDropdown.Item>
                        </NavDropdown>

                        <vr className="vr vr-blurry" />

                        <Nav.Link href="#ticket">تور</Nav.Link>

                        <vr className="vr vr-blurry" />

                        <NavDropdown title="اقامت" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/2.1">هتل</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/2.2">ویلا و اقامتگاه</NavDropdown.Item>
                        </NavDropdown>

                        <vr className="vr vr-blurry" />

                        <NavDropdown title="بلیط" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/1.1">پرواز داخلی</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/1.2">پرواز خارجی</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/1.3">قطار</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/1.4">اتوبوس</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarHeader;