import React, { Component } from 'react';
import './Dest.css'
import { Select } from 'antd';
import img from '../../assets/images/1000_F_86726775_CRV87x1nBqFslFF9YntTfbDUJPFMmfAo-removebg-preview.png';

function Dest() {
  const options=[
    {
      value: '1',
      label: 'Not Identified',
    },
    {
      value: '2',
      label: 'Closed',
    },
    {
      value: '3',
      label: 'Communicated',
    },
    {
      value: '4',
      label: 'Identified',
    },
    {
      value: '5',
      label: 'Resolved',
    },
    {
      value: '6',
      label: 'Cancelled',
    },
  ]

        return (
<div>
    <div className='destination'>
      <h1>Our Destinations</h1>
    </div>
    <div className='dropdown'>
    <Select
  showSearch
  style={{
    width: 500,
  }}
  dropdownStyle={{ maxHeight: 300 }} // Adjust the maxHeight to your desired height
  placeholder="Search to Select"
  optionFilterProp="children"
  filterOption={(input, option) => (option?.label ?? '').includes(input)}
  filterSort={(optionA, optionB) =>
    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
  }
/>


    </div>
    <div className='card' style={{ position: 'relative' }}>
  <img style={{ position: 'absolute', width: '300px', height: '400px', left: '5rem', top: '0' }} src={img}/>
  <img style={{ width: '700px', height: '550px' }} src='https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/gallery/images/CGC-Aerial-Exterior_1_1090x610.jpg'/>
  <div className='shadow'>
    <div className='headings'>
    <h1 >Cinnamon Grand</h1>
    <h1 >Colombo</h1>
    <p>
    Our 5-star hotel in the heart of Colombo offers timeless elegance and grandeur. The perfect place to relish global cuisines after a business conference or a memorable rendezvous!



    </p>
    <div className='button'>
      <h2>Discover More</h2>
    </div>
    </div>

  </div>
</div>



</div>
        );

}

export default Dest;