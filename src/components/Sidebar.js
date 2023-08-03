import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src='../img/photoo.jpg'></img>
        <p>Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın sektöründe 
          kullanılan taklit yazı bloğu olarak tanımlanır. Lipsum, oluşturulacak şablon 
          ve taslaklarda içerik yerine geçerek yazı bloğunu doldurmak için kullanılır</p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEEGORIES</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>Life</li>
          <li className='sidebarListItem'>Music</li>
          <li className='sidebarListItem'>Sport</li>
          <li className='sidebarListItem'>Stle</li>
          <li className='sidebarListItem'>Tech</li>
          <li className='sidebarListItem'>Cinema</li>
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fab fa-facebook-square'></i>
          <i className='sidebarIcon fab fa-twitter-square'></i>
          <i className='sidebarIcon fab fa-pinterest-square'></i>
          <i className='sidebarIcon fab fa-instagram-square'></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar