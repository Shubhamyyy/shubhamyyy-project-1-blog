import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import Card from './Card';

const Blogs = () => {

  const {posts,loading}= useContext(AppContext);


  return (
    <div className='w-11/12 max-w-[600px] mt-[70px] mb-[70px]'>
      {
        loading ? (<Spinner>  </Spinner>) : (
          
            posts.length === 0 ?(
              <div>
                No Post Found
              </div>
            ):(posts.map((post) =>(<Card key={post.id} post={post}></Card>)))
          
        )
      }
    </div>
  )
}

export default Blogs;
