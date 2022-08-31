
import React from 'react'
import logo from "./media/logo.png";
import s from "./style.module.sass"; 



export default function () {
  return (

        <nav   className={s.nav} >
            <div className={["wrapper",s.wrapper].join(" ")}>
            <a href="#" className={s.logo}>
                <img src={logo} alt="logo" />
            </a>
            <ul className={s.menu}>
                <li>About Us</li>
                <li>Menu</li>
                <li>Service</li>
                <li>Contacts</li>
            </ul>
            <button className={s.button}>Contact Us</button>
            </div>
        </nav>


  )
}
