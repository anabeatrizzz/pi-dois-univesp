import colors from '../../assets/colors';

const styles = {
  header: {
    display: 'flex',
    zIndex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    //boxSizing: "border-box",
    background: "linear-gradient(180deg, #8B00FF 43.23%, #622099 99.98%, #622099 99.99%)",
    border: "1px solid #000000",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    //paddingRight: 90
  },

  navDiv: {
    marginLeft: "auto"
  },

  navDivExpanded: {

  },

  sacText: {
    fontWeight: 900,
    fontSize: '16px',
    lineHeight: '29px'
  },

  button: {
    backgroundColor: colors.mostarda,
    borderRadius: 50,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 20
  },

  nav: {
    display: 'block',
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 50
  },

  socialMediaDiv: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row" as "row"
  },

  fbIcon: {
    marginRight: 5
  },

  navLink: {
    textDecoration: 'none'
  },

  liExpanded: {
    fontSize: 20,
    marginBottom: 10
  },

  ul: {
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    alignItems: "center"
  },

  ulResponsive: {
    display: 'none',
    
    // justifyContent: 'space-between',
    // listStyle: 'none',
    // alignItems: "center"
  },

  ulExpanded: {
    display: "block",
    listStyle: 'none',
    position: "absolute" as "absolute",
    top: "60px",
    left: 0,
    flexDirection: "column" as "column",
    width: "100%",
    height: "calc(100vh - 77px)",
    backgroundColor: colors.purple
  },

  li: {
    color: 'white',
    marginTop: 0,
    marginRight: 15,
    justifyContent: 'space-between',
    fontWeight: 700,
    fontSize: 13,
    fontFamily: "Inter"
  },

  focusedLi: {
    color: colors.mostarda
  },

  liResponsive: {
    textAlign: "center" as "center",
    margin: 0
  },

  link: {
    display: 'flex',
    textDecoration: 'none'
  },

  linkResponsive: {
    display: 'block',
    textDecoration: 'none',
    justifyContent: "center",
    alignItems: "center",
    selfAlign: "center"
  }
}

export default styles