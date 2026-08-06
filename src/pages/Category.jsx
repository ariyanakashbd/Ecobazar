import axios from 'axios';
import { useEffect, useState } from 'react'
import ProdactShowcase from '../components/layouts/ProdactShowcase';

const Category = () => {
    let [allpro , setAllPro] = useState([]);
    
      useEffect(()=>{
      async function allData () {
          let proData = await axios.get('https://dummyjson.com/products/categories')
          setAllPro(proData.data);
          
        }
        allData()
      },[])
  return (
    <div>
        <ProdactShowcase dataPass={allpro}/>
        <ProdactShowcase dataPass={allpro}/>
    </div>
  )
}

export default Category