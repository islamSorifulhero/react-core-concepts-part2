import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'

function App() {
  function handleClick(){
    alert('I am Clicked')
  }

  const handleClick3 = () => {
    alert('clicked me done 3')
  }

  const handleClick5 = (num) => {
    const newNum = num + 5;
    alert(newNum)
  }

  return (
    <>
      <p>Vite + React</p>

      <Batsman></Batsman>

      <Counter></Counter>

      {/* <button onclick="handleClick()">Click me</button> */}
      <button onClick={handleClick}>Click me</button>
      <button onClick={function handleClick2(){
        alert('I am 2 click')
      }}>Click me 2</button>
      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={() => alert('click 4 complete')}>clicked 4 done</button>
      <button onClick={() => handleClick5(105)}>click 5 done</button>
    </>
  )
}

export default App
