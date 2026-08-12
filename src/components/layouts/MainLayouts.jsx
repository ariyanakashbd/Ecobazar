import { Outlet, useLocation } from 'react-router';
import TopBer from './TopBer'; // ফোল্ডার পাথ অনুযায়ী ঠিক রাখুন
import SearchBar from './SearchBar';
import NavBer from '../NavBer';
import Footer from '../Footer';
import Subcribe from '../Subcribe';
import Breadcrumb from '../Breadcrumb';

const MainLayouts = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <TopBer />
      <SearchBar />
      <NavBer />
      {!isHomePage && <Breadcrumb />}
      <Outlet />
      <Subcribe />
      <Footer />
    </>
  );
};

export default MainLayouts;