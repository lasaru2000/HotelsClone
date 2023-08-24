import React, { Component } from 'react';
import  { useState } from 'react';

function Exp () {
    const photos = [
        {
          id:1,
          url: 'https://charliepauly.com/wp-content/uploads/2020/02/Coconut-Tree-Hill-Mirissa-A-Complete-Guide-To-Visiting-3.jpg',
          text: 'Multiply Your Points',
        },
        {
            id:2,
          url: 'https://img.freepik.com/free-photo/happy-parents-two-kids-are-swimming-pool_1268-23274.jpg?w=2000',
          text: 'Book Ahead and Save Up to 17%',
        },
        {
            id:3,
            url: 'https://www.usatoday.com/gcdn/presto/2020/09/10/USAT/5400ba96-089b-47e8-9a5a-f2f792bf0f10-alcohol_at_home.jpg',
            text: 'Free Bonus Points At New Hotels',
          },
          {
            id:4,
            url: 'https://cen.com.kh/wp-content/uploads/2022/10/youth21-4.jpg',
            text: 'Park And Stay With Hilton',
          },
          {
            id:5,
            url: 'https://www.westend61.de/images/0000937233pw/couple-relaxing-on-bed-eating-strawberries-elevated-view-CUF04005.jpg',
            text: 'Experience More During Your Stay',
          },
          {
            id:6,
            url: 'https://www.fool.co.uk/wp-content/uploads/2022/10/Breakfast-buffet.jpg',
            text: 'Breackfast Included Packages',
          },
        // Add more objects with URLs and texts for each image
      ];
      const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '100%',
        marginLeft:'0.8rem'
      
      };
      
      const imgContainerStyle = {
        position: 'relative',
        flex: '1',
        maxWidth: '30%',
        height: 'auto',
        margin: '7px',
        overflow: 'hidden', // Ensure the overlay is contained within the container
      };
      
      const imgStyle = {
        width: '100%',
        height: '100%',
        filter: 'brightness(70%)',
      };
      
      const initialTextOverlayStyle = {
        position: 'absolute',
        top: '80%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '5px 10px',
        borderRadius: '5px',
        color: 'white',
        fontSize: '26px',
        textAlign: 'center',
        width: '100%',
        fontWeight: '500',
        transition: 'top 0.3s ease-in-out',
      };
      
      const photo = {
        marginTop: '1rem',
        marginLeft: '2rem',
        display: 'flex',
      };
      
      
      const groupPhotosIntoRows = (photos, itemsPerRow) => {
        const rows = [];
        for (let i = 0; i < photos.length; i += itemsPerRow) {
          rows.push(photos.slice(i, i + itemsPerRow));
        }
        return rows;
      };
      const [hoveredIndex, setHoveredIndex] = useState(null);

      const handleMouseEnter = (index) => {
        setHoveredIndex(index);
      };
    
      const handleMouseLeave = () => {
        setHoveredIndex(null);
      };

      const groupedPhotos = groupPhotosIntoRows(photos, 3);

        return (
            <div>
                <h1 style={{color:'rgb(16,76,151)',marginLeft:'2rem',fontSize:'35px'}}>Make the most of summertime</h1>
                <h1 style={{marginLeft:'2rem',fontWeight:'100',fontSize:'22px',marginTop:'1.5rem'}}>Summer is here - celebrate with one of our exclusive offers.</h1>
                <div style={containerStyle}>
  {groupedPhotos.map((row, rowIndex) => (
    <div key={rowIndex} style={containerStyle}>
      {row.map((photo, index) => (
        <div
          key={index}
          style={imgContainerStyle}
          onMouseEnter={() => handleMouseEnter(photo.id)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={photo.url} alt={`Photo ${index + 1}`} style={imgStyle} />
          <div
            style={{
              ...initialTextOverlayStyle,
              top: photo.id === hoveredIndex ? '50%' : initialTextOverlayStyle.top,
            }}
          >
            {photo.text}
          </div>
        </div>
      ))}
    </div>
  ))}
</div>

            </div>
        );

}

export default Exp;