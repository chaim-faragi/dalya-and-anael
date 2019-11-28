import React,{useState,useEffect} from 'react'


export default function Post(props) {

    const[name,setName] =useState('shem')
    const[info,setInfo] =useState('abcdefg')
    const[myColor,setmyColor] =useState('black')




    return (
        <div>
            <p style={{color:myColor}}>{name}</p>
            
            {info}
            <input type='text' onChange={(e)=>{setName(e.target.value)}}></input>
            <input type='text' onChange={(e)=>{setmyColor(e.target.value)}}></input>
        </div>
    )
}
