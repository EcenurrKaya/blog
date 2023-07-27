import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar--body'>
        <h6>ABOUT ME</h6>
        <img src='../img/photo.jpg' className='sidebar--photo'/>
        <p>Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın sektöründe kullanılan taklit yazı bloğu olarak tanımlanır. Lipsum, oluşturulacak şablon ve taslaklarda içerik yerine geçerek yazı bloğunu doldurmak için kullanılır</p>
       
        <h6>CONTACTS</h6>
       
        <div className='sidebar--list'>
          <ul className='list-left'>
            <li>Life</li>
            <li>Style</li>
            <li>Tech</li>
          </ul>

          <ul className='list-right'>
            <li>Music</li>
            <li>Sport</li>
            <li>Cinema</li>
          </ul>
        </div>

        <h6>FOLLOW US</h6>

        <div className='sidebar--img'>
          <img src='../img/github.png'/>
          <img src='../img/instagram.png'/>
          <img src='../img/twitter.png'/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar