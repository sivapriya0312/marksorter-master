
// third-party
import { Page, View, Document, StyleSheet } from '@react-pdf/renderer';
// project import
import Header from './Header';
import Content from './Content';
const styles = StyleSheet.create({
  page: {
    padding: 10
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column'
    }
  }
});
const ExportPDFView = () => {

  return (
    <Document title={`quotation`}>
      <Page size="A4" style={styles.page}>
        <Header  />
        <View style={styles.container}>
          <Content  />
        </View>
      </Page>
    </Document>
  );
};

export default ExportPDFView;