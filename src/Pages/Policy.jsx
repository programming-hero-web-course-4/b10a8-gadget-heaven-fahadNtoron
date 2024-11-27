import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Policy = () => {
    const allPolicy = useLoaderData();
    return (
        <div className=''>
            <div className="max-w-[1540px] banner  h-[200px] mr-0 px-8 py-16 pb-32">
          <h2 className="text-4xl text-center">Product Details</h2>
          <p className="text-center m-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex justify-center"></div>
        </div>
            <div className=''><h1 className='text-4xl text-red-400 font-extrabold flex justify-center mt-4'>Our Policies</h1>
            <div className='grid grid-cols-2 gap-5 mx-5 mt-24'>
                {
                    allPolicy.map((policy,index) => (<div
                    key={index}
                    
                    >
                        <h1 className='text-3xl font-bold'>{policy.title}</h1>
                        <p>{policy.description}</p>

                    </div>))
                }
            </div></div>
        </div>
    );
};

export default Policy;