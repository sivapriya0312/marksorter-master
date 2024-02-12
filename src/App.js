import './App.css';
import { PDFViewer } from '@react-pdf/renderer';
import ExportPDFView from './Quotation/Index';
import ExportOrder from './WorkOrder/Index';

function App() {
  return (
    <div className='main1'>
      <PDFViewer width='100%' height='100%'>
        <ExportPDFView />
        {/* <ExportOrder/> */}
      </PDFViewer>
    </div>
  );
}

export default App;
