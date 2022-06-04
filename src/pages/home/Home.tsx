import React from "react";
import WrapperPage from "../../components/wrapper-page";
import { Grid, Card, CardContent, Typography, Divider, useMediaQuery, useTheme } from '@mui/material';
import styles from './Home.css';
import { Banner } from "../../components/card-content";
import TextBlock from "../../components/text-block";
import { useLocation } from "react-router";

interface IHome {
  path?: string;
}

export default function Home(props: IHome) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  function txtSize() {
    if (matches) {
      return {
        ...styles.title,
        fontSize: 15,
        marginRight: 10
      }
    } else if (!(matches)) {
      return {
        ...styles.title
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
              <Typography style={txtSize()}>
                Planos
              </Typography>

              <TextBlock path={"/combos-promocionais"} text={"Combos promocionais"} />
              <TextBlock path={"/internet-residencial"} text={"Internet residêncial"} />
              <TextBlock path={"/internet-empresarial"} text={"Internet empresárial"} />
              <TextBlock path={"/link-dedicado"} text={"Link dedicado"} />

            </CardContent>

            {
              matches ? (
                <></>
              ) : (
                <Divider style={styles.divider} orientation={"vertical"} flexItem />
              )
            }

            {
              (location.pathname === props.path && !matches) ? (
                <Banner path={props.path} />
              ) : <></>
            }
          </Card>
          {
            (location.pathname === props.path && matches) ? (
              <Banner path={props.path} />
            ) : <></>
          }
        </Grid>
      </Grid>
    </WrapperPage>
  )
}