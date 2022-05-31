import React from 'react'
import WrapperPage from '../../components/wrapper-page';
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import styles from './Apps.css';
import bgImg1 from '../../assets/apps-bg-img-1.png';
import bgImg2 from '../../assets/apps-bg-img-2.png';
import bgImg3 from '../../assets/apps-bg-img-3.png';
import bgImg4 from '../../assets/apps-bg-img-4.png';
import pamnetHdtv from '../../assets/pamnet-and-hdtv.png';
import appleStore from '../../assets/apple-store.png';
import googlePlay from '../../assets/google-play.png';
import webVersion from '../../assets/versao-web.png';
import tvBox from '../../assets/tv-box.png';
import watchImg from '../../assets/watch.png';
import paramountImg from '../../assets/paramount.png';
import qualificaImg from '../../assets/qualifica.png';

export default function Apps() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  function txtSize(){
    if(matches){
      return {
        ...styles.description,
        fontSize: 20
      }
    } else {
      return {
        ...styles.description,
      }
    }
  }

  return (
    <WrapperPage>
      <Grid container>
        <Grid style={styles.firstGridContainer} container>
          <Grid item xs={6}>
            <Grid style={styles.firstGridItemContainer} container>
              <div>
                <img alt="logotipo pamnet hdtv" style={styles.img} src={pamnetHdtv} />
              </div>

              <div>
                <Typography align="center" style={txtSize()}>
                  A PAMNET HDTV é um aplicativo com canais HD, para assistir em qualquer dispositivo móvel (smartphones e tablets). É só baixar o aplicativo e curtir.
                </Typography>
              </div>

              <div>
                <Grid style={styles.logoGrid} container>
                  <img style={styles.logo} src={appleStore} alt="apple store logotipo" />
                  <img style={styles.logo} src={googlePlay} alt="google play logotipo" />
                </Grid>
                <Grid style={styles.logoGrid} container>
                  <img style={styles.logo} src={webVersion} alt="versão web logotipo" />
                  <img style={styles.logo} src={tvBox} alt="tv box logotipo" />
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={6}><img alt="fundo ilustrativo pamnet hdtv" src={bgImg1} /></Grid>
        </Grid>

        <Grid style={styles.secondGridContainer} container>
          <Grid item xs={6}><img alt="fundo ilustrativo watch" src={bgImg2} /></Grid>

          <Grid item xs={6}>
            <Grid style={styles.firstGridItemContainer} container>
              <div>
                <img style={styles.img} alt="logotipo watch" src={watchImg} />
              </div>

              <div>
                <Typography align="center" style={txtSize()}>
                  A PAMNET firmou parceria com a WATCH Brasil para proporcionar a seus usuários uma plataforma de streaming de filmes, séries, realities, programas de humor e muito mais, com mais de 4.500 horas de conteúdo para assistir sozinho ou com a família. Todo esse conteúdo está disponível para que você assista agora, quando e onde quiser.
                </Typography>
              </div>

              <div>
                <Grid style={styles.logoGrid} container>
                  <img style={styles.logo} src={appleStore} alt="apple store logotipo" />
                  <img style={styles.logo} src={googlePlay} alt="google play logotipo" />
                </Grid>
                <Grid style={styles.logoGrid} container>
                  <img style={styles.logo} src={webVersion} alt="versão web logotipo" />
                </Grid>
              </div>
            </Grid>
          </Grid>

        </Grid>

        <Grid style={styles.thirGridContainer} container>
          <Grid item xs={6}>
            <Grid style={styles.firstGridItemContainer} container>
              <div>
                <img style={styles.img} alt="logotipo paramount" src={paramountImg} />
              </div>

              <div>
                <Typography align="center" style={txtSize()}>
                  HISTÓRIAS ÚNICAS. ESTRELAS ICÔNICAS. UMA MONTANHA DE ENTRETENIMENTO. MUITO CONTEÚDO ORIGINAL E EXCLUSIVO<br />
                  Curta histórias inéditas com personagens inesquecíveis, além de séries exclusivas que só o Paramount+ tem!
                </Typography>
              </div>

              <div>
                <Grid style={styles.logoGrid} container>
                  <img style={styles.logo} src={appleStore} alt="apple store logotipo" />
                  <img style={styles.logo} src={googlePlay} alt="google play logotipo" />
                </Grid>
                <Grid style={styles.logoGrid} container>
                  <img style={styles.logo} src={webVersion} alt="versão web logotipo" />
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={6}><img alt="fundo ilustrativo paramount" src={bgImg3} /></Grid>
        </Grid>

        <Grid style={styles.fourthGridContainer} container>
          <Grid item xs={6}><img alt="fundo ilustrativo qualifica" src={bgImg4} /></Grid>

          <Grid item xs={6}>
            <Grid style={styles.firstGridItemContainer} container>
              <div>
                <img style={styles.img} alt="logotipo qualifica" src={qualificaImg} />
              </div>

              <div>
                <Typography align="center" style={txtSize()}>
                  Por que estudar no Qualifica Cursos?<br />
                  Conteúdos de alta qualidade produzidos por especialistas para ajudar você a se qualificar e evoluir em diversas áreas de sua vida.
                </Typography>
              </div>

              <div>
                <Grid style={styles.logoGrid} container>
                  <img style={styles.logo} src={appleStore} alt="apple store logotipo" />
                  <img style={styles.logo} src={googlePlay} alt="google play logotipo" />
                </Grid>
                <Grid style={styles.logoGrid} container>
                  <img style={styles.logo} src={webVersion} alt="versão web logotipo" />
                </Grid>
              </div>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </WrapperPage>
  )
}