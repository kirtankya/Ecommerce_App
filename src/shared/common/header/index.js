
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.scss';
import logo from '../../../assets/logo/logo.png';
import Search from '../../componet/search';
import AddCart from '../../componet/addCart';
import WishList from '../../componet/wishList';

export default function Header({products,setFilteredProducts}) {
    return (
        <div className='header_aligment'>
            <Navbar expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Collapse className='items' id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href='/home'>Home</Nav.Link>
                            <Nav.Link href='/contact'>Contact</Nav.Link>
                            <Nav.Link href='/about'>About</Nav.Link>
                            <Nav.Link href='/signup'>Signup</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div style={{ display: 'flex', gap: '20px' }} className="aligment-flex">
                        <div className='search_Items'>
                            <Search products={products} setFilteredProducts={setFilteredProducts} />
                        </div>
                        <div className="header_items">
                            <div className="wishList_Item">
                                <WishList />
                            </div>
                            <div className="addTocart_Item">
                                <AddCart />
                            </div>
                        </div>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
            </Navbar>
        </div>
    );
}

