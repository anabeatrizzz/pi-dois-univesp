import backgroundImg from '../../assets/background-home.png';
import colors from '../../assets/colors';

const styles = {
  grid: {
    backgroundImage: `url(${backgroundImg})`,
    width: "100%",
    height: "100%",
  },

  card: {
    backgroundColor: 'rgba(144, 0, 255, 0.8)',
    display: 'flex',
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
    marginBottom: 30
  },

  title: {
    color: colors.green,
    fontWeight: 700,
    fontSize: 20,
    fontFamily: "Inter",
    textAlign: "center" as "center"
  },

  secondCardContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "row" as "row"
  },

  focusedSubtitle: {
    color: colors.red,
    fontWeight: 700,
    fontSize: 20,
    fontFamily: "Inter"
  },

  subtitle: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: 20,
    color: 'white'
  },

  cardContent: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: "column" as "column",
    //height: 500
  },

  divider: {
    backgroundColor: 'white',
    borderWidth: 2
  },

  gridItem: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default styles;