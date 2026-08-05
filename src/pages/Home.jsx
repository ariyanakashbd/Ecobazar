import { useState, useEffect } from 'react';
import Banner from '../components/layouts/Banner'
import ProdactShowcase from '../components/layouts/ProdactShowcase'
import Costomar from '../components/layouts/Costomar'
import axios from 'axios'
import Timer from '../components/layouts/Timer'
import Discount from '../components/layouts/Discount'
import LatestNews from '../components/layouts/LatestNews'
import CompanyName from '../components/layouts/CompanyName'
import Accodion from '../components/Accodion'

const Home = () => {
  let [allpro , setAllPro] = useState([]);
  let [allCat , setAllCat] = useState([]);
  let [FeaturedProducts , setFeaturedProducts] = useState([]);
  let [hotDeals , setHotDeals] = useState([]);

  useEffect(()=>{
  async function allData () {
      let proData = await axios.get('https://dummyjson.com/products')
      setAllPro(proData.data.products.slice(0,10));
      
    }
    allData()
  },[])
  useEffect(()=>{
  async function allData () {
      let proData = await axios.get('https://dummyjson.com/products/categories')
      setAllCat(proData.data.slice(0,12));
      
    }
    allData()
  },[])
  useEffect(()=>{
  async function allData () {
      let proData = await axios.get('https://dummyjson.com/products')
      setHotDeals(proData.data.products.slice(0, 15));
      
    }
    allData()
  },[])
  useEffect(()=>{
  async function allData () {
      let proData = await axios.get('https://dummyjson.com/products')
      setFeaturedProducts(proData.data.products.slice(0, 5));
      
    }
    allData()
  },[])

  return (
    <>
    <Banner/>
    <Costomar/>

    <div style={{
      display: "flex",
      gap: 32,
      padding: "40px 8%",
      flexWrap: "wrap",
      background: "#ffffff",
    }}>
      <Accodion
        width={320}
        onChange={(item) => console.log("Selected:", item.label)}
      />
    </div>

    <ProdactShowcase title="Popular Categories" dataPass={allCat}/>
    <ProdactShowcase title="Popular Products"  dataPass={allpro}/>
    <Timer/>
    <ProdactShowcase title="Hot Deals"  dataPass={hotDeals}/>
    <Discount/>
    <ProdactShowcase title="Featured Products"  dataPass={FeaturedProducts}/>
    <LatestNews/>
    <CompanyName/>
    </>
  )
}

export default Home