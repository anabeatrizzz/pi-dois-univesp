import React from 'react';
import imgPamnet from '../../assets/pamnet-header.png';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.css';
import { Button, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import FBIcon from '../../assets/fb-icon.png';
import IGIcon from '../../assets/ig-icon.png';

export default function Header() {
  const location = useLocation();

  return (
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
            <li style={location.pathname === "/" ? styles.focusedLi : styles.li}>
              Início
            </li>
          </NavLink>

          <NavLink style={styles.navLink} to="/aplicativos">
            <li style={location.pathname === "/aplicativos" ? styles.focusedLi : styles.li}>
              Aplicativos
            </li>
          </NavLink>

          <NavLink style={styles.navLink} to="/empresa">
            <li style={location.pathname === "/empresa" ? styles.focusedLi : styles.li}>
              Empresa
            </li>
          </NavLink>

          <NavLink style={styles.navLink} to="/contato">
            <li style={location.pathname === "/contato" ? styles.focusedLi : styles.li}>
              Contato
            </li>
          </NavLink>

          <NavLink style={styles.navLink} to="/teste-de-velocidade">
            <li style={location.pathname === "/teste-de-velocidade" ? styles.focusedLi : styles.li}>
              Teste sua velocidade
            </li>
          </NavLink>

          <NavLink style={styles.navLink} to="/faq">
            <li style={location.pathname === "/faq" ? styles.focusedLi : styles.li}>
              FAQ
            </li>
          </NavLink>

          <NavLink style={styles.navLink} to="#">
            <li style={styles.li}>
              Central de Atendimento
            </li>
          </NavLink>

          <div style={styles.socialMediaDiv}>
            <div style={styles.fbIcon}>
              <a target="_blank" href="https://www.facebook.com/PAMNET.Mongagua">
                <img width={30} height={30} src={FBIcon} />
              </a>
            </div>
            <div>
              <a target="_blank" href="#">
                <img width={30} height={30} src={IGIcon} />
              </a>
            </div>
          </div>

        </ul>
      </nav>
    </header>
  )
}