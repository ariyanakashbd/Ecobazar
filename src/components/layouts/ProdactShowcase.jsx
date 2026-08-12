import Container from './Container'
import popular1 from '../../assets/popular1.webp'
import { Link } from 'react-router'
import { IoIosArrowRoundForward } from "react-icons/io"
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const ProdactShowcase = ({ title, dataPass }) => {
  function rating(count) {
    let halfStar = count.toString().split('.')[1];
    let index = Math.floor(count);
    let arr = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= index) {
        arr.push("color");
      } else {
        arr.push(i);
      }
    }
    if (halfStar) {
      arr[index] = "half";
    }
    return arr;
  }

  const isHotDeals = title === "Hot Deals";

  const renderStars = (value, size = '11px') =>
    rating(value).map((star, i) =>
      star === "color" ? (
        <FaStar key={i} className={`text-yellow-300 text-[${size}]`} />
      ) : star === "half" ? (
        <FaStarHalfAlt key={i} className={`text-yellow-300 text-[${size}]`} />
      ) : (
        <FaStar key={i} className={`text-gray-300 text-[${size}]`} />
      )
    );

  const SmallCard = ({ item }) => (
    <div className='relative border border-[#E6E6E6] rounded-[5px] hover:border-primry hover:shadow-lg transition-all duration-300 p-4 group'>
      {item.discount && (
        <span className='absolute top-2 left-2 bg-red-500 text-white text-[10px] font-medium px-2 py-1 rounded z-10'>
          Sale {item.discount}%
        </span>
      )}

      <img
        src={item.thumbnail || popular1}
        alt={item.name || item.title}
        className='mx-auto h-[90px] object-contain mb-3'
      />

      <h3 className='text-[#1A1A1A] font-pop font-medium text-[14px] group-hover:text-primry transition-colors duration-300'>
        {item.name ? item.name : `${item.title?.slice(0, 16)}...`}
      </h3>

      <div className='flex items-center justify-between mt-1'>
        <div className='flex items-center gap-1'>
          <span className='font-semibold text-[14px] text-[#1A1A1A]'>${item.price}</span>
          {item.oldPrice && (
            <span className='text-gray-400 line-through text-[12px]'>${item.oldPrice}</span>
          )}
        </div>
        <button className='w-7 h-7 shrink-0 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 group-hover:bg-[#00B207] group-hover:text-white group-hover:border-[#00B207] transition-colors'>
          <HiOutlineShoppingBag size={13} />
        </button>
      </div>

      {item.rating && <div className='flex mt-1'>{renderStars(item.rating)}</div>}
    </div>
  );

  return (
    <Container>

      <div className='lg:flex justify-between mt-15 mb-8 font-pop font-normal text-sm'>
        <h2 className='font-pop font-semibold text-[24px] lg:text-[32px] text-[#1A1A1A]'>
          {title}
        </h2>
        <Link
          className='flex items-center font-pop text-[14px] mt-5 lg:mt-0 lg:text-[16px] font-medium text-primry'
          to="/cat"> View All<IoIosArrowRoundForward className='text-[25px] lg:text-[30px]' /></Link>
      </div>

      {isHotDeals ? (
        <div className='flex flex-col gap-4 w-full'>

          
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4'>
            {dataPass?.[0] && (
              <div className='col-span-2 row-span-2 hover:border-2 border-primry rounded-[5px] p-4 relative'>
                <div className='flex gap-2 absolute top-4 left-4 z-10'>
                  {dataPass[0].discount && (
                    <span className='bg-red-500 text-white text-[11px] px-2 py-1 rounded'>
                      Sale {dataPass[0].discount}%
                    </span>
                  )}
                  <span className='bg-blue-500 text-white text-[11px] px-2 py-1 rounded'>Best Sale</span>
                </div>

                <img
                  src={dataPass[0].thumbnail || popular1}
                  alt={dataPass[0].name || dataPass[0].title}
                  className='mx-auto w-[75%] mt-6'
                />

                <div className='flex justify-between items-center gap-2 mt-4'>
                  <button className='w-9 h-9 shrink-0 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors'>
                    <CiHeart size={20} />
                  </button>
                  <button className='flex-1 bg-primry hover:bg-[#2C742F] transition-colors text-white text-[13px] lg:text-[14px] font-medium py-2.5 rounded flex items-center justify-center gap-2'>
                    Add to Cart <HiOutlineShoppingBag />
                  </button>
                  <button className='w-9 h-9 shrink-0 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:text-[#00B207] hover:border-[#00B207] transition-colors'>
                    <FaEye size={16} />
                  </button>
                </div>

                <h3 className='text-[#2C742F] font-pop font-medium text-[16px] mt-4 text-center'>
                  {dataPass[0].name ? dataPass[0].name : `${dataPass[0].title?.slice(0, 16)}...`}
                </h3>

                <div className='flex items-center justify-center gap-2 mt-1'>
                  <span className='text-[#1A1A1A] font-semibold text-[16px]'>${dataPass[0].price}</span>
                  {dataPass[0].oldPrice && (
                    <span className='text-gray-400 line-through text-[14px]'>${dataPass[0].oldPrice}</span>
                  )}
                </div>

                {dataPass[0].rating && (
                  <div className='flex items-center justify-center gap-1 mt-1'>
                    {renderStars(dataPass[0].rating, '12px')}
                    {dataPass[0].reviewCount && (
                      <span className='text-gray-400 text-[12px] ml-1'>({dataPass[0].reviewCount} Feedback)</span>
                    )}
                  </div>
                )}

                {dataPass[0].offerEnd && (
                  <div className='mt-4 text-center'>
                    <p className='text-[13px] text-gray-500 mb-2'>Hurry up! Offer ends in:</p>
                    <div className='flex justify-center gap-3 text-[14px] font-semibold text-[#1A1A1A]'>
                      <div>{dataPass[0].offerEnd.days}<p className='text-[10px] font-normal text-gray-400'>Days</p></div>
                      <span>:</span>
                      <div>{dataPass[0].offerEnd.hours}<p className='text-[10px] font-normal text-gray-400'>Hours</p></div>
                      <span>:</span>
                      <div>{dataPass[0].offerEnd.mins}<p className='text-[10px] font-normal text-gray-400'>Mins</p></div>
                      <span>:</span>
                      <div>{dataPass[0].offerEnd.secs}<p className='text-[10px] font-normal text-gray-400'>Secs</p></div>
                    </div>
                  </div>
                )}
              </div>
            )}

           
            {dataPass?.slice(1, 7).map((item, idx) => (
              <SmallCard key={idx} item={item} />
            ))}
          </div>

         
          {dataPass?.length > 7 && (
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4'>
              {dataPass.slice(7).map((item, idx) => (
                <SmallCard key={idx} item={item} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className={`items-center w-full text-center flex flex-wrap justify-center gap-y-4 ${title == "Popular Categories" && "lg:gap-5 text-center "}`}>
          {dataPass?.map(item => (
            <div className={`cursor-pointer relative group w-full md:w-[48%] ${title == 'Popular Categories' ? 'lg:w-[14.66%]' : 'lg:w-[20%]'} ${title == 'Featured Products' ? 'lg:w-[20%]' : ''} border border-[#E6E6E6] rounded-[5px] hover:border-primry hover:shadow-2xl transition-all duration-300`}>
              <img src={item.thumbnail || popular1} alt="popular1" className='mx-auto' />
              <h3 className={`text-[#1A1A1A] pl-3 font-pop font-medium text-[16px] group-hover:text-[#2C742F] transition-all duration-300 ${title == "Popular Categories" && "my-4"}`}>
                {item.name
                  ?
                  item.name
                  :
                  `${item.title?.slice(0, 16)}...`}
              </h3>
              {item.price && (
                <p className='mb-2 pl-3'>${item.price}</p>
              )}
              <div>
                {item.rating && (
                  <div className='flex pl-3 mb-3 relative'>
                    {rating(item.rating).map((star) =>
                      star === "color" ? (
                        <FaStar className='text-yellow-300' />
                      ) : star == "half" ? (
                        <FaStarHalfAlt className='text-yellow-300' />
                      ) : (
                        <FaStar className='text-gray-300' />
                      )
                    )}
                    <div className='absolute right-[26px] -top-7 text-[20px] group-hover:bg-primrygroup-hover:p-[4px] group-hover:rounded-2xl transition-all duration-300 group-hover:text-white'>
                      <HiOutlineShoppingBag />
                    </div>
                    {title !== "Hot Deals" && (
                      <div className='hidden group-hover:block absolute bottom-60 right-6.5'>
                        <div className="flex flex-col gap-y-4 text-[20px]">
                          <CiHeart size={24} />
                          <FaEye size={24} />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

    </Container>
  )
}
export default ProdactShowcase