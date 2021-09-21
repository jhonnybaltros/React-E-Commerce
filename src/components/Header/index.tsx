
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#home">React E-Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                        <Nav.Link href="/login"><i className='fas fa-user'></i>Sing In</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>    
                </Navbar>
        </header>
    )
}

export default Header
