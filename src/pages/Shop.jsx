import { useEffect, useState } from 'react'
import Container from '../components/layouts/Container'
import Accodion, { AccordionItem, PriceRange } from '../components/Accodion';
import bannerShop from '../assets/aaaa.webp';
import prodact from '../assets/Product.webp';
import prodactOne from '../assets/ProductOne.webp';
import prodactTwo from '../assets/ProductTwo.webp';
import axios from 'axios';
import { RiShoppingBagLine } from "react-icons/ri";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const categories = [
  { id: "cat1", name: "Fresh Fruit", count: 134 },
  { id: "cat2", name: "Vegetables", count: 150 },
  { id: "cat3", name: "Cooking", count: 54 },
  { id: "cat4", name: "Snacks", count: 47 },
  { id: "cat5", name: "Beverages", count: 43 },
  { id: "cat6", name: "Beauty & Health", count: 38 },
  { id: "cat7", name: "Bread & Bakery", count: 15 },
];

const ratings = [5, 4, 3, 2, 1];
const tags = ["Healthy", "Low fat", "Vegetarian", "Kid foods", "Vitamins", "Bread", "Meat", "Snacks", "Tifin", "Launch", "Dinner", "Breakfast", "Fruit"];

const perPage = 9; 

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("cat2");
  const [price, setPrice] = useState([50, 1500]);
  const [activeRating, setActiveRating] = useState(4);
  const [activeTags, setActiveTags] = useState(["Low fat", "Meat"]);
  const [shop, setshop] = useState([]);
  const [page, setPage] = useState(1); 

  function rating(count) {
    let halfStar = count.toString().split('.')[1];
    let index = Math.floor(count);
    let arr = [];
    for (let i = 1; i <= 5; i++) {
      arr.push(i <= index ? "color" : i);
    }
    if (halfStar) arr[index] = "half";
    return arr;
  }

  useEffect(() => {
    async function allData() {
      let proData = await axios.get('https://dummyjson.com/products')
      setshop(proData.data.products);
    }
    allData()
  }, [])

  const toggleTag = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]);
  };

  
  const lastPage = Math.ceil(shop.length / perPage);
  const start = (page - 1) * perPage;
  const productsToShow = shop.slice(start, start + perPage);

  return (
    <Container>
      <div className='flex flex-col lg:flex-row mt-6 gap-6'>
        {/* sidebar start */}
        <div className='w-full lg:w-[25%]'>
          <Accodion title="All Categories">
            {categories.map((c) => (
              <AccordionItem
                key={c.id}
                id={c.id}
                type="radio"
                groupName="category"
                name={c.name}
                count={c.count}
                selected={activeCategory === c.id}
                onChange={() => setActiveCategory(c.id)}
              />
            ))}
          </Accodion>

          <Accodion title="Price">
            <PriceRange value={price} onChange={setPrice} />
          </Accodion>

          <Accodion title="Rating">
            {ratings.map((r) => (
              <AccordionItem
                key={r}
                id={`rating${r}`}
                type="star"
                stars={r}
                selected={activeRating === r}
                onChange={() => setActiveRating(r)}
              />
            ))}
          </Accodion>

          <Accodion title="Popular Tag">
            <div className='flex flex-wrap '>
              {tags.map((tag) => (
                <AccordionItem
                  key={tag}
                  type="tag"
                  name={tag}
                  selected={activeTags.includes(tag)}
                  onChange={() => toggleTag(tag)}
                />
              ))}
            </div>
          </Accodion>

          <div>
            <div>
              <img className="w-full h-auto object-cover" src={bannerShop} alt="bannerShop" />
            </div>
            <div>
              <h3 className='font-pop font-medium text-[20px] text-[#1A1A1A] my-5'>Sale Products</h3>
              <img className="w-full hover:border hover:border-primry rounded-[5px] mb-4" src={prodact} alt="prodact" />
              <img className="w-full hover:border hover:border-primry rounded-[5px] mb-4" src={prodactTwo} alt="prodactTwo" />
              <img className="w-full hover:border hover:border-primry rounded-[5px] mb-4" src={prodactTwo} alt="prodactTwo" />
            </div>
          </div>
        </div>
        {/* sidebar end */}

        {/* product start */}
        <div className='w-full lg:w-[75%] font-pop'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {productsToShow.map((item) => (
              <div
                key={item.id}
                className="group border border-[#cccc] hover:border-primry transition-colors duration-300 rounded-lg p-4 relative"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-48 sm:h-56 object-cover rounded-md"
                />
                <h3 className="mt-6 font-normal text-sm text-[#4D4D4D] group-hover:text-primry transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mt-2 font-pop text-[16px] text-[#1A1A1A] font-medium">
                  ${item.price}
                </p>
                <p className="flex items-center gap-1 mt-2">
                  {rating(item.rating).map((star, i) =>
                    star === "color" ? (
                      <FaStar key={i} className="text-yellow-300" />
                    ) : star === "half" ? (
                      <FaStarHalfAlt key={i} className="text-yellow-300" />
                    ) : (
                      <FaStar key={i} className="text-gray-300" />
                    )
                  )}
                </p>
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-primry hover:text-white border border-gray-200 cursor-pointer shadow-sm transition-colors duration-200 text-lg">
                    <FaRegHeart />
                  </span>
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-primry hover:text-white border border-gray-200 cursor-pointer shadow-sm transition-colors duration-200 text-lg">
                    <FaEye />
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center rounded-full group-hover:bg-primry cursor-pointer shadow-sm text-xl group-hover:text-[#ffff] transition-colors duration-300">
                  <RiShoppingBagLine />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* product end */}
      </div>

      {/* pagination */}
      <div className='flex justify-center mt-10 font-pop '>
        <ul className='flex gap-3 items-center text-[#666666]'>
          <li onClick={() => page > 1 && setPage(page - 1)} className='cursor-pointer text-[16px] '>
            <FaAngleLeft className='text-[20px]  text-[#1A1A1A]' />
          </li>

          {Array(lastPage).fill(0).map((num, index) => (
            <li
              key={index}
              onClick={() => setPage(index + 1)}
              className={`cursor-pointer w-8 h-8 flex items-center justify-center rounded-full ${
                page === index + 1 ? "bg-primry text-white" : ""
              }`}
            >
              {index + 1}
            </li>
          ))}

          <li onClick={() => page < lastPage && setPage(page + 1)} className='cursor-pointer'>
            <FaAngleRight className='text-[20px] text-[#1A1A1A]'/>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Shop;