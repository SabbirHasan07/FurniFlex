import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavMenu } from '../component/Navbar'
import { FooterComponent } from '../component/Footer'

const Root = () => {
    return (
        <div>
            <div className='max-w-[1200px] mx-auto w-full'>
                <NavMenu />
                <Outlet />
            </div>
            <FooterComponent />
        </div>
    )
}

export default Root