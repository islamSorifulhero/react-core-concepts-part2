import './App.css'
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';
import Friends from './Friends';

import { Suspense } from 'react';
import Posts from './Posts';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

// const fetchFriends = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   return res.json();
// }

// const fetchFriends = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();
}

function App() {

  // const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();


  function handleClick() {
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

      <Suspense fallback={<h4>Posts are coming...</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Frends are coming for treat ...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      <Batsman></Batsman>

      <Counter></Counter>

      {/* <button onclick="handleClick()">Click me</button> */}
      <button onClick={handleClick}>Click me</button>
      <button onClick={function handleClick2() {
        alert('I am 2 click')
      }}>Click me 2</button>
      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={() => alert('click 4 complete')}>clicked 4 done</button>
      <button onClick={() => handleClick5(105)}>click 5 done</button>
    </>
  )
}

export default App
