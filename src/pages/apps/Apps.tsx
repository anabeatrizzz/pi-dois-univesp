import React from 'react'
import WrapperPage from '../../components/wrapper-page';
import { Grid, Typography } from '@mui/material';
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
  return (
    <WrapperPage>
      <Grid container>
        <Grid style={styles.firstGridContainer} container>
          <Grid item xs={6}>
            <Grid style={styles.firstGridItemContainer} container>
              <div>
                <img src={pamnetHdtv} />
              </div>

              <div>
                <Typography align="center" style={styles.description}>
                  A PAMNET HDTV é um aplicativo com canais HD, para assistir em qualquer dispositivo móvel (smartphones e tablets). É só baixar o aplicativo e curtir.
                </Typography>
              </div>

              <div>
                <Grid style={styles.logoGrid} container>
                  <img src={appleStore} alt="apple store logotipo" />
                  <img src={googlePlay} alt="google play logotipo" />
                </Grid>
                <Grid style={styles.logoGrid} container>
                  <img src={webVersion} alt="versão web logotipo" />
                  <img src={tvBox} alt="tv box logotipo" />
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={6}><img src={bgImg1} /></Grid>
        </Grid>

        <Grid style={styles.secondGridContainer} container>
          <Grid item xs={6}><img src={bgImg2} /></Grid>

          <Grid item xs={6}>
            <Grid style={styles.firstGridItemContainer} container>
              <div>
                <img src={watchImg} />
              </div>

              <div>
                <Typography align="center" style={styles.description}>
                  A PAMNET firmou parceria com a WATCH Brasil para proporcionar a seus usuários uma plataforma de streaming de filmes, séries, realities, programas de humor e muito mais, com mais de 4.500 horas de conteúdo para assistir sozinho ou com a família. Todo esse conteúdo está disponível para que você assista agora, quando e onde quiser.
                </Typography>
              </div>

              <div>
                <Grid style={styles.logoGrid} container>
                  <img src={appleStore} alt="apple store logotipo" />
                  <img src={googlePlay} alt="google play logotipo" />
                </Grid>
                <Grid style={styles.logoGrid} container>
                  <img src={webVersion} alt="versão web logotipo" />
                </Grid>
              </div>
            </Grid>
          </Grid>

        </Grid>

        <Grid style={styles.thirGridContainer} container>
          <Grid item xs={6}>
            <Grid style={styles.firstGridItemContainer} container>
              <div>
                <img src={paramountImg} />
              </div>

              <div>
                <Typography align="center" style={styles.description}>
                  HISTÓRIAS ÚNICAS. ESTRELAS ICÔNICAS. UMA MONTANHA DE ENTRETENIMENTO. MUITO CONTEÚDO ORIGINAL E EXCLUSIVO<br />
                  Curta histórias inéditas com personagens inesquecíveis, além de séries exclusivas que só o Paramount+ tem!
                </Typography>
              </div>

              <div>
                <Grid style={styles.logoGrid} container>
                  <img src={appleStore} alt="apple store logotipo" />
                  <img src={googlePlay} alt="google play logotipo" />
                </Grid>
                <Grid style={styles.logoGrid} container>
                  <img src={webVersion} alt="versão web logotipo" />
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={6}><img src={bgImg3} /></Grid>
        </Grid>

        <Grid style={styles.fourthGridContainer} container>
          <Grid item xs={6}><img src={bgImg4} /></Grid>

          <Grid item xs={6}>
            <Grid style={styles.firstGridItemContainer} container>
              <div>
                <img src={qualificaImg} />
              </div>

              <div>
                <Typography align="center" style={styles.description}>
                  Por que estudar no Qualifica Cursos?<br />
                  Conteúdos de alta qualidade produzidos por especialistas para ajudar você a se qualificar e evoluir em diversas áreas de sua vida.
                </Typography>
              </div>

              <div>
                <Grid style={styles.logoGrid} container>
                  <img src={appleStore} alt="apple store logotipo" />
                  <img src={googlePlay} alt="google play logotipo" />
                </Grid>
                <Grid style={styles.logoGrid} container>
                  <img src={webVersion} alt="versão web logotipo" />
                </Grid>
              </div>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </WrapperPage>
  )
}