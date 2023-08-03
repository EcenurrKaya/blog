import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className='post'>
      <img src='../img/ttree.jpg' className='postImg'></img>
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>Lorem Ipsum</span>
        <hr/>
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>
      Lorem ipsum, matbaacılık ve grafik tasarım alanlarında kullanılan, içeriği olmayan 
      metin örneğidir. Latinceden gelir ve anlamı yoktur. Bu metin, tasarım yapılırken veya 
      metin düzenlemesi sırasında yer tutucu olarak kullanılır. Genellikle yazı fontları, grafik 
      tasarım örnekleri veya web sayfalarının yerleşimini göstermek için kullanılır.orem ipsum, matbaacılık ve grafik tasarım alanlarında kullanılan, içeriği olmayan 
      metin örneğidir. Latinceden gelir ve anlamı yoktur. Bu metin, tasarım yapılırken veya 
      metin düzenlemesi sırasında yer tutucu olarak kullanılır. Genellikle yazı fontları, grafik 
      tasarım örnekleri veya web sayfalarının yerleşimini göstermek için kullanılır.orem ipsum, matbaacılık ve grafik tasarım alanlarında kullanılan, içeriği olmayan 
      metin örneğidir. Latinceden gelir ve anlamı yoktur. Bu metin, tasarım yapılırken veya 
      metin düzenlemesi sırasında yer tutucu olarak kullanılır. Genellikle yazı fontları, grafik 
      tasarım örnekleri veya web sayfalarının yerleşimini göstermek için kullanılır.orem ipsum, matbaacılık ve grafik tasarım alanlarında kullanılan, içeriği olmayan 
      metin örneğidir. Latinceden gelir ve anlamı yoktur. Bu metin, tasarım yapılırken veya 
      metin düzenlemesi sırasında yer tutucu olarak kullanılır. Genellikle yazı fontları, grafik 
      tasarım örnekleri veya web sayfalarının yerleşimini göstermek için kullanılır.
      </p>
    </div>
  )
}

export default Card