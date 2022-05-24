import { Grid, Typography, Card, CardContent } from '@mui/material';
import React from 'react';
import WrapperPage from '../../components/wrapper-page';
import styles from './Company.css';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import bestSatisfaction from '../../assets/maior-satisfacao.png';
import bestProvider from '../../assets/melhor-provedor.png';
import bestSpeed from '../../assets/melhor-velocidade.png';

export default function Company() {
  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true
  }

  return (
    <WrapperPage>
      <div style={styles.grid}>

        <Grid style={styles.containerWrapper} container>
          <Grid style={styles.container} container>
            <Typography style={styles.title} align="center">
              SOBRE A PAMNET
            </Typography>
            <div style={styles.subtitleDiv}>
              <Typography style={styles.subtitle} align="center">
                Fundada em 1995 a Pam Pépe Antenas é hoje uma empresa sólida e arrojada na implantação de malha óptica na cidade de Mongaguá para provimento de acesso à Internet em banda larga. Se especializou em oferecer durante alguns anos sinal de internet via rádio cobrindo da Pedreira a Agenor de Campos e a Zona Rural. Hoje com sede própria e estruturada, a Pam Pépe Antenas possui uma equipe de profissionais treinados e capacitados para atendimento técnico e comercial.
              </Typography>
            </div>
          </Grid>

        </Grid>

        <Grid container>
          <Grid item xs={6}>
            <Slider {...settings}>
              <div>
                <Typography align="center" style={styles.sliderTitle}>
                  MISSÃO
                </Typography>
                <Typography style={{ ...styles.subtitle, fontSize: 16 }}>
                  Ser reconhecida pelos funcionários, usuários e pela comunidade como a melhor empresa provedora de serviços de internet via fibra óptica da região.
                </Typography>
              </div>
              <div>
                <Typography align="center" style={styles.sliderTitle}>
                  VISÃO
                </Typography>
                <Typography style={styles.sliderSubtitle}>Competência, qualidade, eficiência e profissionalismo nos atendimentos e nos serviços prestados aos usuários e colaboradores.</Typography>
              </div>
              <div>
                <Typography align="center" style={styles.sliderTitle}>
                  VALORES
                </Typography>
                <Typography style={styles.sliderSubtitle}>✓ Conduta ética e profissional<br />✓ Transparência nas atitudes e comportamentos<br />✓ Busca constante da excelência no atendimento<br />✓ Aprimoramento técnico e profissional constante</Typography>
              </div>
              <div>
                <Typography align="center" style={styles.sliderTitle}>
                  EMPREENDEDORISMO
                </Typography>
                <Typography style={styles.sliderSubtitle}>Como empreendedores em nossa cidade, Mongaguá, procuramos sempre crescer. Nossa conquista vem de uma prospecção de usuários muito boa.</Typography>
              </div>
              <div>
                <Typography align="center" style={styles.sliderTitle}>
                  QUALIDADE DE INVESTIMENTO
                </Typography>
                <Typography style={styles.sliderSubtitle}>Primeiro a instalação da base e repetidoras. Saímos da LP de dados para link em fibra óptica com capacidade de 500 Mbps. Hoje em 2020 contamos com mais de 40 Gbps em fibra óptica chegando em nossa sede para ser distribuído por nossos usuários.</Typography>
              </div>
              <div>
                <Typography align="center" style={styles.sliderTitle}>
                  ATENDIMENTO
                </Typography>
                <Typography style={styles.sliderSubtitle}>
                  Somos focados sempre no compromisso em atender bem nossos usuários e os moradores de nossa cidade.
                </Typography>
              </div>
            </Slider>

          </Grid>

          <Grid item xs={6}>
            <Typography align="center" style={styles.cardTitle}>
              RELATOS DOS CLIENTES
            </Typography>
            <Card style={styles.card}>
              <CardContent></CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid pt={5} container justifyContent="center" alignItems="center">
          <Grid item>
            <img src={bestSatisfaction} alt="prêmio de melhor satisfação" />
          </Grid>
          <Grid item>
            <img src={bestProvider} alt="prêmio de melhor provedor" />
          </Grid>
          <Grid item>
            <img src={bestSpeed} alt="prêmio de melhor velocidade" />
          </Grid>
        </Grid>
      </div>
    </WrapperPage>
  )
}