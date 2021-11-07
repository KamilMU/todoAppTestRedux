import React, { useEffect, useState } from 'react';
import './styles.scss';

export function Header() {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false)

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (document.querySelector('.app').scrollTop >= 67) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => console.log(navbar), [navbar]);

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    document.querySelector('.app').addEventListener("scroll", changeBackground)
  }, [navbar])

  return (
    <header className={navbar ? 'header scrolled-header' : 'header'}>
      <a href="#">Logo</a>
    </header>
  )
}