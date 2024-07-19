import React from 'react'
import { FaStar } from 'react-icons/fa';

function Reviews() {
  return (
    <div className='Reviews'>
{
   [
    {
      reviewer: "Sophia Martinez",
      content: "Absolutely loved the content! Very informative and engaging.",
      stars: 7.5
    },
    {
      reviewer: "Liam Johnson",
      content: "The articles are well-written and cover a wide range of topics.",
      stars: 8
    },
    {
      reviewer: "Olivia Brown",
      content: "Great resource for anyone looking to expand their knowledge.",
      stars: 9.2
    },
    {
      reviewer: "Noah Smith",
      content: "I found the blog posts very helpful and easy to understand.",
      stars: 9
    },
    {
      reviewer: "Ava Davis",
      content: "A wonderful collection of well-curated content. Highly recommend!",
      stars:7.8
    }
  ].map((rev, i)=>(
    <div className="revs" key={i}>
      <span>{rev.reviewer}</span>
      <span>{rev.content}</span>
      <span> Rating: {rev.stars} <FaStar /></span>
    </div>
  ))
}
    </div>
  )
}

export default Reviews ;
