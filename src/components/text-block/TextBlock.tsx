import { Divider, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import styles from './TextBlock.css';
import { Link, useMatch, useResolvedPath, useLocation } from 'react-router-dom';

interface ITextBlock {
  path: string;
  text: string;
}

export default function TextBlock(props: ITextBlock) {
  const theme = useTheme();
  const location = useLocation();
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));
  let resolved = useResolvedPath(props.path);
  let matchesPath = useMatch({ path: resolved.pathname, end: true });

  function txtSize() {
    if (matchesMobile) {
      return {
        ...styles.subtitle,
        fontSize: 15
      }
    } else if (!(matchesMobile)) {
      return {
        ...styles.subtitle
      }
    }
  }

  function focusedTxt(){
    // if same path and is mobile
    if(matchesPath && matchesMobile){
      return {
        ...styles.focusedSubtitle,
        fontSize: 15
      }
    }
    
    // if same path but not mobile
    else if(matchesPath && !matchesMobile) {
      return {
        ...styles.focusedSubtitle
      }
    }

    else if(location.pathname === "/" && props.path === "/combos-promocionais"){
      return {
        ...styles.focusedSubtitle
      }
    }
  }

  return (
    <div>
      <Link style={styles.link} to={props.path}>
        <Typography
          style={
            {...txtSize(), ...focusedTxt(), }}
        >
          {props.text}
        </Typography>
      </Link>
      <Divider style={styles.divider} flexItem />
    </div>
  )
}