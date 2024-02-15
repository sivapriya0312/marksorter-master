// material-ui
// third-party
import { Text, View, Image, StyleSheet, } from '@react-pdf/renderer';
import logoImage from '../assets/images/logo.png';

import RobotoBold from '../assets/fonts/Roboto/Roboto-Bold.ttf';
import { Font } from '@react-pdf/renderer';


// assets
// import Logo from 'assets/images/image.png';
const textPrimary = '#262626';
const textSecondary = '#8C8C8C';

Font.register({ family: 'Roboto-Bold', src: RobotoBold });

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
    fontSize: '8px',
    fontFamily: "Roboto-Bold",
  },
  caption: {
    color: textSecondary,
    fontSize: '10px'
  },



  head1:{
    flexDirection: 'row',
    backgroundColor:'#FFB74D',
    justifyContent: 'center',
    width: '100%',
    padding:'5',
  },

  head2:{
    flexDirection: 'row',
    justifyContent: 'left',
    width: '100%',
    // marginTop: '6',
  },
  head3:{
    marginTop: '0',
  },

  border:{
    border: '1px solid #d4d4d4',
  },

  head2_con1: {
    width: '65%',
  },
  head2_con2: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  title:{
    fontSize: '10',
    fontFamily: "Roboto-Bold",
    padding: '3',

  },

  title1:{
    backgroundColor:'#FFB74D',
    fontFamily: "Roboto-Bold",
    fontSize: '8',
  },
  title2:{
    backgroundColor:'#FFB74D',
    fontFamily: "Roboto-Bold",
    fontSize: '8',
    padding: '3',
  },
  description:{
    fontSize: '8',
    fontWeight: '400',
    padding: '2',
    lineHeight:'1.4',
  },
  logoImages:{
    width: '180',
    height: '65',
  },

  tableflex:{
    flexDirection: 'row',
    display:'flex',
  },

  address:{
    fontFamily: "Roboto-Bold",
  },

  tab1:{
    border: '1px solid #d4d4d4',
    fontSize: '8',
    padding: '2',
    lineHeight:'1', 
    width:'100px',
    alignSelf: 'stretch',
    fontFamily: "Roboto-Bold",
  },
  tab2:{
    width:'200px',
    alignSelf: 'stretch',
    fontFamily: "Roboto-Bold",
  },
  description1:{
    fontSize: '8',
    padding: '3',
    // fontWeight:'bolder',
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
            <Text style={styles.title}>QUOTATION - MARK COLOR SORTER</Text>
        </View>

        
        <View style={[styles.head2, styles.border ]}>
            <View style={[styles.head2_con1]}>
              <Text style={[styles.title]}>PROMECH INDUSTRIES PRIVATE LIMITED</Text>
              <Text style={[styles.description, styles.paddingx]}>7/237 A, Pattanam to Peedampalli Main Road, Nagamanaickenpalayam,{'\n'} Coimbatore - 641016, Tamil Nadu, India.</Text>
              <Text style={[styles.description, styles.paddingx]}>Cell : +91 99943 99996 | +91 99943 99006  {'\n'} Email : promech5@yahoo.co.in | Web: www.marksorter.com </Text>
            </View>
            <View style={[styles.head2_con2]}>
                <Image src={logoImage} style={[styles.image, styles.logoImages]} />
            </View>
        </View>

        <View style={[styles.head2, styles.border]}>

            <View style={[styles.head2_con1]}>
              <Text style={[styles.title2]}>BILLING ADDRESS</Text>
              <Text style={[styles.description, styles.paddingx, styles.address]}>M/S ALVS VENTURES{'\n'}PATTAVAYAL, NELLAKOTTAI THE NILGIRIS,{'\n'}DINDUGAL -643240, TAMILNADU</Text>
              <Text style={[styles.description, styles.paddingx]}>Phone No : 9487345175      Email Id : alvsventures@gmail.com </Text>
            </View>

            <View style={[styles.table]}>
                <View style={[styles.tableflex]}>
                    <Text style={[styles.tab1]}>Quotation No.{'\n'}PMIPL/23-24/00120</Text>
                    <Text style={[styles.tab1]}>Dated{'\n'}02/05/2023</Text>
                </View>
                <View style={[styles.tableflex]}>
                    <Text style={[styles.tab1, styles.tab2 ]}>GSTIN{'\n'}33AAGCP3472Q1ZX</Text>
                </View>
                <View style={[styles.tableflex]}>
                    <Text style={[styles.tab1, styles.tab2 ]}>Place of Supply{'\n'}33 – Tamil Nadu</Text>
                </View>    
            </View>
        </View>

        <View style={[styles.head2, styles.border, styles.head3 ]}>
            <Text style={[styles.description1]}>We are placed to quote our best and competitive offer for Mark color sorter as specified under the terms and conditions given below.</Text>
        </View>
        
    </View>


  );
};

export default Header;