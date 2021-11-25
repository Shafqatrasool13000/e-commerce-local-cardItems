import './App.css';
import NavBar from './components/Navbar/Navbar';
import Card from './components/cards/Card'
import { Container } from '@mui/material';


function App() {
  return (
    <>
      <NavBar />
    <Container>
      <Card />
    </Container>
    </>
  );
}

export default App;
