import backgroundImg from '../../assets/company-bg.png';

const styles = {
  grid: {
    backgroundImage: `url(${backgroundImg})`
  },

  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column" as "column"
  },

  containerWrapper: {
    paddingTop: 50,
    paddingBottom: 90
  },

  subtitleDiv: {
    width: "90%"
  },

  title: {
    fontFamily: "Inter",
    fontWeight: 700,
    color: "white",
    fontSize: 24
  },

  sliderTitle: {
    fontFamily: "Inter",
    fontWeight: 700,
    color: "white",
    fontSize: 16
  },

  sliderSubtitle: {
    fontFamily: "Inter",
    fontWeight: 400,
    color: "white",
    fontSize: 16
  },

  subtitle: {
    fontFamily: "Inter",
    fontWeight: 400,
    color: "white",
    fontSize: 24
  },

  cardTitle: {
    fontWeight: 700,
    fontSize: 20,
    color: "white"
  },

  card: {
    background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 11.98%, rgba(255, 255, 255, 0.6) 100%)",
    opacity: 0.45,
    borderRadius: 56,
  },

  sliderDiv: {
    //width: "60%",
    marginLeft: 30,
    marginRight: 30,
    // flexDirection: "row" as "row",
    // justifyContent: "center"
  }
}

export default styles