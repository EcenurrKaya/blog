import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className='cardd'>
      <div className='card--body'>
        <img src='../img/ttree.jpg'/>
        <span>Music</span>
        <span>Life</span>
        <h3>Lore Ipsum</h3>
        <span>1 hour ago</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus faucibus ipsum, eget sollicitudin arcu. Vestibulum fermentum dui nec risus dignissim, ac pharetra mi facilisis. Sed vel ipsum eu nulla interdum venenatis vel vel dui. Ut vestibulum felis ut purus vestibulum blandit. Vestibulum sit amet ullamcorper ex, ac hendrerit purus. Nam eu risus vitae risus sagittis efficitur eget non arcu.</p>
      </div>
    </div>
    
  )
}

export default Card