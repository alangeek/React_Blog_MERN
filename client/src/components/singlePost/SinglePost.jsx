import React from 'react'

import './singlePost.css'

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img 
          src="https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
          alt="" 
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">Lorem ipsum, dolor sit a
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Autor: <b>Paulo Miguel</b></span>
          <span className="singlePostDate">1 hora</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe in nihil fugiat esse rerum maxime quidem aliquid amet inventore 
          accusantium distinctio, dolores minima officia, repudiandae facere dolorum sapiente earum aliquam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe in nihil fugiat esse rerum maxime quidem aliquid amet inventore 
          accusantium distinctio, dolores minima officia, repudiandae facere dolorum sapiente earum aliquam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe in nihil fugiat esse rerum maxime quidem aliquid amet inventore 
          accusantium distinctio, dolores minima officia, repudiandae facere dolorum sapiente earum aliquam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe in nihil fugiat esse rerum maxime quidem aliquid amet inventore 
          accusantium distinctio, dolores minima officia, repudiandae facere dolorum sapiente earum aliquam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe in nihil fugiat esse rerum maxime quidem aliquid amet inventore 
          accusantium distinctio, dolores minima officia, repudiandae facere dolorum sapiente earum aliquam.
        </p>
      </div>
    </div>
  )
}
