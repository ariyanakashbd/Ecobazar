import discountBanner from '../../assets/discount-banner.webp';
import { Link } from 'react-router';
import Container from './Container';
const Discount = () => {
  return (
    <>
    <Container>
        <div className='mt-10 sm:mt-15 w-full'>
        <Link><img className='w-full h-auto rounded-xl' src={discountBanner} alt="discountBanner" /></Link>
      </div>
    </Container>
    </>
  )
}

export default Discount
