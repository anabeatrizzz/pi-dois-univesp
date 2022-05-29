// @ts-nocheck
import { Grid, Typography, TextField, Button, useMediaQuery, useTheme } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
import WrapperPage from '../../components/wrapper-page';
import styles from './Contact.css';
import { useDropzone } from 'react-dropzone';
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Contact() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [filePath, setFilePath] = useState("");
  const recaptchaRef = useRef(null);
  const formik = useFormik({
    initialValues: {
      email: "",
      filePath: filePath
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email("Informe um e-mail válido")
        .required("Informe seu e-mail")
    }),
    onSubmit: (_, actions) => {
      if(filePath === ""){
        alert("Você não anexou nenhum arquivo de currículo")
      } else {
        alert("Currículo enviado")
        actions.resetForm()
      }
    }
    // onSubmit: async() => {
    //   const captchaToken = await recaptchaRef.current.executeAsync();
    //   recaptchaRef.current.reset();
    // }
  })

  const { getInputProps, open, getRootProps, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
    maxFiles: 1,
    accept: {
      'application/pdf': [".pdf"]
    }
  });

  useEffect(() => {
    if (acceptedFiles.length !== 0) {
      setFilePath(acceptedFiles[0].name)
    }
  }, [acceptedFiles, filePath])

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
            {/* <Typography align="center">MAPA</Typography> */}
            <iframe title="mapa com endereço da pamnet" src="https://www.google.com/maps/d/u/0/embed?mid=1qSXWA_oIh_aIOeWl1vFqfTHphSll9UU&ehbc=2E312F" width="530" height="400"></iframe>
          </Grid>

          <Grid item xs={matches ? 12 : 6}>
            <Typography style={styles.title} align="center">VENHA TRABALHAR NA PAMNET</Typography>
            <Typography style={styles.subtitle} align="justify">
              Acreditamos que investir em nossos funcionários é trazer mais qualidade ao nosso negócio e aos nossos serviços. Por isso, estamos sempre em busca de novos talentos dispostos a dividir esse sonho.<br /><br />Buscamos profissionais comprometidos com a satisfação de nossos usuarios e com o crescimento da empresa, que gostem de aprender e queiram evoluir conosco. Se você tem esse perfil, envie seu currículo e venha integrar nossa equipe!
            </Typography>

            <form noValidate onSubmit={formik.handleSubmit}>
              <Grid pt={3} container justifyContent="center" alignItems="center">
                <Grid item xs={8}>
                  <TextField
                    id="email"
                    size="small"
                    fullWidth
                    type="email"
                    label="E-mail"
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    required
                  />

                  <Typography pt={3} pb={3} align="center">
                    Currículo em PDF
                  </Typography>

                  <Grid pb={3} container alignItems="center" justifyContent="center" direction="row">
                    <Grid
                      {...getRootProps({ className: 'dropzone' })}
                      item
                      xs={matches ? 12 : 6}
                    >
                      <input
                        {...getInputProps()}
                      />

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
                        <Typography variant="subtitle2" style={styles.btnTxt}>
                          Enviar
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size="compact"
                    hl="pt"
                    // @ts-ignore
                    sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                  />
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </WrapperPage>
  )
}