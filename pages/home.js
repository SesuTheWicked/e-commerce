import React from 'react';
import { Client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => {
  // Your component code here
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
};

export async function getServerSideProps() {
  const query = '*[_type == "product"]';
  const products = await Client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await Client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
}

export default Home;