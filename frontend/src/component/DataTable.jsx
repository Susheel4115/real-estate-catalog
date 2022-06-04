
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import "./CSS-property/userData.css"
import Toggle from './Toggle';


const url = process.env.REACT_APP_API + "property";


const DataTable = ({searchkey}) => {
  const navigate = useNavigate();
  const [data,setData] = useState([]);

  // const [status,setStatus]=useState("")

  
    async function getData() {
      try {
        const res = await axios.get(url,
          {},
        {
          withCredentials: true,
        }
      );
      console.log(res);
      setData(res.data.data.reverse());
      } catch (error) {
        navigate('/Signin');
      }

console.log(data.data)
    }
    // async function saty(status,key){
    //   console.log("jse",data[key]);
    //   console.log("status :", status)
    //   ({...data[key], Status:'new'}) 
    //   console.log(data)
    //   const st=data.map((idx)=>{
    //     if(idx===key){
    //      if (status==="Unsold"){
    //        return true;
    //      }else{
    //        return false
    //      }
    //       }} 
    //       )
          
    // }
     
    useEffect(() => {
      getData();
      // saty();
      console.log("anything")
    }, []);

    const dataone = data.filter(Element => Element.PPID.includes(searchkey))

    // function StatUsc (key) {
    //   console.log("data",key);
    //   data.map((obj,idx)=>(
    //       idx===key ? ((status==="Unsold")?(setStatus("sold")):setStatus("Unsold")):setStatus(status)
    //   ))
    //   useEffect(()=>{
    //     // StatUsc();
    //     console.log("nothing");
    //   },[]);
    // const statusc = (key) => {
    //   console.log("data",key);
    //   data.map((obj,idx)=>(
    //       idx===key ? ((status==="Unsold")?(setStatus("sold")):setStatus("Unsold")):setStatus(status)
    //   ))
      // if (status==="Unsold"){
      //   setStatus("sold",
      //   )
      // }
      // setbioData(prevValue => 
      //   [...prevValue].map(el => 
      //       el.id === id ? ({...el, name:'new name'}) : el)
      //   )
// onClick={()=>saty(obj.Status,idx)}
      
      // };
  return (
    <>
    
  
  <div className='datatable-container'>

        
    <table>
    <thead>
      <tr>
        <th className='table-head ppdid' id='ppdid'>PPD ID</th>
        <th className='table-head image-head' id='image'>Image</th>
        <th className='table-head' id='property'>Property</th>
        <th className='table-head' id='contact'>Contact</th>
        <th className='table-head' id='area'>Area</th>
        <th className='table-head' id='views'>Views</th>
        <th className='table-head' id='status'>Status</th>
        <th className='table-head' id='days'>Days left</th>
        <th className='table-head' id='action'>Action</th>
      </tr>
    </thead>
    <tbody>

      {dataone.map((obj,idx)=>(
        <Toggle  key={idx} obj={obj}/>
      ))}
    </tbody>
    </table>
    
  {/* </Table> */}
  </div>
  </>
  )
}

export default DataTable