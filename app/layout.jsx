import Nav from '@/components/Nav'
import '../styles/globals.css'

import React from 'react'
import Provider from '@/components/Provider'

export const metadata = {
    title: 'PromtFinder',
    description: 'find your promt here'
}

const RootLayout = ({children}) => {
  return (
  <html>
    <body>
      <Provider> 
        <div className='main'>
            <div className='gradient'/>
        </div>
        <main className='app'>
            <Nav/>
       {children}
        </main>
        </Provider>
    </body>
  </html>
  )
}

export default RootLayout