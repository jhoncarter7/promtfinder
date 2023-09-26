import '@styles/globals.css'

import React from 'react'

export const metadata = {
    title: 'PromtFinder',
    description: 'find your promt here'
}

const RootLayout = ({children}) => {
  return (
  <html>
    <body>
        <div className='main'>
            <div className='gradient'/>
        </div>
        <main className='app'>
       {children}
        </main>
    </body>
  </html>
  )
}

export default RootLayout