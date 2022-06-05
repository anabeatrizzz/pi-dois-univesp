import React from "react";
import { Grid, Typography } from "@mui/material";
import pamnetHdtv from '../../assets/pamnet-and-hdtv.png';
import watchImg from '../../assets/watch.png';
import paramountImg from '../../assets/paramount.png';
import styles from './Banner.css'

export default function OtherBanner() {
  return (
    <Grid
      container
      xs={12}
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      style={styles.container}
    >
      <Typography
        pt={3}
        pb={3}
        style={{...styles.title, maxWidth: "100%", paddingRight: 10}}
        align="center"
      >
        Combo 65
      </Typography>

      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        //pt={5}
        //pb={5}
        // border: "1px solid blue",
        xs={12}
        style={{ maxWidth: "80%" }}
      >
        <Typography style={styles.innerTxt} align="center">
          Ip inválido e dinâmico
        </Typography>
        <Typography style={styles.innerTxt} align="center">
          Velocidade até 100 megas
        </Typography>
        <Typography style={styles.innerTxt} align="center">
          Modem e roteador em comodato
        </Typography>
        
        <Grid container style={styles.logosContainer}>
          <img style={styles.img} src={pamnetHdtv} alt="logotipo pamnet hdtv" />
          <Grid container justifyContent="space-between" alignItems="flex-end" direction="row">
            <img style={{ ...styles.img, width: "50%" }} src={watchImg} alt="logotipo watch hdtv" />
            <img style={{ ...styles.img, width: "50%" }} src={paramountImg} alt="logotipo paramount hdtv" />
          </Grid>
        </Grid>

        <Typography style={styles.innerTxt} align="center">
          Suporte em até 48 horas úteis
        </Typography>
        <Typography style={styles.innerTxt} align="center">
          Instalação e adesão GRÁTIS
        </Typography>
        <Typography
          style={styles.moneyTxt}
          align="center">
          R$ 67,00
        </Typography>
        <Typography
          style={styles.innerTxt}
          align="center">
          mensal
        </Typography>
      </Grid>
    </Grid>
  )
}