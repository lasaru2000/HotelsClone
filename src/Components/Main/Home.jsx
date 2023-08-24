import React, { Component } from 'react';
import './Home.css';
import { UserOutlined } from '@ant-design/icons';
import {FileDoneOutlined} from '@ant-design/icons';
import { Input } from 'antd';
import { InputNumber } from 'antd';
import  { useState, useEffect,useRef } from 'react';
import Divider from '@mui/material/Divider';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown} from 'antd';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Carousel } from 'antd';
import { DatePicker, Radio, Space } from 'antd';
const { RangePicker } = DatePicker;




const contentStyle = {
    height: '30rem',
    width: '100%',
    color: '#fff',
    lineHeight: '1', // Adjust the line height to bring text closer to the image
    textAlign: 'center',
    background: '#364d79',
    position: 'relative',
  };
  
  const overlayStyle = {
    position: 'absolute',
    top: '50%', // You can adjust this value to fine-tune vertical positioning
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '40px',
    color: 'white',
  };
  const subtextStyle = {
    fontSize: '23px',
    fontWeight: 'normal',
    width:'100%'
  };

  
  const imagesWithText = [
    {
      src: 'https://nexttree573.weebly.com/uploads/1/2/6/4/126480019/557565209.jpg',
      alt: 'Image 1',
      text: 'Shangri-La Colombo', 
      text1: 'Come with us through the whimsical world of Shangri-La, Where your personal paradise awaits.',
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/549d41a3e4b003c6ce131926/1533794492357-P5CFF6JVZHI77QQ6GNFE/Colombo-34-20180506.jpg',
      alt: 'Image 2',
      text: 'Shangri-La Colombo',
      text1: 'A personal tropical sacturay set within heart of the city.',
    },
    {
        src: 'https://www.momondo.in/himg/1c/f3/a3/ice-122765996-60497688_3XL-927763.jpg',
        alt: 'Image 2',
        text: 'Shangri-La Colombo',
        text1: 'You are well being in our care - learn more about our safety standerds.',
      },
      {
        src: 'https://images.squarespace-cdn.com/content/v1/549d41a3e4b003c6ce131926/1533794153318-QC0OBNOAVX7HEESN8BTS/Colombo-12-20180505.jpg',
        alt: 'Image 2',
        text: 'Shangri-La Colombo',
        text1: 'Enjoy the paradise in heart of colombo city.',
      },
    // Add more images with text here
  ];
  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
  ];
  function HoverableSection({ title }) {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleHover = () => {
      setIsHovered(true);
    };
  
    const handleUnhover = () => {
      setIsHovered(false);
    };
  
    return (
      <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space style={{
        marginTop:'0.2rem',
        borderRadius:'2px',
        backgroundColor: isHovered ? 'white' : 'transparent',
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}>
      <h1 style={{ color: isHovered ? 'black' : 'white' }}>{title}</h1>
      {isHovered ? (
            <KeyboardArrowUpIcon
              style={{
                paddingTop: '0.3rem',
                color: 'black',
              }}
            />
          ) : (
            <KeyboardArrowDownIcon
              style={{
                paddingTop: '0.3rem',
                color: 'white',
              }}
            />
          )}
      </Space>
    </a>
  </Dropdown>
    );
  }
  

function Home(){
  const [size, setSize] = useState('large');
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
        return (
            <div>
<div className='header1'>
        <div className='logo'>
        <img src='https://www.luxuryhotelawards.com/wp-content/uploads/sites/8/2019/10/SLPR-gold-and-black-Horizontal-EN-RGB.png' style={{width:'10rem',paddingTop:'0.2rem'}}/>
</div>
                
<div className='links'>
    <div className="link-item">
    <PermIdentityOutlinedIcon style={{paddingTop:'0.7rem',fontSize:'medium'}}/>
        <h1>Sign In</h1>
    </div> 
    <div className="link-item">
        <Divider style={{height:'12px',backgroundColor:'darkgrey'}} orientation="vertical" flexItem />
    </div>
    <div className="link-item">
        <h1>Join Now</h1>
    </div>
    <div className="link-item">
        <Divider style={{height:'12px',backgroundColor:'darkgrey'}} orientation="vertical" flexItem />
    </div>
    <div className="link-item">
        <h1>Find Reservations</h1>
    </div>
    <div className="link-item">
        <Divider style={{height:'12px',backgroundColor:'darkgrey'}} orientation="vertical" flexItem />
    </div>
    <div className="link-item">
        <LanguageOutlinedIcon style={{paddingTop:'0.7rem',fontSize:'medium'}}/>
        <h1>English</h1>
    </div>
    <div className="link-item">
        <Divider style={{height:'12px',backgroundColor:'darkgrey'}} orientation="vertical" flexItem />
    </div>
    <div className="link-item">
        <h1>LKR</h1>
    </div>
    <div className="link-item">
        <Divider style={{height:'12px',backgroundColor:'darkgrey'}} orientation="vertical" flexItem />
    </div>
    <div className="link-item">
      <PhoneAndroidOutlinedIcon style={{fontSize:'medium'}}/>
    </div>
</div>  
</div>

<div className='header2'>

      <HoverableSection title="ABOUT" />
      <HoverableSection title="ROOM AND SUITS" />
      <HoverableSection title="DINING" />
      <HoverableSection title="EXPERIENCE" />
      <HoverableSection title="EVENTS" />
      <h1 style={{marginTop:'0.6rem'}}>GALLERY</h1>
      <h1 style={{marginTop:'0.6rem'}}>OFFERS</h1>
      <HoverableSection title="MORE" />

    <div class="outlined">
     <h1>FIND A HOTEL</h1>
    </div>  
</div>


<div >

<Carousel autoplay>
      {imagesWithText.map((image, index) => (
        <div key={index}>
          <h3 style={{ ...contentStyle, backgroundImage: `url(${image.src})` }}>
            <img
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(80%)', // Adjust the brightness value as needed
              }}
              src={image.src}
              alt={image.alt}
            />
            <div style={overlayStyle}>
              <div>{image.text}</div>
              <div style={subtextStyle}>{image.text1}</div>
            </div>
          </h3>
        </div>
      ))}
    </Carousel>
    </div>
    <div className='menu'>
      <div class='menubox'>
      <RangePicker style={{marginTop:'0.3rem',marginLeft:'0.4rem'}} size={size} />
      </div>
      <div class='menubox'>
      <InputNumber
      addonBefore={<UserOutlined />}
      prefix="Adults"
      style={{
        width: '95%',marginTop:'0.6rem',marginLeft:'0.5rem', height: '95%'
      }}
    />
      </div>
      <div class='menubox'>
      <Input size="large" placeholder="Coupen" prefix={<FileDoneOutlined />}  
      style={{
        width: '95%',marginTop:'0.5rem',marginLeft:'0.5rem',height:'70%',fontSize:'15px'
      }} />
      </div>
      <div class='menubox1'>
     <h1>Search</h1>
      </div>
    </div>
</div>
        );
    }
  


export default Home;