import { Divider, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import styles from './TextBlock.css';
import { Link, useMatch, useResolvedPath, } from 'react-router-dom';
import type { LinkProps } from "react-router-dom";

interface ITextBlock {
  path: string;
  text: string;
}

export default function TextBlock(props: ITextBlock) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  // style={matches ? { ...styles.focusedSubtitle, fontSize: 15 } : styles.focusedSubtitle}
  let resolved = useResolvedPath(props.path);
  let match = useMatch({ path: resolved.pathname, end: true });

  function txtSize(type: "title" | "subtitle") {
    if (matches && type === "title") {
      return {
        ...styles.title,
        fontSize: 15,
        marginRight: 10
      }
    } else if (!(matches) && type === "title") {
      return {
        ...styles.title
      }
    }

    if (matches && type === "subtitle") {
      return {
        ...styles.subtitle,
        fontSize: 15
      }
    } else if (!(matches) && type === "subtitle") {
      return {
        ...styles.subtitle
      }
    }
  }

  function focusedTxt(){
    if(match){
      return {
        ...styles.focusedSubtitle
      }
    } else {
      return undefined
    }
  }

  return (
    <div>
      <Link style={{ textDecoration: 'none' }} to={props.path}>
        <Typography style={{...txtSize("subtitle"), ...focusedTxt() }}>
          {props.text}
        </Typography>
      </Link>
      <Divider style={styles.divider} flexItem />
    </div>
  )
}