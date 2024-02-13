// material-ui
// third-party
import { Text, View, Image, StyleSheet, } from '@react-pdf/renderer';
import logoImage from '../assets/images/logo.png';
// assets
// import Logo from 'assets/images/image.png';
const textPrimary = '#262626';
const textSecondary = '#8C8C8C';
const styles = StyleSheet.create({

  container: {
    flexDirection: 'row'
  },

  tableRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100vw',
  },
  detailColumn: {
    marginBottom: '10px',
    flexDirection: 'column',
    flexGrow: 2
  },
  chipTitle: {
    fontSize: '8px',
    padding: 4
  },

  mainContainer: {
    flexDirection: 'column',
    marginBottom: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  head1: {
    flexDirection: 'row',
    backgroundColor: '#FFB74D',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: textPrimary,
    fontSize: '8px'
  },
  caption: {
    color: textSecondary,
    fontSize: '10px'
  },
  padding1: {
    padding: '5px 5px 5px 5px',
  },
  flex03: { flex: '0.3 1 0px' },
  flex07: { flex: '0.7 1 0px' },
  flex06: { flex: '0.6 1 0px' },
  flex17: { flex: '1.7 1 0px' },
  flex20: { flex: '2 1 0px' },
  flex25: { flex: '2.5 1 0px' },
  flex100: { flex: '10 1 0px' },

  border: {
    border: '1px solid #d4d4d4',
  },

  title: {
    fontSize: '12',
    fontWeight: 'bold',
    padding: '3',
  },

  title1: {
    backgroundColor: '#FFB74D',
    fontSize: '8',
  },
  title2: {
    backgroundColor: '#FFB74D',
    fontSize: '10',
    padding: '3',
  },

  title3: {
    fontSize: '10',
    fontWeight: "heavy",
  },

  work_det:{
    alignItems:'center',
    justifyContent:'center',
  },

  work_row: {
    fontSize: '10',
    fontWeight: "500",
    paddingTop:'10px',
  },

  backgroundColorGrand: {
    backgroundColor: '#FFB74D',
    padding: '5',
    textAlign:'center',
  },

  description: {
    fontSize: '8',
    fontWeight: '400',
    padding: '0',
    lineHeight: '1.4',
  },

  tableflex: {
    flexDirection: 'row',
    display: 'flex',
  },

  description1: {
    fontSize: '8',
    padding: '2',
  },
  paddingx: {
    paddingHorizontal: '5',
  },
  paddingy: {
    paddingVertical: '5',
  },
  signbox: {
    display: 'flex',
  },
  signbox1: {
    height: '40px',
    border: '1px solid #D4D4D4',
    textAlign: 'left',
    alignSelf: 'flex-end',
    padding:'4',
  },

});

const Header = () => {
  return (



    <View style={styles.mainContainer}>

      <View style={[styles.tableRow, styles.head1]}>
        <Text style={styles.title}>PROMECH INDUSTRIES PVT LTD</Text>
      </View>



      <View>
        <View style={[styles.row, styles.signbox]}>
          <Text style={[styles.flex20, styles.signbox1, styles.work_row]}>Work Order {'\n'}P/WO/22-23/000043</Text>
          <Text style={[styles.flex20, styles.signbox1, styles.work_row]}>Work Order Form</Text>
          <Text style={[styles.flex20, styles.signbox1, styles.work_row]}>15-06-2023</Text>
        </View>
      </View>
  
        {/* <View style={[styles.backgroundColorGrand]}>
          <Text style={styles.title3}>PRODUCTION DETAILS</Text>
        </View> */}

    </View>


  );
};

export default Header;