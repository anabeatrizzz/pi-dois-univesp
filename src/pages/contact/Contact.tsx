import { Grid, Typography, TextField, Button, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import WrapperPage from '../../components/wrapper-page';
import styles from './Contact.css';
import { useDropzone } from 'react-dropzone'

export default function Contact() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const { getInputProps, open, getRootProps } = useDropzone({
    noClick: true,
    noKeyboard: true,
    maxFiles: 1,
    accept: {
      'application/pdf': [".pdf"]
    }
  });

  return (
    <WrapperPage>
      <Grid container>
        <Grid pt={5} pb={5} container justifyContent="center" alignItems="center">
          <Grid item xs={matches ? 12 : 6}>
            <Typography style={styles.title} align="center">E-mails</Typography>
            <Grid container direction="column" justifyContent="center" alignItems="center">
              <Typography style={styles.subtitle} align="justify">Agendamento: agendamento@pamnet.com.br</Typography>
              <Typography style={styles.subtitle} align="justify">Jurídico: juridico@pamnet.com.br</Typography>
              <Typography style={styles.subtitle} align="justify">Financeiro: pam@pamnet.com.br</Typography>
              <Typography style={styles.subtitle} align="justify">Suporte: suporte@pamnet.com.br</Typography>
            </Grid>
          </Grid>

          <Grid item xs={matches ? 12 : 6}>
            <Typography style={styles.title} align="center">Atendimento</Typography>
            <Typography style={styles.subtitle} align="center">Central de Telefone: (13) 3445-2900</Typography>
            <Typography style={styles.subtitle} align="center">Whatsapp: (13) 9 9660-2900</Typography>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={matches ? 12 : 6}>
            <Typography align="center">MAPA</Typography>
          </Grid>

          <Grid item xs={matches ? 12 : 6}>
            <Typography style={styles.title} align="center">VENHA TRABALHAR NA PAMNET</Typography>
            <Typography style={styles.subtitle} align="justify">
              Acreditamos que investir em nossos funcionários é trazer mais qualidade ao nosso negócio e aos nossos serviços. Por isso, estamos sempre em busca de novos talentos dispostos a dividir esse sonho.<br/><br/>Buscamos profissionais comprometidos com a satisfação de nossos usuarios e com o crescimento da empresa, que gostem de aprender e queiram evoluir conosco. Se você tem esse perfil, envie seu currículo e venha integrar nossa equipe!
            </Typography>

            <Grid pt={3} container justifyContent="center" alignItems="center">
              <Grid item xs={8}>
                <TextField size="small" fullWidth type="email" label="E-mail" variant="outlined" />
                <Typography pt={3} pb={3} align="center">Currículo em PDF</Typography>
                
                <Grid pb={3} container alignItems="center" justifyContent="flex-end" direction="row">
                  <Grid
                    {...getRootProps({ className: 'dropzone' })}
                    item
                    xs={matches ? 12 : 6}
                  >
                    <input {...getInputProps()} />
                    <Button
                      style={styles.btn}
                      size="small"
                      disableElevation
                      type="button"
                      onClick={open}
                      variant="outlined"
                    >
                      <Typography
                        variant="subtitle2"
                        style={styles.btnTxt}
                      >
                        Escolher arquivo
                      </Typography>
                    </Button>
                  </Grid>

                  <Grid item xs={matches ? 12 : 6}>
                    <Button
                      size="small"
                      disableElevation
                      type="submit"
                      style={styles.btn}
                      variant="outlined"
                    >
                      <Typography variant="subtitle2" style={styles.btnTxt}>Enviar</Typography>
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