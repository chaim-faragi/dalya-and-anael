import React from 'react'
import Boooks from './Boooks.js'


export default function Mapwork(props) {
 //   const booksobject= props.books.map(book =><Boooks book={book} />)

const hh = props.arr.map((elemnt)=>{return <Link to='/room'>{elemnt.name}</Link>})
    return (
      
        <div>
         
            {booksobject}
        </div>
    )
}
