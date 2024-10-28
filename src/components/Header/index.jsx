import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Header({cartItems}) {
  const navigate = useNavigate()
  return (
    <section className='flex justify-between item-center p-4 bg-gray-100 shadow-md'>
        <button onClick={() =>{navigate ('/')}} className='text-2x1 font-bold text-gray-800'>My store</button>
        <Link to='/cart' className='text-lg text-blue-600 hover:text-blue-800'>
            Giỏ hàng {cartItems.length}
        </Link>

    </section>
  )
}

