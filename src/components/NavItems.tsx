'use client'

import { NAV_ITEMS } from '@/lib/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
    const pathname = usePathname();

    // const isActive=(path:string)=>{
    //     ...
    // }
  return (
    <ul className=' flex '>
        {NAV_ITEMS.map(({ label, href }) => (
            <li key={href} className={`p-1.5 rounded-full nav-item ${pathname === href ? 'active shadow-lg' : ''} hover:text-yellow-500 dark:hover:bg-gray-700 transition-all duration-200`}>
                <Link href={href} >
                    {label}
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default NavItems
