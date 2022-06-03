
import React,{useEffect, useState} from 'react';
import image from '../images/image_icon.png';
import eye from '../images/eye.png';
import edit from '../images/edit.png';
import "./CSS-property/userData.css"
// const [state, dispatch] = useStateValue();

const url = process.env.REACT_APP_API + "property";


const DataTable = ({searchkey}) => {

  const [data,setData] = useState([]);
  // const [status,setStatus]=useState("")
  
    async function getData() {
      const response = await fetch(url);
  
const data = await response.json();
setData(data.data.reverse());
console.log(data.data)
    }
    async function saty(status,key){
      console.log("jse",data[key]);
      console.log("status :", status)
      ({...data[key], Status:'new'}) 
      console.log(data)
      const st=data.map((idx)=>{
        if(idx===key){
         if (status==="Unsold"){
           return true;
         }else{
           return false
         }
          }} 
          )
          
    }
     
    useEffect(() => {
      getData();
      saty();
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
        <tr key={idx}>
        <td className='ppd ppdid'>{obj.PPID}</td>
        <td className='image'><img src={image} alt='aj'/></td>
        <td className='plot'>{obj.Property}</td>
        <td className='contact'>{obj.Contact}</td>
        <td className='area'>{obj.Area}</td>
        <td className='view'>{obj.Views}</td>
        <td className='status' ><button  >{obj.Status}</button></td>
        <td className='days'>{obj.Duration}</td>
        <td className='action'><img src={eye} alt='eye' /> <img src={edit} alt='edit'/></td>
      </tr> 
      ))}
    </tbody>
    </table>
    
  {/* </Table> */}
  </div>
  </>
  )
}

export default DataTable