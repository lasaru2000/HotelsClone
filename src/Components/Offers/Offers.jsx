import React, { Component } from 'react';
import './Offers.css';

function Offers () {

    const infomations = [
        {
            img:'https://media.istockphoto.com/id/940983330/photo/sweet-young-couple-lying-in-bedroom.jpg?s=612x612&w=0&k=20&c=0yKRnT0xeJY5rqI9eAhjpVjlMtlen33FAj2ZGCo41vo=',
            h1:'Rooms & Suits',
            h2:'Shangri-La Circle Exclusive Member Rate with Breakfast',
            h3:'Exclusive Member Rate with Breakfast for Shangri-La Circle member.',
            h4:'From LKR 58,361.40 Average Per Night',
        },  {
            img:'https://www.aquaspas.com/assets/Depositphotos_11635045_original.jpg',
            h1:'Rooms & Suits',
            h2:'Shangri–La Circle Exclusive Member Rate',
            h3:'Exclusive Member Rate for Shangri-La Circle member.',
            h4:'From LKR 51,833.60 Average Per Night',
        }, {
            img:'https://www.thespruceeats.com/thmb/Nw84NSxy96eGpV9LU3TJarMX9HI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Afternoon-tea-GettyImages-155601547-58b6d4fd5f9b586046358a88.jpg',
            h1:'Seasonal Events',
            h2:'Whimsical Afternoon Tea at Sapphyr Lounge',
            h3:'ndulge in a Whimsical Afternoon Tea platter at Sapphyr Lounge',
            h5:'03 Aug 2023 - 30 Sep 2023'
          
        },
    ]

        return (
            <div>
                <div className='main'>
                    <h1>Offers</h1>
                </div>

                <div className='container'>
                {infomations .map((info, index) => (
                <div className='offers' key={index}>
                    <img style={{width:'100%',height:'40%'}} src={info.img}/>
                    <h1>{info.h1}</h1>
                    <h5>{info.h5}</h5>
                <h2>{info.h2}</h2>
                <h3>{info.h3}</h3>
                <h4>{info.h4}</h4>

                <div className='box'>
                    <h6>View Details</h6>
             
                </div>
               </div>
                 ))}
                </div>

            </div>
        );

}

export default Offers;