// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { CardContent as MUICardContent, Grid, useMediaQuery, useTheme } from '@mui/material';
import styles from './CardContent.css';
import combo65 from '../../assets/combo-65.png';
import combo1GB from '../../assets/combo-65.png';
import Slider from "react-slick";
import netResidencial35 from '../../assets/internet-residencial-35-megas.png';
import netResidencial50 from '../../assets/internet-residencial-50-megas.png';
import netResidencial150 from '../../assets/internet-residencial-150-megas.png';
import netEmpresarial1 from "../../assets/internet-empresarial-1-giga.png"
import netEmpresarial450 from "../../assets/internet-empresarial-450-megas.png"
import netEmpresarial750 from "../../assets/internet-empresarial-750-megas.png"
import linkDedicado80 from "../../assets/link-dedicado-80-megas.png"
import linkDedicado120 from "../../assets/link-dedicado-120-megas.png"
import linkDedicado400 from "../../assets/link-dedicado-400-megas.png"

interface ICardContent {
  data: { src: any; alt: string; }[]
}

interface IBanner {
  path: string | undefined;
}

export function CardContent(props: ICardContent) {
  const [imgsCount, setImgsCount] = useState<number>();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const settings = {
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
  }

  useEffect(() => {
    setImgsCount(props.data.length)
  }, [props.data])

  return (
    <MUICardContent style={styles.secondCardContent}>
        <Grid item xs={imgsCount === 2 ? 11 : matches ? 11 : 6}>
          <Slider {...settings}>
            {
              props.data.map((value, index) => {
                return (
                  <div key={index}>
                    <img
                      src={value.src}
                      style={styles.img}
                      alt={value.alt}
                    />
                  </div>
                )
              })
            }
          </Slider>
        </Grid>
    </MUICardContent>
  )
}

export function Banner(props: IBanner) {
  var paths = ["/combos-promocionais", "/internet-residencial", "/internet-empresarial", "/link-dedicado"]
  var data = [];

  switch (props.path) {
    case paths[0]:
      data.push(
        {
          src: combo65,
          alt: "banner com informações sobre o plano de combo 65"
        },
        {
          src: combo1GB,
          alt: "banner com informações sobre o plano de combo de 1 gb"
        }
      )
      break;
    case paths[1]:
      data.push(
        {
          src: netResidencial35,
          alt: "banner com informações sobre o plano de 35 megas"
        },
        {
          src: netResidencial50,
          alt: "banner com informações sobre o plano de 50 megas"
        },
        {
          src: netResidencial150,
          alt: "banner com informações sobre o plano de 150 megas"
        }
      )
      break;
    case paths[2]:
      data.push(
        {
          src: netEmpresarial1,
          alt: "banner com informações sobre o plano de 1 giga"
        },
        {
          src: netEmpresarial450,
          alt: "banner com informações sobre o plano de 450 megas"
        },
        {
          src: netEmpresarial750,
          alt: "banner com informações sobre o plano de 750 megas"
        }
      )
      break
    case paths[3]:
      data.push(
        {
          src: linkDedicado80,
          alt: "banner com informações sobre o plano de 80 megas"
        },
        {
          src: linkDedicado120,
          alt: "banner com informações sobre o plano de 120 megas"
        },
        {
          src: linkDedicado400,
          alt: "banner com informações sobre o plano de 400 megas"
        }
      )
      break
  }

  return (
    <CardContent
      data={data}
    />
  )
}