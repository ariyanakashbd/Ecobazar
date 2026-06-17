import React from 'react'
import discountBanner from '../../assets/discount-banner.webp';
import { Link } from 'react-router';
import Container from './Container';
const Discount = () => {
  return (
    <>
    <Container>
        <div className='mt-15 max-w-[1320px]'>
        <Link><img src={discountBanner} alt="discountBanner" /></Link>
      </div>
    </Container>
    </>
  )
}

export default Discount