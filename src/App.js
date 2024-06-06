import logo from './logo.svg';
import './App.css';
import  '../src/variable.scss';
import  '../src/styles.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import { Button } from 'react-bootstrap';
import Button from '@mui/material/Button';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function App() {
  return (
    <div className="App">
    <h1>Welcome Our First Project</h1>
    {/* <Button className='btn btn-primary'>Button</Button> */}
    <Button variant="contained" color="primary"> Hello MUI </Button>
    <AccessTimeIcon/>
    </div>
  );
}

export default App;
