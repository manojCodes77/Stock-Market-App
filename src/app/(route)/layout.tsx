import Header from '@/components/Header'
import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <Header />
    <main>
        {/* <UserDropdown /> */}
        <div className="container">
            {children}
        </div>
    </main>
    </>
  )
}

export default Layout
