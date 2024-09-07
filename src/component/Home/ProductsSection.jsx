import React, { useEffect, useState } from 'react'
import Card from '../Card'
import { Pagination } from 'flowbite-react'
import { BarLoader } from 'react-spinners';

const ITEMS_PER_PAGE = 6;

const ProductsSection = ({ category }) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = data?.filter(item => item.category === category).slice(startIndex, endIndex);
  const totalPages = Math.ceil(data?.filter(item => item.category === category)?.length / ITEMS_PER_PAGE);
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    const randomDelay = Math.floor(Math.random() * 2000) + 1000;

    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setTimeout(() => {
          setData(jsonData);
          setLoading(false);
        }, randomDelay);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className='w-full h-screen flex flex-col items-center justify-center'>
      <BarLoader color='#1E99F5'/>
    </div>
  }

  if (error) {
    return <div className='w-full h-screen flex flex-col items-center justify-center'>
      <p className='text-center'>Loading...</p>
    </div>
  }

  return (
    <div className='w-full h-full'>
      <div className='grid grid-cols-3 gap-x-8 gap-y-14'>
        {currentItems?.map((item, index) => <Card key={index} item={item} />)}
      </div>
      <div className='flex justify-center my-4'>
        <Pagination
          layout="pagination"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          previousLabel=""
          nextLabel=""
          showIcons
        />
      </div>
    </div>
  )
}

export default ProductsSection