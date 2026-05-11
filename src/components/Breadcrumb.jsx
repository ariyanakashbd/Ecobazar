import React from 'react'
import breadcrumb from "../../src/assets/breadcrumbs.webp"
import Container from './layouts/Container'
import { MdHomeFilled } from "react-icons/md";
import { useLocation } from 'react-router';

const Breadcrumb = () => {
    let pageName = useLocation();
    let arr = pageName.pathname.split('/')
  return (
    <>
    <div style={{background:`url(${breadcrumb})`}}>
        <Container>
            <div className='text-[#808080] flex items-center gap-2 py-5 font-pop text-[16px]'>
                <MdHomeFilled className='text-2xl' />
                 {arr.map((item,index)=>(
                  <span key={index} className='font-pop text-sm text-[#999999]'>
                    {item.charAt(0).toUpperCase() +item.slice(1)}
                    {index < arr.length -1 && <span className='text-[#808080]'>{"/".replace("/"," >")}</span>}
                  </span>
                 ))}
                <span></span>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Breadcrumb