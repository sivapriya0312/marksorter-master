// material-ui
// third-party
import { Image, Text, View, StyleSheet } from '@react-pdf/renderer';
import RobotoBold from '../assets/fonts/Roboto/Roboto-Bold.ttf';
import { Font } from '@react-pdf/renderer';

// Font.register({
//   family: 'Roboto',
//   fonts: [
//     { src: Roboto_400Regular, fontWeight: 'normal' },
//     { src: Roboto_700Bold, fontWeight: 'bold' },
//   ],
// });

const textPrimary = '#262626';
const textSecondary = '#8C8C8C';
const border = '#F0F0F0';
Font.register({ family: 'Roboto-Bold', src: RobotoBold });

// custom Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    '@media max-width: 400': {
      paddingTop: 10,
      paddingLeft: 0
    }
  },

  card: {
    border: `1px solid black`,
    borderRadius: '2px',
    padding: '20px',
    width: '48%'
  },
  title: {
    color: "black",
    fontSize: '10px',
    fontFamily: "Roboto-Bold",
  },
  caption: {
    color: "black",
    fontSize: '8px',
    padding: '2',
  },

  text: {
    fontFamily: 'Roboto', // Apply Roboto font family
    fontSize: 12,
    fontWeight: 'bold',
  },

  tableTitle: {
    color: "black",
    fontSize: '8px',
    fontWeight: '400',
    border: '1px solid #d4d4d4',
    padding: '5',
    fontFamily: "Roboto-Bold",
    backgroundColor: '#FFB74D',
  },
  tableCell: {
    color: "black",
    fontSize: '8px'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  subRow: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 0,
    paddingBottom: 5
  },
  column: {
    flexDirection: 'column'
  },
  paragraph: {
    color: '#1F2937',
    fontSize: '10px'
  },
  tableHeader: {
    justifyContent: 'space-between',
    margin: 0,
    paddingLeft: 0
  },

  tableRow: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderBottom: '1px solid #F0F0F0',
    paddingBottom: 3,
    paddingTop: 3,
    margin: 0,
    paddingLeft: 10
  },

  tableCell: {
    color: "black",
    fontSize: '8px',
    fontWeight: '400',
    padding: '2',
  },

  bnk_det: {
    flexDirection: 'row',
    display: 'flex',
    width: '100%',
  },
  bnk_det_tab1: {
    width: '70%',
  },
  bnk_det_tab2: {
    width: '30%',
  },
  border: {
    border: '1px solid #d4d4d4',
  },
  backgroundColorGrand: {
    backgroundColor: '#FFB74D',
    padding: '5',
    fontFamily: "Roboto-Bold",
  },
  tittleLetter: {
    fontSize: '8px',
    padding: '5',
    fontFamily: "Roboto-Bold",
  },
  title3: {
    fontSize: '8px',
    fontWeight: "heavy",
  },
  title2: {
    fontSize: '8px',
    paddingTop: '2',
    fontFamily: "Roboto-Bold",
  },
  padding1: {
    padding: '5px 0px 0px',
  },

  signature: {
    padding: '5px 5px',
    flexDirection: 'row',
    display: 'flex',
  },

  signature1: {
    width: '50%',

  },
  title4: {
    fontSize: '8px',
    lineHeight: '1.3',
    fontFamily: "Roboto-Bold",
  },
  title5: {
    fontSize: '8px',
    lineHeight: '1.3',
    paddingTop: '4px',
    fontFamily: "Roboto-Bold",
  },
  text_right: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
  },
  box: {
    // border: '1px solid #d4d4d4',
    width: '100',
    height: '30',
  },

  hght1: {
    height: '30px',
  },
  tableContent: {
    color: "black",
    fontSize: '8px',
    border: '1px solid #D4D4D4',
    padding: '3',
    lineHeight: '1.4',
    alignSelf: 'stretch'
  },

  tableRow1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    display: 'flex',
  },

  tableleft:{
    fontFamily: "Roboto-Bold",
  },

  amountSection: { margin: 0, paddingRight: 25, paddingTop: 5, justifyContent: 'normal', width: '196', },
  amountRow: { margin: 0, width: '100%', justifyContent: 'flex-end', },
  pb5: { paddingBottom: 5 },
  flex03: { flex: '0.3 1 0px' },
  flex07: { flex: '0.7 1 0px' },
  flex06: { flex: '0.6 1 0px' },
  flex17: { flex: '1.7 1 0px' },
  flex20: { flex: '2 1 0px' },
  flex25: { flex: '2.5 1 0px' },
  flex100: { flex: '10 1 0px' }
});

