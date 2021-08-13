import React from 'react'

import './post.css'

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg" 
        src="https://images.pexels.com/photos/7045834/pexels-photo-7045834.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />

        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Decoração</span>
            <span className="postCat">Lar</span>
          </div>
          <span className="postTitle">
            Lorem ipsum dolor sit amet consectetur e.
          </span>
          <br />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatum facilis quasi perspiciatis, distinctio ab enim ullam orem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatum facilis quasi perspiciatis, distinctio ab enim ullam eorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatum facilis quasi perspiciatis, distinctio ab enim ullam eorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatum facilis quasi perspiciatis, distinctio ab enim ullam eorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatum facilis quasi perspiciatis, distinctio ab enim ullam eorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatum facilis quasi perspiciatis, distinctio ab enim ullam eorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatum facilis quasi perspiciatis, distinctio ab enim ullam eorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatum facilis quasi perspiciatis, distinctio ab enim ullam eorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatum facilis quasi perspiciatis, distinctio ab enim ullam eeaque at magnam repudiandae quidem, explicabo commodi aliquid perferendis inventore quo illum? Saepe.</p>
    </div>
  )
}
