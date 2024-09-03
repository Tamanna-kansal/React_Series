import './App.css'
import { First } from './components/first.jsx';
import { Second } from './components/second.jsx';
import { Message } from './components/Message.jsx';
import Destructure from './components/destructure_props.jsx';
import MethodProps from './components/methodProps.jsx';
import Conditional from './components/conditionalrender.jsx';
import Mapp from './components/map_function.jsx';
function App() {

  function greet() {
    alert("Welcome to the website");
  }
  return (
    <>
      {/* <First name="App" heroName="Batsman" >
        <p>This is children props</p></First >
      <First name="Bruce" heroName="Superman" >
        <button>Button</button></First>
      <First name="Clark" heroName="Wonder Woman" />
      <First name="Diana" heroName="Wonder Man" />
      <Second name="Rahul" heroName="Siddharth"></Second> */}
      {/* <Message />
      <Destructure name="Rahul" heroName="Wonder Woman" /> */}
      {/* <MethodProps greetHandler={greet} /> */}
      {/* <Conditional /> */}
      <Mapp />
    </>
  )
}

export default App;
