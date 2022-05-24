import WrapperPage from "../../components/wrapper-page";
import React from "react";
import { Grid } from "@mui/material";
import Dropdown from '../../components/drop-down';

export default function Faq() {
  return (
    <WrapperPage>
      <Grid container>
        {
          Array(5).fill(1).map((_, index) => {
            return (
              <Dropdown number={index + 1} />
            )
          })
        }
      </Grid>
    </WrapperPage>
  )
}