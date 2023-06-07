import React from 'react'
import './NavBar.css'
import logo from '../../Assets/boasLogo.webp'

const NavBar = () => {
    return (
     

            <div className='navBarMain'>

                <div className='navBarUpper'>
                    <div className='burger-icon'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M3.5 5a1 1 0 0 0 0 2h17a1 1 0 1 0 0-2h-17Zm-1 7a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1Zm0 6.001a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1Z" clip-rule="evenodd"/></svg></span>
                    </div>
                    <div className='upperLeft'>
                        <span>Women</span>
                        <span>Men</span>
                        <span>Kids</span>
                        <span>Baby</span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.031 20.79c.46.46 1.17-.25.71-.7l-3.75-3.76a7.904 7.904 0 0 0 2.04-5.31c0-4.39-3.57-7.96-7.96-7.96s-7.96 3.57-7.96 7.96c0 4.39 3.57 7.96 7.96 7.96c1.98 0 3.81-.73 5.21-1.94l3.75 3.75zM4.11 11.02c0-3.84 3.13-6.96 6.96-6.96c3.84 0 6.96 3.12 6.96 6.96s-3.12 6.96-6.96 6.96c-3.83 0-6.96-3.12-6.96-6.96z"/></svg></span>

                    </div>
                    <div className='upperMiddle'>

                        <img src={logo} className='logoSize' alt=''></img>
                    </div>


                    <div className='upperRight'>
                        <span>About us </span>
                        <span>Account </span>
                        <span>Cart </span>
                        <span>Language </span>
                    </div>

                </div>

                <div className='navBarUnder'>
                    <div className='underMiddle'>

                        <span>Sustainable T-shirts </span>
                        <span>Pre-owned Jeans </span>
                        <span>Vintage Levi's Jeans </span>
                    

                    </div>

                </div>


            </div>

     
    )
}

export default NavBar