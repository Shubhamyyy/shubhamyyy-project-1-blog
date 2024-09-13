import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Pagination = () => {

  const {page,handlePageChange,totalPages}=useContext(AppContext);

  return (
    <div className='w-full flex justify-center items-center fixed bottom-0 bg-white border-2'>
      <div className='flex justify-between w-11/12 max-w-[600px] py-1 '>
      <div className='flex gap-2'>
        { page>1 &&
          <button onClick={() => handlePageChange(page-1)}
          className='rounded-md px-4 py-1 border-2'>
            Previous
          </button>
        }
        { page<totalPages &&
          <button onClick={() => handlePageChange(page+1)}
          className='rounded-md px-4 py-1 border-2'>
            Next
          </button>
        }
      </div>
        
        <p className='font-bold text-sm'>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination;
