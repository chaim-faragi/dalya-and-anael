// import React from 'react'
import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom'
//import Title from './components/Title.js'
import One from './One.js'
//import Two from './components/Two.js'
import Menu from './components/Menu.js'
//import Post from './components/Post.js'
import Showroom from './components/Showroom.js'
import Buildtheroom from './components/Buildtheroom.js'
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
      
      {/* here is where i gonna put all the room by mapping the arry  */}
      {/* <Showrooms/> */}
      

      <Router>

      <ul>
        {room.map(elemnt=> <li><Link to={{pathname:"/room", state:{ttt:elemnt}}}>{elemnt.roomname}</Link></li>)}
        </ul>
        <Menu/>
        <Switch>
 
        <Route  exact path='/third' component={()=>{return <Buildtheroom add={addroom} />}}/> 
        {/* i need to make this chanel in a whole new page */}
          <Route  exact path='/' component={()=>{return <One num={1} />}}/> 
          <Route exact path='/second' component={()=>{return <One num={2}/>}}/> 
          <Route exact path='/room' component={()=>{return <Showroom/>}}/> 
        </Switch>
      </Router>
    </div>
  )
}
