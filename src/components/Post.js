import React from 'react'
import './Post.css'

const Post = () => {
  return (
    <div>
      <div className='post'>
        <img src='../img/ttree.jpg' className='post--mainphoto'/>
        <div className='post--head'>
          <div className='post--title'>
            <h3>Lorem Ipsum Dolor</h3>
          </div>
          <div className='post--image'>
            <img src='../img/edit.png'/>
            <img src='../img/delete.png'/>
          </div>
        </div>
        <div className='post--althead'>
          <span>Author:Safak</span>
          <span>1 hour ago</span>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus faucibus ipsum,
           eget sollicitudin arcu. Vestibulum fermentum dui nec risus dignissim, ac pharetra mi facilisis.,
            Sed vel ipsum eu nulla interdum venenatis vel vel dui. Ut vestibulum felis ut purus vestibulum 
            blandit. Vestibulum sit amet ullamcorper ex, ac hendrerit purus. Nam eu risus vitae risus sagittis 
            efficitur eget non arcu. Cras tincidunt consequat nisi, a bibendum odio faucibus id. Sed eu ante
             eget ligula tristique sagittis. Vivamus dignissim nisl ac justo bibendum varius. Mauris at mauris 
             vel sem finibus varius. Nulla id leo metus. Integer vitae volutpat nunc, a auctor felis. Nulla 
             facilisi. Sed at justo purus. Quisque vel metus ac libero sagittis facilisis.</p>
      </div>
    </div>
  )

}

export default Post