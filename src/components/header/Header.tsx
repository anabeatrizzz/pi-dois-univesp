import React from 'react';
import imgPamnet from '../../assets/pamnet-header.png';
import { Link, NavLink } from 'react-router-dom';

export default function Header(){
  return(
    <header>
      <Link to="/">
        <img src={imgPamnet} alt="pamnet logo" />
      </Link>
    </header>
  )
}