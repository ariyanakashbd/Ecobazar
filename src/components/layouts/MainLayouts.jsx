import React from 'react'
import { Outlet } from 'react-router'
import TopBer from '../layouts/TopBer'
import SearchBar from './SearchBar'
import NavBer from '../NavBer'
import Footer from '../Footer'
import Subcribe from '../Subcribe'
import Breadcrumb from '../Breadcrumb'
import { useLocation } from 'react-router'
import Banner from './Banner'


const MainLayouts = () => {
  let pageName = useLocation().pathname
  return (
    <>
    <TopBer/>
    <SearchBar/>
    <NavBer/>
    <Banner/>
    {pageName !== '/' && <Breadcrumb/>}
    <Outlet/>
    <Subcribe/>
    <Footer/>
    
    </>
    
  )
}

export default MainLayouts