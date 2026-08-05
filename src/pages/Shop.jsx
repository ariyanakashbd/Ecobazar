import { useState } from 'react'
import Container from '../components/layouts/Container'
import Accodion, { AccordionItem, PriceRange } from '../components/Accodion';
import { FaAngleDown } from "react-icons/fa6";
import bannerShop from '../assets/aaaa.webp';
import prodact from '../assets/Product.webp';
import prodactOne from '../assets/ProductOne.webp';
import prodactTwo from '../assets/ProductTwo.webp';


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

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("cat2"); // Vegetables selected
  const [price, setPrice] = useState([50, 1500]);
  const [activeRating, setActiveRating] = useState(4);
  const [activeTags, setActiveTags] = useState(["Low fat", "Meat"]);

  const toggleTag = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <Container>
      <div>
        <div className='flex justify-between mt-11 font-pop items-center'>
          <div className='font-pop text-[14px] font-semibold text-[#ffff] bg-primry py-3.5 px-8 rounded-[43px]'>Filter</div>
          <div className='flex items-center text-sm gap-x-5'>
            <span className='text-[#808080]'>Sort by:</span>
            <span className='text-[#4D4D4D] mr-10 font-pop border-2 border-[#E6E6E6] flex items-center gap-x-20 pl-4 py-2.5 pr-7.5 rounded-[5px] text-sm'>
              Latest <FaAngleDown />
            </span>
          </div>
          <div className='font-pop text-[16px] text-[#666666] font-normal'>
            <span className='font-pop font-semibold text-[16px] text-[#1A1A1A]'>52</span> Results Found
          </div>
        </div>

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
          <div className='flex flex-wrap'>
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
              <img src={bannerShop} alt="bannerShop" />
            </div>
            <div>
              <h3 className='font-pop font-medium text-[20px] text-[#1A1A1A] my-5'>Sale Products</h3>
              <img  className="hover:border hover:border-primry rounded-[5px] mb-4 " src={prodact} alt="prodact" />
              <img  className="hover:border hover:border-primry rounded-[5px] mb-4" src={prodactTwo} alt="prodactOne" />
              <img  className="hover:border hover:border-primry rounded-[5px] mb-4 " src={prodactTwo} alt="prodactTwo" />
            </div>
          </div>
      </div>
    </Container>
  )
}

export default Shop