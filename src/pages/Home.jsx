import React, { useEffect, useState } from 'react'
import Banner from '../components/layouts/Banner'
import ProdactShowcase from '../components/layouts/ProdactShowcase'
import Costomar from '../components/layouts/Costomar'
import axios from 'axios'


const Home = () => {
  let [allpro , setAllPro] = useState([]);
  let [allCat , setAllCat] = useState([]);

  useEffect(()=>{
  async function allData () {
      let proData = await axios.get('https://dummyjson.com/products')
      setAllPro(proData.data.products.slice(0,12));
      
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
  return (
    <>
    <Banner/>
    <Costomar/>
    <ProdactShowcase title="Popular Categories" dataPass={allCat}/>
    <ProdactShowcase title="Popular Products"  dataPass={allpro}/>
    </>
  )
}

export default Home