import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Fragment } from 'react'
import App from './App.jsx'

/**
 * Challenge:
 * 
 * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 *   "Pricing", "About", and "Contact"
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

function Header() {
  return (
    <header>
      <img src="/src/assets/react.svg" width="40px" alt="React logo"/>
      <nav>
          <ul>
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
      </nav>
    </header>
  )
}

function MainContent() {
  return (
    <main>
        <h1>Reasons I'm excited to learn React</h1>
        <ol>
          <li>I want to better my ability to learn.</li>
          <li>I want to be more employable</li>
          <li>I want to be able to make a living doing something I enjoy.</li>
        </ol>
      </main>
  )
}

function Footer() {
  return (
    <footer>
      <small>© 20xx Idusuyi development. All rights reserved</small>
    </footer>
  )
}


