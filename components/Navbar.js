import { Container, Navbar, Nav } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <Navbar bg='dark'>
        <Container>
          <Nav>
            <h1>
              {/* <Link to='/'>Home</Link> */}
              <Nav.Link href='/'>Home</Nav.Link>
            </h1>
            <h1>
              <Nav.Link href='/songs'>Songs</Nav.Link>
              {/* <Link to='/songs'>Songs</Link> */}
            </h1>
            {/* <Link to='/songs/new'>New Song</Link>
             */}
            <h1>
              <Nav.Link href='/songs/new'>New Song</Nav.Link>
            </h1>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar