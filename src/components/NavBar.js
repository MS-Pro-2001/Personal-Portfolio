
import { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const NavBar = () => {
  
    const [activeLink, setActiveLink] = useState('home');  //to check which link is currently active
    const [scrolled,setScrolled ] = useState(false); //need to figure out what exactly I am using this for



    useEffect(() => {
     const onScroll = ()=>{
        if(window.scrollY>50){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
     }

     window.addEventListener("scroll",onScroll);
     return() => window.addEventListener("scroll",onScroll);



    }, [])
    




  return (
    <Navbar expand="lg" className={scrolled? "scrolled":"" }>
      <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span>

            </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink ==='home'? 'active navbar-link':'navbar-link'}>Home</Nav.Link>
            <Nav.Link href="#skills"className={activeLink ==='home'? 'active navbar-link':'navbar-link'}   >Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink ==='home'? 'active navbar-link':'navbar-link'} >projects</Nav.Link>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <span  className='navbar-text' >
            <div className='social-icons'>
                <a href='#'><img src={''}  alt="" /></a>
                <a href='#'><img src={''} alt="" /></a>
                <a href='#'><img src={''}  alt=""/></a>

            </div>
            <button className='vvd' onClick={()=>{console.log('connect')}} >
             <span>   Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar