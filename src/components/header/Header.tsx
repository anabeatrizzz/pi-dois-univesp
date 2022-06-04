import React, { useState, useEffect } from 'react';
import imgPamnet from '../../assets/pamnet-header.png';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.css';
import { useMediaQuery, useTheme, IconButton } from '@mui/material';
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

  useEffect(() => {
    if(!matches){
      setExpanded(false)
    }
  }, [matches])

  function txtColor(path: string){
    if((path === location.pathname) && isExpanded){
      return {
        ...styles.li,
        ...styles.focusedLi,
        ...styles.liExpanded
      }
    }
    
    if(!(path === location.pathname) && !isExpanded) {
      return {
        ...styles.li,
      }
    }

    if(!(path === location.pathname) && isExpanded) {
      return {
        ...styles.li,
        ...styles.liExpanded
      }
    }

    if(path === location.pathname){
      return {
        ...styles.li,
        ...styles.focusedLi,
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
      <Link style={matches ? styles.linkResponsive : styles.link} to="/combos-promocionais">
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
            <NavLink style={styles.navLink} to="/combos-promocionais">
              <li style={txtColor("/combos-promocionais")}>
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
            <a style={styles.navLink} rel="noreferrer" target="_blank" href="https://www.minhaconexao.com.br">
              <li style={txtColor("#")}>
                Teste sua velocidade
              </li>
            </a>
            <NavLink style={styles.navLink} to="/faq">
              <li style={txtColor("/faq")}>
                FAQ
              </li>
            </NavLink>
            <a style={styles.navLink} rel="noreferrer" target="_blank" href="http://cc.pamnet.com.br:60280/sac/login/?sys=SAC">
              <li style={txtColor("#")}>
                Central de Atendimento
              </li>
            </a>
            <div style={styles.socialMediaDiv}>
              <div style={styles.fbIcon}>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/PAMNET.Mongagua">
                  <img width={30} alt="ícone do facebook" height={30} src={FBIcon} />
                </a>
              </div>
              <div>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/pamnetfibraoptica/">
                  <img width={30} alt="ícone do instagram" height={30} src={IGIcon} />
                </a>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  )
}