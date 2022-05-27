import React, { useEffect, useState } from "react";
import WrapperPage from "../../components/wrapper-page";
import { Grid, Card, CardContent, Typography, Divider, useMediaQuery, useTheme } from '@mui/material';
import styles from './Home.css';
import combo65 from '../../assets/combo-65.png';
import combo1GB from '../../assets/combo-65.png';

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  function txtSize(type: "title" | "subtitle" | "focused") {
    if (matches && type === "title") {
      return {
        ...styles.title,
        fontSize: 15,
        marginRight: 10
      }
    } else if (!(matches) && type === "title") {
      return {
        ...styles.title
      }
    }

    if (matches && type === "subtitle") {
      return {
        ...styles.subtitle,
        fontSize: 15
      }
    } else if (!(matches) && type === "subtitle") {
      return {
        ...styles.subtitle
      }
    }
  }

  return (
    <WrapperPage>
      <Grid style={styles.grid} container>
        <Grid style={styles.gridItem} container>
          <Card style={styles.card}>
            <CardContent
              style={matches ? { ...styles.cardContent, flexDirection: "row" } : styles.cardContent}
            >
              <Typography style={txtSize("title")}>
                Planos
              </Typography>

              <div>
                <Typography style={matches ? { ...styles.focusedSubtitle, fontSize: 15 } : styles.focusedSubtitle}>
                  Combos promocionais
                </Typography>
                <Divider style={styles.divider} flexItem />
              </div>

              <div>
                <Typography style={txtSize("subtitle")}>
                  Internet residêncial
                </Typography>
                <Divider style={styles.divider} flexItem />
              </div>

              <div>
                <Typography style={txtSize("subtitle")}>
                  Internet empresárial
                </Typography>
                <Divider style={styles.divider} flexItem />
              </div>

              <div>
                <Typography style={txtSize("subtitle")}>
                  Link dedicado
                </Typography>
                <Divider style={styles.divider} flexItem />
              </div>
            </CardContent>

            {
              matches ? (
                <></>
              ) : (
                <Divider style={styles.divider} orientation={"vertical"} flexItem />
              )
            }

            {
              !matches ? (
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
              ) : (<></>)
            }
          </Card>
          {
            matches ? (
              <CardContent style={{...styles.secondCardContent, flexDirection: "column"}}>
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
            ) : (<></>)
          }
        </Grid>
      </Grid>
    </WrapperPage>
  )
}