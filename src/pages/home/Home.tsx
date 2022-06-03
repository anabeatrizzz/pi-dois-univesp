import React, { useEffect } from "react";
import WrapperPage from "../../components/wrapper-page";
import { Grid, Card, CardContent, Typography, Divider, useMediaQuery, useTheme } from '@mui/material';
import styles from './Home.css';
import combo65 from '../../assets/combo-65.png';
import combo1GB from '../../assets/combo-65.png';
import netResidencial35 from '../../assets/internet-residencial-35-megas.png';
import netResidencial50 from '../../assets/internet-residencial-50-megas.png';
import netResidencial150 from '../../assets/internet-residencial-150-megas.png';

import { CardContent as MyCardContent } from "../../components/card-content";
import TextBlock from "../../components/text-block";
import { useLocation } from "react-router";

interface IHome {
  path?: string;
}

export default function Home(props: IHome) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname)
    console.log(props.path)
  }, [])

  function txtSize(type: "title" | "subtitle") {
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

  interface IBanner {
    path: string | undefined;
  }

  function Banner(props: IBanner) {
    var firstSrc = combo65;
    var secondSrc = combo1GB;
    var firstAlt = "";
    var secondAlt = "";

    switch (props.path) {
      case "/combos-promocionais":
        firstAlt = "banner com informações sobre o plano de combo 65"
        secondAlt = "banner com informações sobre o plano de combo de 1 gb"
        // return (
        //   <MyCardContent
        //     firstSrc={firstSrc}
        //     secondSrc={secondSrc}
        //     firstAlt={firstAlt}
        //     secondAlt={secondAlt}
        //   />
        // )
        break;
      case "/internet-residencial":
        firstAlt = "banner com informações sobre o plano de combo 65"
        secondAlt = "banner com informações sobre o plano de combo de 1 gb"
        firstSrc = netResidencial35
        secondSrc = netResidencial35
      //   firstSrc =
    }

    return (
      <MyCardContent
        firstSrc={firstSrc}
        secondSrc={secondSrc}
        firstAlt={firstAlt}
        secondAlt={secondAlt}
      />
    )
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

              <TextBlock path={"/combos-promocionais"} text={"Combos promocionais"} />
              <TextBlock path={"/internet-residencial"} text={"Internet residêncial"} />

              {/* <div>
                <a style={{ textDecoration: 'none' }} href="#">
                  <Typography style={matches ? { ...styles.focusedSubtitle, fontSize: 15 } : styles.focusedSubtitle}>
                    Combos promocionais
                  </Typography>
                </a>
                <Divider style={styles.divider} flexItem />
              </div> */}

              {/* <div>
                <Typography style={txtSize("subtitle")}>
                  Internet residêncial
                </Typography>
                <Divider style={styles.divider} flexItem />
              </div> */}

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

            {/* <MyCardContent
              firstSrc={combo65}
              secondSrc={combo1GB}
              firstAlt={"banner com informações sobre o plano de combo 65"}
              secondAlt={"banner com informações sobre o plano de combo de 1 gb"}
            /> */}

            {
              location.pathname === props.path ? (
                <Banner path={props.path} />
              ) : <></>
            }

            

          </Card>

          {/* {
              !matches ? (
                <MyCardContent src={combo65} alt={"banner com informações sobre o plano de combo 65"} />
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
          } */}
        </Grid>
      </Grid>
    </WrapperPage>
  )
}