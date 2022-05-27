import React, { useState } from 'react';
import imgPamnet from '../../assets/pamnet-header.png';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.css';
import clsx from 'clsx'
import { Button, Grid, Typography, useMediaQuery, useTheme, IconButton } from '@mui/material';
import { useLocation } from 'react-router-dom';
import FBIcon from '../../assets/fb-icon.png';
import IGIcon from '../../assets/ig-icon.png';
import MenuIcon from '@mui/icons-material/Menu';
import colors from '../../assets/colors';

export default function Header() {
  const location = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [isExpanded, setExpanded] = useState(false);

  function txtColor(path: string){
    if(path === location.pathname && isExpanded){
      return {
        ...styles.li,
        ...styles.focusedLi,
        ...styles.liExpanded
      }
    }
    if(isExpanded){
      return {
        ...styles.li,
        ...styles.liExpanded,
      }
    }
    if(!isExpanded){
      return {
        ...styles.li
      }
    }
  }

  function ulStyle(){
    if(matches && isExpanded){
      return {
        ...styles.ulResponsive,
        ...styles.ulExpanded
      }
    }

    else if(matches && !isExpanded){
      return{
        ...styles.ulResponsive
      }
    }
    
    else {
      return {
        ...styles.ul
      }
    }
  }

  return (
    <header style={styles.header}>
      <Link style={matches ? styles.linkResponsive : styles.link} to="/">
        <img
          src={imgPamnet}
          alt="pamnet logo"
        />
      </Link>
      <nav style={styles.nav}>
        <div style={styles.navDiv}>
          {
            matches ? (
              <IconButton onClick={() => {
                setExpanded(!isExpanded)
              }}>
                <MenuIcon style={{ color: colors.mostarda }} />
              </IconButton>
            ) : <></>
          }
          <ul style={ulStyle()}>
            <NavLink style={styles.navLink} to="/">
              <li style={txtColor("/")}>
                Início
              </li>
            </NavLink>
            <NavLink style={styles.navLink} to="/aplicativos">
              <li style={txtColor("/aplicativos")}>
                Aplicativos
              </li>
            </NavLink>
            <NavLink style={styles.navLink} to="/empresa">
              <li style={txtColor("/empresa")}>
                Empresa
              </li>
            </NavLink>
            <NavLink style={styles.navLink} to="/contato">
              <li style={txtColor("/contato")}>
                Contato
              </li>
            </NavLink>
            <NavLink style={styles.navLink} to="#">
              <li style={txtColor("#")}>
                Teste sua velocidade
              </li>
            </NavLink>
            <NavLink style={styles.navLink} to="/faq">
              <li style={txtColor("/faq")}>
                FAQ
              </li>
            </NavLink>
            <NavLink style={styles.navLink} to="#">
              <li style={txtColor("#")}>
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
                <a target="_blank" href="https://www.instagram.com/pamnetfibraoptica/">
                  <img width={30} height={30} src={IGIcon} />
                </a>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  )
}