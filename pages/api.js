import React from 'react';

 const getData = async () => {
    const res = await fetch('http://localhost:3000');
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    const { products, bannerData } = await res.json();
    return { products, bannerData };
  };

  export default getData;