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

  subtitle: {
    fontFamily: "Inter",
    fontWeight: 400,
    color: "white",
    fontSize: 24
  }
}

export default styles