import React from "react";
import WrapperPage from "../../components/wrapper-page";
import { Grid, Card, CardContent, Typography, Divider } from '@mui/material';
import styles from './Home.css';
import combo65 from '../../assets/combo-65.png';
import combo1GB from '../../assets/combo-65.png';

export default function Home(){
  return(
    <WrapperPage>
      <Grid style={styles.grid} container>
        <Grid style={styles.gridItem} container>
          <Card style={styles.card}>
            <CardContent style={styles.cardContent}>
              <Typography style={styles.title}>
                Planos
              </Typography>
              
              <div>
                <Typography style={styles.focusedSubtitle}>
                  Combos promocionais
                </Typography>
                <Divider style={styles.divider} flexItem />
              </div>
              
              <div>
                <Typography style={styles.subtitle}>
                  Internet residêncial
                </Typography>
                <Divider style={styles.divider} flexItem />
              </div>
              
              <div>
                <Typography style={styles.subtitle}>
                  Internet empresárial
                </Typography>
                <Divider style={styles.divider} flexItem />
              </div>
              
              <div>
                <Typography style={styles.subtitle}>
                  Link dedicado
                </Typography>
                <Divider style={styles.divider} flexItem />
              </div>
            </CardContent>
            <Divider style={styles.divider} orientation="vertical" flexItem />
            <CardContent style={styles.secondCardContent}>
              <div>
                <img
                  src={combo65}
                  width={"80%"}
                  height={"80%"}
                  alt="banner com informações sobre o plano de combo 65"
                />
              </div>

              <div>
                <img
                  src={combo1GB}
                  width={"80%"}
                  height={"80%"}
                  alt="banner com informações sobre o plano de combo de 1 gb"
                />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </WrapperPage>
  )
}