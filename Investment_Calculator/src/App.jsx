import { useState } from "react";
import Result from "./Components/Result";
import UserInput from "./Components/UserInput";

function App() {
  const [inputValue, setInputValue] = useState({
    initial: 10000,
    annual: 1200,
    return: 6,
    duration: 10 
  });

  const inputIsValid = inputValue.duration > 0;

  function inputChange(inputIdentifier, newValue){
    setInputValue((prevInput) => {
      return{
        ...prevInput,
        [inputIdentifier]: +newValue
      }
    });
  }
  return (
    <>
      <UserInput input={inputValue} handleInputChange={inputChange}/>
      {!inputIsValid && <p className="center">Please enter a Duration greater than 0.</p> }
      {inputIsValid && <Result input={inputValue}/>}
    </>
  )
}

export default App
