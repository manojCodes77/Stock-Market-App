import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavItems from './NavItems'
import UserDropdown from './UserDropdown'

const Header = () => {
    return (
        <header className='sticky top-0 header'>
            <div className="container header-wrapper w-full h-full">
                <Link href="/" className='logo'><Image src={"assets/icons/logo.svg"} alt="Logo" width={200} height={100} />

                </Link>
                <div className=" flex flex-row ">
                    <div className=' md:block hidden'>
                        <NavItems />
                    </div>
                    
                    <UserDropdown />
                </div>
            </div>
        </header>
    )
}

export default Header
