import React from 'react';
import ProductList from '../components/ProductList';
import ButtonGroup from '../components/ButtonGroup';

const ProductPage = () => {
  const cateTags = [{name:"Hùng", quantity:111,id:999},{name:"Đẹp", quantity:111,id:9991},{name:"Trai", quantity:111, id:9992},{name:"Số", quantity:1,id:999}]
  return (
    <div className="mx-auto  max-w-[1320px]">
      <div className="mt-20  pt-20">
        <h1 className="mb-14 text-center text-[52px] font-semibold">Shop</h1>

        <div className='w-[100%] m-auto my-5 bg-white rounded-md  drop-shadow-xl'>
          <p className='px-4  py-5 text-center'>
            <ButtonGroup cateTags={cateTags}  key={"cateTags"} type='tags'/>
          </p>
        </div>

        <div className='py-5'>
          <ProductList />
        </div>

        <div className="flex justify-center mt-10">
          <p className="cursor-pointer rounded-md border border-indigo-600 bg-indigo-600 py-3 px-6 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Xem thêm
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
