import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import MainContent from './MainContent.jsx'
import Footer from './Footer.jsx'

import { Fragment } from 'react'
import App from './App.jsx'

/**
 * Challenge: move the MainContent and Footer components to their own
 * separate files.
 */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>
)

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}


