import React,{useEffect, useState} from 'react';
import image from '../images/image_icon.png';
import eye from '../images/eye.png';
import edit from '../images/edit.png';
// const [state, dispatch] = useStateValue();

const url = process.env.REACT_APP_API + 'property';

const DataTable = () => {
  const [data,setData] = useState([]);
    async function getData() {
      const response = await fetch(url);
  
const data = await response.json();
setData(data.data.reverse());
    }
    useEffect(() => {
      getData();
      console.log("anything")
    }, []);

  return (
    <div className='datatable-container'>
        {/* <Table striped bordered hover variant="dark"> */}
    <table>
    <thead>
      <tr>
        <th className='table-head' id='ppdid'>PPD ID</th>
        <th className='table-head' id='image'>Image</th>
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
      {data.map(obj=>(
        <tr>
        <td className='ppd'>{obj.PPID}</td>
        <td className='image'><img src={image} alt='aj'/></td>
        <td className='plot'>{obj.Property}</td>
        <td className='contact'>{obj.Contact}</td>
        <td className='area'>{obj.Area}</td>
        <td className='view'>{obj.Views}</td>
        <td className='status'>{obj.Status}</td>
        <td className='days'>{obj.Duration}</td>
        <td className='action'><img src={eye} alt='eye' /> <img src={edit} alt='edit'/></td>
      </tr>
      ))}
    </tbody>
    </table>
    
  {/* </Table> */}
  </div>
  )
}

export default DataTable