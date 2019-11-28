import React from 'react'
import {Link} from 'react-router-dom'

export default function Menu() {
    return (
        <div>
            <Link to='/'> home</Link><br/>
            <Link to='/second'> second</Link><br/>
      
             <Link to='/third'> Buildtheroom</Link>
        </div>
    )
    }