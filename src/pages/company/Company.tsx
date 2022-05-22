import { Grid, Typography } from '@mui/material';
import React from 'react';
import WrapperPage from '../../components/wrapper-page';
import styles from './Company.css';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
//import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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

        <Slider {...settings}>
          <div>
            <Typography align="center" style={styles.title}>MISSÃO</Typography>
            <Typography style={styles.subtitle}>Ser reconhecida pelos funcionários, usuários e pela comunidade como a melhor empresa provedora de serviços de internet via fibra óptica da região.</Typography>
          </div>
          <div>
            <Typography align="center" style={styles.title}>VISÃO</Typography>
            <Typography style={styles.subtitle}>Competência, qualidade, eficiência e profissionalismo nos atendimentos e nos serviços prestados aos usuários e colaboradores.</Typography>
          </div>
          <div>
            <Typography align="center" style={styles.title}>VALORES</Typography>
            <Typography style={styles.subtitle}>✓ Conduta ética e profissional<br />✓ Transparência nas atitudes e comportamentos<br />✓ Busca constante da excelência no atendimento<br />✓ Aprimoramento técnico e profissional constante</Typography>
          </div>
          <div>
            <Typography align="center" style={styles.title}>EMPREENDEDORISMO</Typography>
            <Typography style={styles.subtitle}>Texto</Typography>
          </div>
          <div>
            <Typography align="center" style={styles.title}>QUALIDADE DE INVESTIMENTO</Typography>
            <Typography style={styles.subtitle}>Texto</Typography>
          </div>
          <div>
            <Typography align="center" style={styles.title}>ATENDIMENTO</Typography>
            <Typography style={styles.subtitle}>Somos focados sempre no compromisso em atender bem nossos usuários e os moradores de nossa cidade.</Typography>
          </div>
        </Slider>
      </div>

      {/* <div style={styles.grid}> */}
        
      {/* </div> */}

    </WrapperPage>
  )
}