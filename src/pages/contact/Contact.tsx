import { Grid, Typography, TextField, Button } from '@mui/material';
import React from 'react';
import WrapperPage from '../../components/wrapper-page';
import styles from './Contact.css';

export default function Contact() {
  return (
    <WrapperPage>
      <Grid container>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={6}>
            <Typography style={styles.title} align="center">E-mails</Typography>
            <Grid container direction="column" justifyContent="center" alignItems="center">
              <Typography style={styles.subtitle} align="justify">Agendamento: agendamento@pamnet.com.br</Typography>
              <Typography style={styles.subtitle} align="justify">Jurídico: juridico@pamnet.com.br</Typography>
              <Typography style={styles.subtitle} align="justify">Financeiro: pam@pamnet.com.br</Typography>
              <Typography style={styles.subtitle} align="justify">Suporte: suporte@pamnet.com.br</Typography>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Typography style={styles.title} align="center">Atendimento</Typography>
            <Typography style={styles.subtitle} align="center">Central de Telefone: (13) 3445-2900</Typography>
            <Typography style={styles.subtitle} align="center">Whatsapp: (13) 9 9660-2900</Typography>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={6}>
            <Typography align="center">MAPA</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography style={styles.title} align="center">VENHA TRABALHAR NA PAMNET</Typography>
            <Typography style={styles.subtitle} align="justify">
              Acreditamos que investir em nossos funcionários é trazer mais qualidade ao nosso negócio e aos nossos serviços. Por isso, estamos sempre em busca de novos talentos dispostos a dividir esse sonho.<br/><br/>Buscamos profissionais comprometidos com a satisfação de nossos usuarios e com o crescimento da empresa, que gostem de aprender e queiram evoluir conosco. Se você tem esse perfil, envie seu currículo e venha integrar nossa equipe!
            </Typography>

            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={8}>
                <TextField type="email" label="E-mail" variant="outlined" />
                <Typography align="center">Currículo em PDF</Typography>
                
                <Grid container alignItems="center" justifyContent="space-evenly" direction="row">
                  <Grid item xs={6}>
                    <TextField type="file" variant="outlined" />
                  </Grid>

                  <Grid item xs={6}>
                    <Button variant="contained">
                      Enviar
                    </Button>
                  </Grid>
                </Grid>
                
              </Grid>

              <Grid item xs={4}>
                VERIFICAÇAO ROBO
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </WrapperPage>
  )
}