import React from 'react'

const Card = ({post}) => {
  return (
    <div className='flex flex-col gap-y-2'>
        <p className='font-medium py-3'>{post.title}</p>
        <p className='text-[14px]'>
            By <span className='italic'>{post.author}</span> on <span className='font-medium underline'>{post.author}</span>
        </p>
        <p className='text-[12px]'>Posted on {post.date}</p>
        <p className='text-s'>{post.content}</p>
        <div className='flex text-xs gap-x-2'>
            {post.tags.map((tag,index) => {
                return <span key={index} className='underline text-blue-500 font-bold text-[10px]'>{`#${tag}`}</span>
            })}
        </div>
    </div>
  )
}

export default Card;
