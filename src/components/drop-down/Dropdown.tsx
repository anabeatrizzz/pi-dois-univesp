import { Grid, IconButton, Typography, Collapse, CardContent } from "@mui/material"
import React, { useState } from "react"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import styles from './Dropdown.css';

interface IDropdown {
  number: number;
}

export default function Dropdown(props: IDropdown) {
  const [open, setOpen] = useState(false);

  return (
    <Grid container>
      <Grid alignItems="center" direction="row" container>
        <IconButton onClick={() => { setOpen(!open) }}>
          {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        </IconButton>
        <Typography style={styles.title}>
          Pergunta {props.number}
        </Typography>
      </Grid>

      <Grid alignItems="center" container>
        <Collapse in={open}>
          <CardContent>
            <Typography>Texto</Typography>
          </CardContent>
        </Collapse>
      </Grid>
    </Grid>
  )
}