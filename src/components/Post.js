import React from 'react'
import './Post.css'

const Post = () => {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img src='../img/ttree.jpg' className='singlePostImg'></img>
        <h1 className='singlePostTitle'>Lorem Ipsum
          <div className='singlePostEdit'>
            <i className='singlePostIcon far fa-edit'></i>
            <i className='singlePostIcon far fa-trash-alt'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>Author:<b>Safak</b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
          dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula 
          massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est
          eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, 
          consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras 
          vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque 
          sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
          posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas 
          adipiscing ante non diam sodales hendrerit</p>
      </div>
    </div>
  )

}

export default Post