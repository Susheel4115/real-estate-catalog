import React from 'react'

const DataTable = () => {
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
      <tr>
        <td className='ppd'>PPD1125</td>
        <td className='image'>icon</td>
        <td className='plot'>Plot</td>
        <td className='contact'>9785125489</td>
        <td className='area'>1200</td>
        <td className='view'>02</td>
        <td className='status'>Sold</td>
        <td className='days'>12</td>
        <td className='action'>icons</td>
      </tr>
      <tr>
      <td className='ppd'>PPD1125</td>
        <td className='image'>icon</td>
        <td className='plot'>Plot</td>
        <td className='contact'>9785125489</td>
        <td className='area'>1200</td>
        <td className='view'>02</td>
        <td className='status'>Sold</td>
        <td className='days'>12</td>
        <td className='action'>icons</td>

      </tr>
      <tr>
      <td className='ppd'>PPD1125</td>
        <td className='image'>icon</td>
        <td className='plot'>Plot</td>
        <td className='contact'>9785125489</td>
        <td className='area'>1200</td>
        <td className='view'>02</td>
        <td className='status'>Sold</td>
        <td className='days'>12</td>
        <td className='action'>icons</td>

      </tr>
    </tbody>
    </table>
    
  {/* </Table> */}
  </div>
  )
}

export default DataTable