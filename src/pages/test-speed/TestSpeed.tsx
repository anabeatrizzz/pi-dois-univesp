import { Grid } from "@mui/material";
import React from "react";
import WrapperPage from "../../components/wrapper-page";

export default function TestSpeed(){
  return(
    <WrapperPage>
      <Grid container alignItems="center">
        <iframe
          name="Teste de Velocidade da Internet"
          height="200"
          width="200"
          scrolling="no"
          allowTransparency
          src="http://www.minhaconexao.com.br/mini-velocimetro/velocimetro.php?model=1&width=10&height=10">
        </iframe>
        <br />
      </Grid>
    </WrapperPage>
  )
}