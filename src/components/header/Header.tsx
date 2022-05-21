import React from 'react';
import imgPamnet from '../../assets/pamnet-header.png';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.css';
import { Button, Grid } from '@mui/material';

export default function Header(){
  
  return(
    <header style={styles.header}>
      <Link style={styles.link} to="/">
        <img
          src={imgPamnet}
          alt="pamnet logo"
        />
      </Link>
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <NavLink style={styles.navLink} to="/">
            <li style={styles.li}>Início</li>
          </NavLink>

          <NavLink style={styles.navLink} to="#">
            <li style={styles.li}>Aplicativos</li>
          </NavLink>

          <NavLink style={styles.navLink} to="#">
            <li style={styles.li}>Empresa</li>
          </NavLink>

          <NavLink style={styles.navLink} to="#">
            <li style={styles.li}>Contato</li>
          </NavLink>

          <NavLink style={styles.navLink} to="#">
            <li style={styles.li}>Teste sua velocidade</li>
          </NavLink>

          <NavLink style={styles.navLink} to="#">
            <li style={styles.li}>FAQ</li>
          </NavLink>
        </ul>
      </nav>

      <Button
        style={styles.button}
        variant="contained"
      >
        <b style={styles.sacText}>SAC</b>
      </Button>
    </header>
  )
}