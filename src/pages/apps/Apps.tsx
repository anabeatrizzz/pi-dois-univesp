import React from 'react'
import WrapperPage from '../../components/wrapper-page';
import { Grid, Typography } from '@mui/material';
import styles from './Apps.css';
import bgImg1 from '../../assets/apps-bg-img-1.png';
import pamnetHdtv from '../../assets/pamnet-and-hdtv.png';
import appleStore from '../../assets/apple-store.png';
import googlePlay from '../../assets/google-play.png';
import webVersion from '../../assets/versao-web.png';
import tvBox from '../../assets/tv-box.png';

export default function Apps(){
  return(
    <WrapperPage>
      <Grid style={styles.firstGrid} container>
        <Grid style={styles.firstGridContainer} container>
          <Grid style={styles.firstGridContainerItem} container xs={5}>
            <div>
              <img
                src={pamnetHdtv}
                alt={"pamnet e hdtv"}
              />
            </div>

            <div>
              <Typography align="center" style={styles.description}>
                A PAMNET HDTV é um aplicativo com canais HD, para assistir em qualquer dispositivo móvel (smartphones e tablets). É só baixar o aplicativo e curtir.
              </Typography>
            </div>

            <div>
              <img src={appleStore} alt="apple store logotipo" />
              <img src={googlePlay} alt="google play logotipo" />
              <img src={webVersion} alt="versão web logotipo" />
              <img src={tvBox} alt="tv box logotipo" />
            </div>
          </Grid>
          <Grid container xs={7}>
            <img src={bgImg1} alt={"imagem promocional"} />
          </Grid>
        </Grid>
      </Grid>

      <Grid container>

      </Grid>

      <Grid container>

      </Grid>
    </WrapperPage>
  )
}