const Content = () => {

  return (
    <View style={styles.container}>

      {/* <View style={[styles.row, styles.subRow]}>
        <View style={styles.card}>
          <Text style={[styles.title, { marginBottom: 8 }]}>From:</Text>
          <Text style={[styles.caption, styles.pb5]}>Kavin</Text>
          <Text style={[styles.caption, styles.pb5]}>23,Trichy</Text>
          <Text style={[styles.caption, styles.pb5]}>8976436544</Text>
          <Text style={[styles.caption, styles.pb5]}>kavin@gmail.com</Text>
        </View>
        <View style={styles.card}>
          <Text style={[styles.title, { marginBottom: 8 }]}>From:</Text>
          <Text style={[styles.caption, styles.pb5]}>Kavin1</Text>
          <Text style={[styles.caption, styles.pb5]}>23,Trichy1</Text>
          <Text style={[styles.caption, styles.pb5]}>8976436544</Text>
          <Text style={[styles.caption, styles.pb5]}>kavin@gmail.com</Text>
        </View>
      </View>
 */}


      {/* <View style={styles1.section}>
        <Text style={styles1.text}>Regular Text</Text> // Regular font weight
        <Text style={[styles1.text, { fontWeight: 'bold' }]}>Bold Text</Text> // Bold font weight
      </View> */}

      <View>
        <View style={[styles.row, styles.tableHeader]}>
          <Text style={[styles.tableTitle, styles.flex03]}>S.No</Text>
          <Text style={[styles.tableTitle, styles.flex20]}>DESCRIPTION</Text>
          <Text style={[styles.tableTitle, styles.flex06]}>HSN</Text>
          <Text style={[styles.tableTitle, styles.flex07]}>QTY</Text>
          <Text style={[styles.tableTitle, styles.flex07]}>PRICE</Text>
          <Text style={[styles.tableTitle, styles.flex07]}>AMOUNT</Text>
        </View>

        <View style={[styles.row, styles.tableRow1]} >
          <Text style={[styles.tableContent, styles.flex03]}>1</Text>
          <Text style={[styles.tableContent, styles.flex20]}>Machine for Sorting used in Milling Industry Spices  Model Mini sorter Commonder -1 CHUTE- 1F-32G-1CT-MX-P-1MS</Text>
          <Text style={[styles.tableContent, styles.flex06]}>84371000</Text>
          <Text style={[styles.tableContent, styles.flex07]}>1</Text>
          <Text style={[styles.tableContent, styles.flex07]}>700000.00</Text>
          <Text style={[styles.tableContent, styles.flex07]}>700000.00</Text>
        </View>

        <View style={[styles.row, styles.tableRow1]} >
          <Text style={[styles.tableContent, styles.flex03]}>2</Text>
          <Text style={[styles.tableContent, styles.flex20]}>Machine for Sorting used in Milling Industry Spices  Model Mini sorter Commonder</Text>
          <Text style={[styles.tableContent, styles.flex06]}>84371000</Text>
          <Text style={[styles.tableContent, styles.flex07]}>1</Text>
          <Text style={[styles.tableContent, styles.flex07]}>700000.00</Text>
          <Text style={[styles.tableContent, styles.flex07]}>700000.00</Text>
        </View>

      </View>

      <View style={[styles.bnk_det]}>


        <View style={[styles.bnk_det_tab1]}>

          <View style={[styles.row, styles.tableHeader]}>
            <Text style={[styles.tableTitle, styles.flex100]}>BANK DETAILS </Text>
          </View>

          <View style={[styles.row, styles.tableRow]} >
            <Text style={[styles.tableCell, styles.flex03, styles.tableleft]}>Bank Name</Text>
            <Text style={[styles.tableCell, styles.flex07]}>HDFC Bank Ltd, CLASSIC TOWER,TRICHY ROAD,COIMBATORE-641018</Text>
          </View>

          <View style={[styles.row, styles.tableRow]} >
            <Text style={[styles.tableCell, styles.flex03, styles.tableleft]}>Account Number </Text>
            <Text style={[styles.tableCell, styles.flex07]}>00312320005743</Text>
          </View>

          <View style={[styles.row, styles.tableRow]} >
            <Text style={[styles.tableCell, styles.flex03, styles.tableleft]}>Account Name</Text>
            <Text style={[styles.tableCell, styles.flex07]}>PROMECH INDUSTRIES PVT LTD</Text>
          </View>

          <View style={[styles.row, styles.tableRow]} >
            <Text style={[styles.tableCell, styles.flex03, styles.tableleft]}>IFSC Code</Text>
            <Text style={[styles.tableCell, styles.flex07]}>HDFC0000031</Text>
          </View>

          <View style={[styles.border, styles.width]}>
            <Text style={styles.tittleLetter}>INR - Ten Lakh Ninety Seven Thousand Four Hundred Only /-</Text>
          </View>

        </View>

        <View style={[styles.bnk_det_tab2, styles.border]}>

          <View style={[styles.row, styles.amountSection]}>
            <View style={[styles.row, styles.amountRow]}>
              <Text style={[styles.tableCell, styles.flex07]}>Gross Amount : </Text>
              <Text style={[styles.tableCell, styles.flex03]}> 930000.00</Text>
            </View>
          </View>
          <View style={[styles.row, styles.amountSection]}>
            <View style={[styles.row, styles.amountRow]}>
              <Text style={[styles.tableCell, styles.flex07]}>CGST ( 9.00 %) :</Text>
              <Text style={[styles.tableCell, styles.flex03]}> 83700.00</Text>
            </View>
          </View>
          <View style={[styles.row, styles.amountSection]}>
            <View style={[styles.row, styles.amountRow]}>
              <Text style={[styles.tableCell, styles.flex07]}>SGST ( 9.00 %) :</Text>
              <Text style={[styles.tableCell, styles.flex03]}> 83700.00</Text>
            </View>
          </View>
          <View style={[styles.row, styles.amountSection]}>
            <View style={[styles.row, styles.amountRow]}>
              <Text style={[styles.tableCell, styles.flex07]}>IGST ( 0.00 %) :</Text>
              <Text style={[styles.tableCell, styles.flex03]}> 0.00</Text>
            </View>
          </View>
          <View style={[styles.row, styles.amountSection]}>
            <View style={[styles.row, styles.amountRow]}>
              <Text style={[styles.tableCell, styles.flex07]}>Round Off :</Text>
              <Text style={[styles.tableCell, styles.flex03]}> 0.00</Text>
            </View>
          </View>
          <View style={[styles.row, styles.amountSection, { marginTop: 2 }]}>
            <View style={[styles.row, styles.amountRow, styles.backgroundColorGrand]}>
              <Text style={[styles.tableCell, styles.flex07]}>Grand Total:</Text>
              <Text style={[styles.tableCell, styles.flex03]}> 4325353</Text>
            </View>
          </View>

        </View>

      </View>

      <View style={[styles.terms_condition]}>

        <View style={[styles.tableRow, styles.backgroundColorGrand]}>
          <Text style={styles.title3}>TERMS AND CONDITIONS</Text>
        </View>
        <Text style={[styles.title2, styles.padding1]}>SPECIFICATIONS :</Text>

        <View style={[styles.row, styles.tableRow]} >
          <Text style={[styles.tableCell, styles.flex03]}>1. No of Camera :</Text>
          <Text style={[styles.tableCell, styles.flex07]}>2 Nos. (1 front side, 1 rear side)</Text>
        </View>
        <View style={[styles.row, styles.tableRow]} >
          <Text style={[styles.tableCell, styles.flex03]}>2. Camera Type :</Text>
          <Text style={[styles.tableCell, styles.flex07]}>5400 x 3 pixel Trichromatic CCD color camera double side view</Text>
        </View>
        <View style={[styles.row, styles.tableRow]} >
          <Text style={[styles.tableCell, styles.flex03]}>3. Commodity :</Text>
          <Text style={[styles.tableCell, styles.flex07]}>Pepper</Text>
        </View>
        <View style={[styles.row, styles.tableRow]} >
          <Text style={[styles.tableCell, styles.flex03]}>4. No of Channels :</Text>
          <Text style={[styles.tableCell, styles.flex07]}>32/32</Text>
        </View>
        <View style={[styles.row, styles.tableRow]} >
          <Text style={[styles.tableCell, styles.flex03]}>5. Chute Distribution :</Text>
          <Text style={[styles.tableCell, styles.flex07]}>Primary-1</Text>
        </View>

        <Text style={[styles.title2, styles.padding1]}>TERMS & CONDITIONS :</Text>

        <View style={[styles.row, styles.tableRow]} >
          <Text style={[styles.tableCell, styles.flex03]}>1. Payment :</Text>
          <Text style={[styles.tableCell, styles.flex07]}>100% In advance against order</Text>
        </View>
        <View style={[styles.row, styles.tableRow]} >
          <Text style={[styles.tableCell, styles.flex03]}>2. Delivery :</Text>
          <Text style={[styles.tableCell, styles.flex07]}>30 Days from the Date of Order</Text>
        </View>
        <View style={[styles.row, styles.tableRow]} >
          <Text style={[styles.tableCell, styles.flex03]}>3. Packing and Forwarding :</Text>
          <Text style={[styles.tableCell, styles.flex07]}>Extra</Text>
        </View>
        <View style={[styles.row, styles.tableRow]} >
          <Text style={[styles.tableCell, styles.flex03]}>4. Insurance :</Text>
          <Text style={[styles.tableCell, styles.flex07]}>At Customer End</Text>
        </View>
        <View style={[styles.row, styles.tableRow]} >
          <Text style={[styles.tableCell, styles.flex03]}>5. Erection Charges :</Text>
          <Text style={[styles.tableCell, styles.flex07]}>Rs.1000/- day Boarding & Loading Extra</Text>
        </View>
        <View style={[styles.row, styles.tableRow]} >
          <Text style={[styles.tableCell, styles.flex03]}>6. Warranty :</Text>
          <Text style={[styles.tableCell, styles.flex07]}>One Year Against and Manufacturing defects</Text>
        </View>
        <View style={[styles.row, styles.tableRow]} >
          <Text style={[styles.tableCell, styles.flex03]}>7. Validity :</Text>
          <Text style={[styles.tableCell, styles.flex07]}>30 Days</Text>
        </View>
        <View style={[styles.row, styles.tableRow]} >
          <Text style={[styles.tableCell, styles.flex03]}>8. Erection & Commissioning :</Text>
          <Text style={[styles.tableCell, styles.flex07]}>The Price Quoted forthe Color Sorter and Air Compressor only. Elevator, Air Conditioner, Cabin
            StorageHopper, Dust Collecting System and others are Customer's Scope.</Text>
        </View>
        <View style={[styles.row, styles.tableRow]} >
          <Text style={[styles.tableCell, styles.flex03]}>9. Tonnage :</Text>
          <Text style={[styles.tableCell, styles.flex07]}>100 to 200 Kgs, per hour @ 1-2 % impurity contamination, if contamination increased the output will bedecreased. The Capacity of the machine based on the working environment like dust condition,cabin Temperature condition, etc...
          </Text>
        </View>

      </View>

      <View style={[styles.signature, styles.border]}>

        <View style={[styles.signature1]} >
          <Text style={styles.title4}>Please make the Cheque in Favour of</Text>
          <Text style={styles.title4}>PROMECH INDUSTRIES PRIVATE LIMITED</Text>
        </View>

        <View style={[styles.signature2, styles.text_right]} >
          <Text style={styles.title4}>For PROMECH INDUSTRIES PRIVATE LIMITED</Text>
          <Text style={styles.box}></Text>
          <Text style={styles.title5}>Athorized Signatory</Text>
        </View>

      </View>



      {/* <View style={[styles.row, { alignItems: 'flex-start', marginTop: 20, width: '95%' }]}>
        <Text style={styles.caption}>Notes </Text>
        <Text style={styles.tableCell}>
          {' '}
          It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!
        </Text>
      </View> */}

    </View>
  );
};

export default Content;