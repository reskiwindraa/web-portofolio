import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar py-7 flex items-center justify-between px-6'>
        <div className='logo'>
        <h1 className='text-3xl font-bold'>Portofolio</h1>
        </div>

        <ul className='menu flex items-center gap-10 sm:static text-lg font-medium fixed left-1/2 -translate-x-1/2 
        md:translate-x-0'>
            <li>
                <a href="#" className='text-lg font-medium hover:font-semibold'>Beranda</a>
            </li>
            <li>
                <a href="#" className='text-lg font-medium hover:font-semibold'>Tentang</a>
            </li>
            <li>
                <a href="#" className='text-lg font-medium hover:font-semibold'>Projek</a>
            </li>
            <li>
                <a href="#" className='text-lg font-medium hover:font-semibold'>Kontak</a>
            </li>
        </ul>
    </div>
    
  )
}

export default Navbar