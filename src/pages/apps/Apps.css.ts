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
    color: 'white'
  },

  logosContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column" as "column",
    alignItems: "center"
  },

  logos: {
    width: "30%",
    height: "30%"
  }
}

export default styles;