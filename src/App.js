import logo from './logo.svg';
import './App.css';
import  '../src/variable.scss';
import  '../src/styles.scss';
// import { Button } from 'react-bootstrap';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
    <h1>Welcome Our First Project</h1>
    {/* <Button className='btn btn-primary'>Button</Button> */}
    <Button variant="contained" color="primary"> Hello MUI </Button>
    </div>
  );
}

export default App;
