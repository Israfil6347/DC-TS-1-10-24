import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import { VoucherDetailsModel } from 'authenticated_pages/shared/model/data/VoucherDetailsModel';
import { logoIcon } from 'global_shared/data/base64Icons';
import {
  NumberToWords,
  capitalizeAllWords,
} from 'global_shared/utils/NumberToWords';
import { formatToBDTMoney } from 'global_shared/utils/textUtils';
import moment from 'moment';
const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 'auto',
    margin: 'auto',
    marginBottom: 3,
  },
  title: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleWords: {
    fontSize: 12,
    marginBottom: 5,
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  titleTeller: {
    fontSize: 10,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  titleDate: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  titleName: {
    fontSize: 11,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    fontSize: 11,
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
    fontSize: 8,
    fontWeight: 'bold',
    padding: 5,
  },
  tableRowCell: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#f0f0f0',
    paddingLeft: 5,
  },
  tableRowLastCell: {
    flex: 1,
    paddingLeft: 5,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginRight: 5,
    fontSize: 11,
    fontWeight: 'bold',
  },

  table: {
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableCol: {
    width: '60%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColLeft: {
    width: '20%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColRight: {
    width: '20%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10,
  },
  tableCellParticulars: {
    textAlign: 'left',
    marginLeft: 5,
    marginTop: 5,
    fontSize: 10,
  },
  tableCellRight: {
    textAlign: 'right',
    marginRight: 5,
    marginTop: 5,
    fontSize: 10,
  },
  tableCellParticular: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    fontSize: 10,
  },
  page: {
    flexDirection: 'column',
    position: 'relative',
    padding: '2cm',
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  content: {
    flex: 1,
    paddingBottom: '70px', // Adjust this value to leave space for the footer
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30px', // Adjust this value to set the footer height
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 10,
  },
  footerText: {
    marginTop: '10px', // Adjust this value to add spacing between the footer lines
  },
});

interface ReceiptPDFProps {
  message: VoucherDetailsModel[] | null;
}

const ReceiptPDF: React.FC<ReceiptPDFProps> = ({ message }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View>
            <View style={styles.logo}>
              <Image src={logoIcon} />
            </View>
            <Text style={styles.title}>
              The Christian Co-operative Credit Union Ltd., Dhaka
            </Text>
            <Text style={styles.subtitle}>E-Receipt</Text>
            <View style={styles.headerRow}>
              <Text>Scroll No: {message?.[0]?.ScrollNo}</Text>
              <Text>Voucher No: {message?.[0]?.VoucherNo.trim()}</Text>
            </View>
            <Text style={styles.titleName}>
              {capitalizeAllWords(message?.[0]?.FullName!)}
            </Text>
            <Text style={styles.titleDate}>
              {moment(message?.[0]?.TxnDate).format('DD-MMM-YYYY')}
            </Text>
          </View>

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColLeft}>
                <Text style={styles.tableCell}>Account No</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellParticulars}>Particulars</Text>
              </View>
              <View style={styles.tableColRight}>
                <Text style={styles.tableCellRight}>Amount</Text>
              </View>
            </View>

            {message?.map(
              (receipt, index) =>
                receipt?.CrAmount !== 0 && (
                  <View style={styles.tableRow}>
                    <View style={styles.tableColLeft}>
                      <Text style={styles.tableCell}>{receipt?.AccountNo}</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCellParticular}>
                        {receipt?.Particular}
                      </Text>
                    </View>
                    <View style={styles.tableColRight}>
                      <Text style={styles.tableCellRight}>
                        {' '}
                        {formatToBDTMoney(receipt?.CrAmount)}
                      </Text>
                    </View>
                  </View>
                )
            )}
          </View>

          <View>
            <View style={styles.totalRow}>
              <Text>Total: </Text>
              <Text>
                {formatToBDTMoney(message?.[message.length - 1]?.DrAmount!)}
              </Text>
            </View>

            <Text style={styles.titleWords}>
              {NumberToWords(message?.[message.length - 1]?.DrAmount!)}
            </Text>
            <Text style={styles.titleTeller}>
              Teller:{' '}
              {capitalizeAllWords(message?.[message.length - 1]?.Originator!)}
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text>Developed by "Dhaka Credit ICT Squad"</Text>
          <Text>
            "This is a computer generated receipt. No signature is required."
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default ReceiptPDF;
