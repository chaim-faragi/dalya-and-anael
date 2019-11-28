// import React from 'react'
import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom'
//import Title from './components/Title.js'
import One from './One.js'
//import Two from './components/Two.js'
import Menu from './Menu.js'
//import Post from './components/Post.js'
//import Showrooms from './components/Showrooms.js'
import Buildtheroom from './Buildtheroom.js'
import './App.css';

export default function App() {
  const [room,setRoom] = useState([]);
  
 let addroom=(name,color,type)=>{

    setRoom(
    //{room:[...room, {roomname:name,roomcolor:color,roomtype:type}]}
    room => [...room, {roomname:name,roomcolor:color,roomtype:type}]
      )
  };

  //rooms = rooms.map(elemnt=> <Link to='/room'>{elemnt.name}</Link>)
  return (
    <div className='App'>
       {/* <Title/>  */}
      {/* <Post/> */}
      <Router>

      {room.map(elemnt=> <Link to='/room'>{elemnt.name}</Link>)}

      </Router>
      {/* here is where i gonna put all the room by mapping the arry  */}
      {/* <Showrooms/> */}
      

      <Router>
        <Menu/>
        <Switch>
        <Route  exact path='/' component={()=>{return <Buildtheroom add={addroom} />}}/> 
        {/* i need to make this chanel in a whole new page */}
          <Route  exact path='/' component={()=>{return <One num={1} />}}/> 
          <Route exact path='/second' component={()=>{return <One num={2}/>}}/> 
        </Switch>
      </Router>
    </div>
  )
}
