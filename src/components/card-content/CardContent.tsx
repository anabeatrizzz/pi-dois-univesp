import React from 'react';
import { CardContent as MUICardContent, useTheme, useMediaQuery } from '@mui/material';
import styles from './CardContent.css';

interface ICardContent {
  firstSrc: any;
  secondSrc: any;
  firstAlt: string;
  secondAlt: string;
}

export default function CardContent(props: ICardContent) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  if (!matches) {
    return (
      <MUICardContent style={styles.secondCardContent}>
        <div>
          <img
            src={props.firstSrc}
            style={styles.img}
            alt={props.firstAlt}
          />
        </div>

        <div>
          <img
            src={props.secondSrc}
            style={styles.img}
            alt={props.secondAlt}
          />
        </div>
      </MUICardContent>
    )
  } else if(matches) {
    return (
      <MUICardContent style={{ ...styles.secondCardContent, flexDirection: "column" }}>
        <div>
          <img
            src={props.firstSrc}
            style={styles.img}
            alt={props.firstAlt}
          />
        </div>

        <div>
          <img
            src={props.secondSrc}
            style={styles.img}
            alt={props.secondAlt}
          />
        </div>
      </MUICardContent>
    )
  } else {
    return (
      <></>
    )
  }
}