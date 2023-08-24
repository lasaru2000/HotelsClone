import React, { Component } from 'react';
import './Footer.css';
import { Radio } from 'antd';
import { ArrowRightOutlined  } from '@ant-design/icons';
import { Input, Space } from 'antd';
import img from '../../assets/images/lines.PNG'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const { Search } = Input;



function Footer () {


      const onSearch = (value) => console.log(value);
        return (
            <div>

                <div className='container1'>

                   <div className='section'>
                   <h1>Coporate Information</h1>
                   <p>Cinnamon Hotels & Resorts</p>
                   <p>John Keells Group</p>
                    <h1>Blogs</h1>
                    <p>Cinnamon Ublog</p>
                    <h1>Carres</h1>
                    <p>Carreers</p>
                    <h1>Get Cinnamon in your inbox</h1>
                    <div className='sender'>
                    <Search
      placeholder="Enter Email"
      allowClear
      enterButton={<ArrowRightOutlined />}
      size="large"
      onSearch={onSearch}
      style={{
        width: 350,
      }}
    />
   <div style={{display:'flex'}}>
   <Radio></Radio>
   <p className='paragraph1'>By cheking this box,I consent processing of my personal data by Cinnamon for the purpose and within th Conditions set out in this form and the Cinnamon Data Protection Policiy* </p>
   </div>
                    </div>
                   </div>

    <div className='section'>
        <h1>News and Awards</h1>
        <p>News</p>
        <p>Awards</p>
        <h1>Corporate Governance</h1>
        <p>CSR</p>
    </div>
    <div className='section'>
        <h1>Data Privacy & Security Policy</h1>
        <p>Terms & Conditions</p>
        <p>Privacy Statement</p>
        <h1>Get In Touch</h1>
        <p>Coporate Contact Information</p>
        <p>Hotel Contact Information</p>
        <h1>Follow Us</h1>
        <div className='icons'>
            <FacebookIcon className='icon'/>
            <TwitterIcon className='icon'/>
            <LinkedInIcon className='icon'/>
            <InstagramIcon className='icon'/>
            <YouTubeIcon className='icon'/>
        </div>
    </div >

                </div>
                <img style={{width:'100%'}} src={img}/>
                
            </div>
        );

}

export default Footer;