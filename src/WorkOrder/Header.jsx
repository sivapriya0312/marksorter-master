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
    width:'100vw',
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
  chip: {
    alignItems: 'center',
    borderRadius: '4px',
    marginLeft: 52,
    marginRight: 4,
    marginBottom: 5
  },
  leftColumn: {
    flexDirection: 'column',
    width: 36,
    marginRight: 10,
    paddingLeft: 4,
    marginTop: 4
  },
  image: {
    width: 90,
    height: 28
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

  head1:{
    flexDirection: 'row',
    backgroundColor:'#FFB74D',
    justifyContent: 'center',
    width: '100%',
  },

  head2:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'stretch',
    width: '100%',
    textAlign: 'center',
  },
  head2_con:{
    borderLeft:'1px solid #d4d4d4',
    borderRight:'1px solid #d4d4d4',
    padding:'8',
  },
  head3:{
    marginTop: '0',
  },

  border:{
    border: '1px solid #d4d4d4',
  },

  title:{
    fontSize: '10',
    fontWeight: 'bold',
    padding: '3',
  },

  title1:{
    backgroundColor:'#FFB74D',
    fontSize: '8',
  },
  title2:{
    backgroundColor:'#FFB74D',
    fontSize: '8',
    padding: '3',
  },
  description:{
    fontSize: '8',
    fontWeight: '400',
    padding: '0',
    lineHeight:'1.4',
  },
  
  tableflex:{
    flexDirection: 'row',
    display:'flex',
  },

  tab1:{
    border: '1px solid #d4d4d4',
    fontSize: '8',
    padding: '2',
    lineHeight:'1', 
    width:'100px',
  },
  tab2:{
    width:'200px',
  },
  description1:{
    fontSize: '8',
    padding: '2',
  },
  paddingx:{
    paddingHorizontal:'5',     
  },
  paddingy:{
    paddingVertical:'5',     
  },

});

const Header = () => {
  return (

    

    <View style={styles.mainContainer}>

        <View style={[styles.tableRow, styles.head1]}>
            <Text style={styles.title}>PROMECH INDUSTRIES PVT LTD</Text>
        </View>

      <View style={[styles.row, styles.head2]}>
        <Text style={[styles.title, styles.head2_con, styles.flex06]}>Work Order{'\n'}P/WO/22-23/000043</Text>
        <Text style={[styles.title, styles.head2_con, styles.flex06]}>WORK ORDER FORM</Text>
        <Text style={[styles.title, styles.head2_con, styles.flex06]}>15-06-2024</Text>
      </View>
      

    </View>


  );
};

export default Header;