import breadcrumb from "../../src/assets/breadcrumbs.webp"
import Container from './layouts/Container'
import { MdHomeFilled } from "react-icons/md";
import { useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    let pageName = useLocation();
    let arr = pageName.pathname.split('/')
  return (
    <>
    <div className='bg-center bg-cover bg-no-repeat' style={{backgroundImage:`url(${breadcrumb})`}}>
        <Container>
            <div className='text-[#808080] flex flex-wrap items-center gap-2 py-6 sm:py-8 md:py-10 lg:py-12 font-pop text-[14px] sm:text-[16px]'>
                <MdHomeFilled className='text-xl sm:text-2xl' />
                 {arr.filter(Boolean).map((item,index,filteredArr)=>(
                  <span key={index} className='font-pop text-xs sm:text-sm text-[#999999]'>
                    {item.charAt(0).toUpperCase() +item.slice(1)}
                    {index < filteredArr.length -1 && <span className='text-[#808080]'>{"/".replace("/"," >")}</span>}
                  </span>
                 ))}
                
            </div>
        </Container>
    </div>
    </>
  )
}

export default Breadcrumb