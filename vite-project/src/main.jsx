import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from './header/header'
import SectOne from './sectOne/sectOne'
import SectTwo from './sectTwo/sectTwo'
import SectThree from './sectThree/sectThree'
import SectFour from './sectFour/sectFour'
import SectFive from './sectFive/sectFive'
import SectSix from './sectSix/sectSix'
import SectSeven from './sectSeven/sectSeven'
import Footer from './footer/footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <SectOne/>
    <SectTwo/>
    <SectThree/>
    <SectFour/>
    <SectFive/>
    <SectSix/>
    <SectSeven/>
    <Footer/>
  </StrictMode>,
)
