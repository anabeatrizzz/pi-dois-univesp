import React from 'react';
import { CardContent as MUICardContent } from '@mui/material';
import styles from './CardContent.css';
import combo65 from '../../assets/combo-65.png';
import combo1GB from '../../assets/combo-65.png';
import netResidencial35 from '../../assets/internet-residencial-35-megas.png';
import netResidencial50 from '../../assets/internet-residencial-50-megas.png';
import netResidencial150 from '../../assets/internet-residencial-150-megas.png';

interface ICardContent {
  firstSrc: any;
  secondSrc: any;
  firstAlt: string;
  secondAlt: string;
}

interface IBanner {
  path: string | undefined;
}

export function CardContent(props: ICardContent) {
  return(
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
}

export function Banner(props: IBanner) {
  var firstSrc = combo65;
  var secondSrc = combo1GB;
  var firstAlt = "";
  var secondAlt = "";
  var paths = ["/combos-promocionais", "/internet-residencial", "/internet-empresarial", "/link-dedicado"]

  switch (props.path) {
    case paths[0]:
      firstAlt = "banner com informações sobre o plano de combo 65"
      secondAlt = "banner com informações sobre o plano de combo de 1 gb"
      break;
    case paths[1]:
      firstAlt = "banner com informações sobre o plano de 35 megas"
      secondAlt = "banner com informações sobre o plano de 50 megas"
      firstSrc = netResidencial35
      secondSrc = netResidencial50
    //   firstSrc =
  }

  return (
    <CardContent
      firstSrc={firstSrc}
      secondSrc={secondSrc}
      firstAlt={firstAlt}
      secondAlt={secondAlt}
    />
  )
}