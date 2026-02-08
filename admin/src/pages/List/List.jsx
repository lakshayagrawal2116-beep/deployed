import React, { useEffect, useState } from 'react'
import "./List.css"
import axios from "axios";
import { toast } from 'react-toastify'
const List = ({url}) => {
  const[list,SetList]= useState([]);

  const fetchList =async()=>{
    const response =await axios.get(`${url}/api/food/list`);

    if(response.data.success){
      SetList(response.data.data);
    }
    else{
      toast.error("Error")
    }
  }

  const removedFood =async(foodId)=>{
    const response =await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message);
    }
    else{
      toast.error("Error");
    }

  }

  useEffect(()=>{
    fetchList();

  },[])
  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div style={{backgroundColor: " #111827"}} className='list-table-format title'>
        <p style={{color:"white"}}>Image</p>
        <p style={{color:"white"}}>Name</p>
        <p style={{color:"white"}}>category</p>
        <p style={{color:"white"}}>Price</p>
        <p style={{color:"white"}}>Action</p>
        <p style={{color:"white"}}>Mode</p>
      </div>
      {list.map((item,index)=>{
        return(
          <div key={index} className='list-table-format'>
            <img src={`${url}/images/`+item.image} alt=''/>
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            
            <p onClick={()=>removedFood(item._id)} style={{cursor:"Pointer",color:"red"}}>X</p>
            <p>{item.mode}</p>

          </div>
        )
      })}
    </div>
  )
}

export default List