import React from 'react';
import ProductChart from "./ProductChart";
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const products = useLoaderData();
    return (
        <div className=''>
            <div className="max-w-[1540px] banner  h-[200px] mr-0 px-8 py-16 pb-32 -mb-20">
          <h2 className="text-4xl text-center">Statistics</h2>
          <p className="text-center m-6">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
          <div className="flex justify-center"></div>
        </div>
            <div className='mt-32'><ProductChart products={products}></ProductChart></div>
        </div>
    );
};

export default Statistics;