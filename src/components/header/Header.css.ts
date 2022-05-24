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

  ul: {
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    alignItems: "center"
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
    color: colors.mostarda,
    marginTop: 0,
    marginRight: 15,
    justifyContent: 'space-between',
    fontWeight: 700,
    fontSize: 13,
    fontFamily: "Inter"
  },

  link: {
    display: 'flex',
    textDecoration: 'none'
  },
}

export default styles