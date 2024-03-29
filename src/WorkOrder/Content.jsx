// material-ui
// third-party
import { Text, View, StyleSheet } from '@react-pdf/renderer';
const textPrimary = '#262626';
const textSecondary = '#8C8C8C';
const border = '#F0F0F0';

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
    border: '1px solid black',
    borderRadius: '2px',
    padding: '20px',
    width: '48%'
  },

  title: {
    color: "black",
    fontSize: '10px',
  },

  caption: {
    color: "black",
    fontSize: '8px',
    
    padding: '2',
  },

  tableTitle: {
    color: "black",
    fontSize: '10px',
    border: '1px solid #d4d4d4',
    padding: '8',
    // backgroundColor:'#FFB74D',
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
    paddingBottom: 6
  },

  column: {
    flexDirection: 'column'
  },

  paragraph: {
    color: '#1F2937',
    fontSize: '10px'
  },

  tableHeader: {
    display: 'flex',
    margin: 0,
    paddingBottom: '0',
  },

  tableRow: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid #F0F0F0',
    paddingBottom: 3,
    paddingTop: 3,
    margin: 0,
    paddingLeft: 10
  },

  tableCell: {
    color: "black",
    fontSize: '8px',
    fontWeight: '400',
    padding: '5',
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
  },

  tittleLetter: {
    fontSize: '8px',
    padding: '5',
  },

  title3: {
    fontSize: '10px',
    fontFamily: "Roboto-Bold",
  },

  title2: {
    fontSize: '8px',
    paddingTop: '2',
  },

  padding1: {
    padding: '5px 0px 0px',
  },

  changes: {
    textAlign: 'center',
    padding: '3',
  },

  signature: {
    padding: '8px',
  },

  title4: {
    fontSize: '8px',
    lineHeight: '1.3',
  },

  title5: {
    fontSize: '8px',
    lineHeight: '1.3',
    paddingTop: '4px',
  },

  text_right: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
  },

  box: {
    border: '1px solid #d4d4d4',
    width: '100',
    height: '40',
  },

  signbox: {
    display: 'flex',
  },

  signbox1: {
    height: '60px',
    border: '1px solid #D4D4D4',
    textAlign: 'center',
    alignSelf: 'stretch',
    fontSize: '10',
    fontFamily: "Roboto-Bold",
  },

  tableContent: {
    color: "black",
    fontSize: '10',
    border: '1px solid #D4D4D4',
    padding: '5',
    lineHeight: '1.4',
    alignSelf: 'stretch'
  },

  fs8: {
    fontSize: '9',
  },

  tableRow1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0
  },

  tableflex1: {
    width: '100%',
  },

  tabwth1: {
    width: '100%',
    border: '1px solid #D4D4D4',
    fontSize: '9',
    padding: '4',
    lineHeight: '1.4',
  },

  tabwth25: {
    width: '50%',
    border: '1px solid #D4D4D4',
    fontSize: '8',
    padding: '4',
    lineHeight: '1.4',
  },

  tabwth75: {
    width: '100%',
    border: '1px solid #D4D4D4',
    fontSize: '8',
    padding: '4',
    lineHeight: '1.4',
  },

  fontwgt: {
    fontFamily: "Roboto-Bold",
  },

  hght: {
    height: '60px',
    alignSelf: 'stretch',
    padding: '5',
  },

  hght1: {
    height: '40px',
    alignSelf: 'stretch',
    padding: '5',
  },

  tab_right: {
    fontFamily: "Roboto-Bold",
  },

  pad5: {
    paddingTop: '40px',
  },

  pb5: { paddingBottom: 5 },
  
  flex03: { flex: '0.3 0 0px' },
  flex07: { flex: '0.7 0 0px' },
  flex06: { flex: '0.6 0 0px' },
  flex09: { flex: '0.9 0 0px' },
  flex10: { flex: '1.0 0 0px' },
  flex11: { flex: '1.1 0 0px' },
  flex12: { flex: '1.2 0 0px' },
  flex14: { flex: '1.4 0 0px' },
  flex17: { flex: '1.7 0 0px' },
  flex18: { flex: '1.8 0 0px' },
  flex20: { flex: '2 1 0px' },
  flex22: { flex: '2.2 0 0px' },
  flex25: { flex: '2.5 0 0px' },
  flex100: { flex: '10 0 0px' }
});
const Content = () => {

  return (
    <View style={styles.container}>

      <View style={[styles.backgroundColorGrand]}>
        <Text style={[styles.title3, styles.changes]}>PRODUCTION DETAILS</Text>
      </View>

      <View style={[styles.table]}>

        <View style={[styles.row, styles.tableRow1]}>
          <Text style={[styles.tableContent, styles.flex20]}>Product Description</Text>
          <Text style={[styles.tableContent, styles.flex20, styles.tab_right]}>Trendz T20 - Chute</Text>
          <Text style={[styles.tableContent, styles.flex20,]}>Delivery date</Text>
          <Text style={[styles.tableContent, styles.flex20, styles.tab_right]}>16/6/2022</Text>
        </View>

        <View style={[styles.row, styles.tableRow1]}>
          <Text style={[styles.tableContent, styles.flex20,]}>Req.Qty</Text>
          <Text style={[styles.tableContent, styles.flex20, styles.tab_right]}>1</Text>
          <Text style={[styles.tableContent, styles.flex20,]}>Commodity</Text>
          <Text style={[styles.tableContent, styles.flex20, styles.tab_right]}>Dall</Text>
        </View>

        <View style={[styles.row, styles.tableRow1]}>
          <Text style={[styles.tableContent, styles.flex06]}>MC Specification</Text>
          <Text style={[styles.tableContent, styles.flex20, styles.tab_right]}>Primary-1, Secondary-1. Old machine Exchange mark trendz M Series</Text>
        </View>

        <View style={[styles.row, styles.tableRow1]}>
          <Text style={[styles.tableContent, styles.flex06]}>MC Frame No</Text>
          <Text style={[styles.tableContent, styles.flex20, styles.tab_right]}>1</Text>
        </View>

        <View style={[styles.row, styles.tableRow1]}>
          <Text style={[styles.tableContent, styles.flex06]}>Warranty</Text>
          <Text style={[styles.tableContent, styles.flex20, styles.tab_right]}>One Year</Text>
        </View>

        <View style={[styles.row, styles.tableRow1]}>
          <Text style={[styles.tableContent, styles.flex06]}>Place</Text>
          <Text style={[styles.tableContent, styles.flex20, styles.tab_right]}>Theni</Text>
        </View>

        <View style={[styles.row, styles.tableRow1]}>
          <Text style={[styles.tableContent, styles.flex06]}>Executive Name</Text>
          <Text style={[styles.tableContent, styles.flex20, styles.tab_right]}>Ilayaraja.B</Text>
        </View>

      </View>

      <View style={[styles.backgroundColorGrand]}>
        <Text style={[styles.title3, styles.changes]}>CHANGES</Text>
      </View>


      <View style={[styles.table]}>

        <View style={[styles.row, styles.tableRow1]} >
          <Text style={[styles.tableContent, styles.flex07, styles.fontwgt]}>S.No</Text>
          <Text style={[styles.tableContent, styles.flex20, styles.fontwgt]}>Product Changes</Text>
          <Text style={[styles.tableContent, styles.flex20, styles.fontwgt]}>Customer Changes</Text>
        </View>

        <View style={[styles.row, styles.tableRow1]} >
          <Text style={[styles.tableContent, styles.flex07, styles.hght]}>1</Text>
          <Text style={[styles.tableContent, styles.flex20, styles.hght]}></Text>
          <Text style={[styles.tableContent, styles.flex20, styles.hght]}></Text>
        </View>

        <View style={[styles.row, styles.tableRow1]} >
          <Text style={[styles.tableContent, styles.flex07, styles.hght]}>2</Text>
          <Text style={[styles.tableContent, styles.flex20, styles.hght]}></Text>
          <Text style={[styles.tableContent, styles.flex20, styles.hght]}></Text>
        </View>

      </View>

      <View style={[styles.backgroundColorGrand]}>
        <Text style={[styles.title3, styles.changes]}>DISPATCH DETAILS</Text>
      </View>

      <View>

        <View style={[styles.tableRow1]} >
          <Text style={[styles.tableContent, styles.flex20, styles.hght]}></Text>
          <Text style={[styles.tableContent, styles.flex20, styles.hght]}></Text>
          <Text style={[styles.tableContent, styles.flex17, styles.hght]}></Text>
          <Text style={[styles.tableContent, styles.flex14, styles.hght]}></Text>
          <Text style={[styles.tableContent, styles.flex25, styles.hght]}></Text>
        </View>

        <View style={[styles.tableRow1]} >
          <Text style={[styles.tableContent, styles.flex20, styles.hght]}></Text>
          <Text style={[styles.tableContent, styles.flex20, styles.hght]}></Text>
          <Text style={[styles.tableContent, styles.flex17, styles.hght]}></Text>
          <Text style={[styles.tableContent, styles.flex14, styles.hght]}></Text>
          <Text style={[styles.tableContent, styles.flex25, styles.hght]}></Text>
        </View>

        <View style={[styles.tableRow1]} >
          <Text style={[styles.tableContent, styles.flex20, styles.hght]}></Text>
          <Text style={[styles.tableContent, styles.flex20, styles.hght]}></Text>
          <Text style={[styles.tableContent, styles.flex17, styles.hght]}></Text>
          <Text style={[styles.tableContent, styles.flex14, styles.hght]}></Text>
          <Text style={[styles.tableContent, styles.flex25, styles.hght]}></Text>
        </View>

      </View>


      <View style={[styles.row, styles.tableHeader]}>
        <Text style={[styles.tableTitle, styles.flex100, styles.hght1]}></Text>
      </View>


      <View>
        <View style={[styles.row, styles.signbox]}>
          <Text style={[styles.flex20, styles.signbox1, styles.pad5]}>Prepared By & Date</Text>
          <Text style={[styles.flex20, styles.signbox1, styles.pad5]}>Checked By & Date</Text>
          <Text style={[styles.flex20, styles.signbox1, styles.pad5]}>Approved By & Date</Text>
          <Text style={[styles.flex20, styles.signbox1, styles.pad5]}>Received By & Date</Text>
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