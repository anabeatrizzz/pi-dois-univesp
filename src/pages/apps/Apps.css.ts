import colors from "../../assets/colors";

const styles = {
  firstGridContainer: {
    display: "flex",
    backgroundColor: colors.purple,
    //flexDirection: "column" as "column"
  },

  firstGridItemContainer: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%"
  },

  secondGridContainer: {
    backgroundColor: colors.orange,
    display: "flex"
  },

  logoGrid: {
    justifyContent: "center",
    alignItems: "center"
  },

  thirGridContainer: {
    backgroundColor: colors.darkBlue,
    display: "flex"
  },

  fourthGridContainer: {
    backgroundColor: colors.lightGreen,
    display: "flex"
  },

  // firstGridContainer: {
  //   flexDirection: "column" as "column",
  //   display: "flex",
  //   alignItems: "center"
  // },

  firstGridContainerItem: {
    alignItems: "center",
    justifyContent: "center",
  },

  description: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: 24,
    color: 'white',
    marginLeft: 10
  },

  logosContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column" as "column",
    alignItems: "center"
  },

  logo: {
    maxWidth: "60%",
    height: "auto",
    padding: 0,
    margin: 0,
  },

  img: {
    maxWidth: "100%",
    height: "auto",
    padding: 0,
    margin: 0,
  }
}

export default styles;