//import logo from './logo.svg';
//import './App.css';
import ContactProfile from './ContactProfile';
import myImage1 from '../src/img.jpg';

function App(props) {
  return (
    <>
      <ContactProfile name="Julia Clarke" text="New York, USA" img={myImage1}/>
    </>
  );
}

export default App;
