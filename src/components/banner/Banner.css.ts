import backgroundBanner from "../../assets/banner-background.png";

const styles = {
  container: {
    backgroundImage: `url(${backgroundBanner})`,
    backgroundRepeat: "no-repeat",
    paddingBottom: "45%",
    //backgroundSize: "90%"
    //border: "1px solid #000000"
  },

  title: {
    color: "white",
    fontFamily: "Inter",
    fontWeight: 700,
    lineHeight: "29.05px",
    fontSize: 24,
    paddingBottom: 50
  },

  innerTxt: {
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "24.2px",
    fontSize: 20,
    paddingTop: 20
  },

  img: {
    width: "100%",
    height: "auto",
    padding: 0,
    margin: 0,
  },

  moneyTxt: {
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "42.36px",
    fontSize: 35,
    paddingTop: 20
  },

  logosContainer: {
    paddingTop: 20,
    paddingBotton: 20
  }
}

export default styles;