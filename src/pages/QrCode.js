import React, {useContext, useState ,useEffect} from 'react';
import { Container, Card, CardContent, Grid, TextField, makeStyles, Button } from '@material-ui/core';
import axios from 'axios';
import QRCode from 'qrcode';
import { ShopContext } from '../context/shop-context';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 10
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#00897b',
    color: '#fff',
    padding: 20
  },
  btn: {
    marginTop: 10,
    marginBottom: 20
  }
}));

function QrCode() {
  const classes = useStyles();
  const [url, setUrl] = useState('');
  const [qrImage, setQrImage] = useState('');
  const [payeeAddress, setPayeeAddress] = useState('');
  const [payeeName, setPayeeName] = useState('');
  const [transactionNote, setTransactionNote] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [currencyCode, setCurrencyCode] = useState('');

  const {
    getTotalCartAmount,
  } = useContext(ShopContext);

  useEffect(() => {
    const fetchTotalAmount = async () => {
      try {
        // Fetch the updated total amount from the context
        const updatedTotal = getTotalCartAmount();
        const updatedGrandTotal = updatedTotal + 30;

        // Update the transaction amount in the state
        setTransactionAmount(updatedGrandTotal);
      } catch (error) {
        console.error("Error fetching total amount:", error);
      }
    };

    // Call the fetchTotalAmount function when the component mounts
    fetchTotalAmount();
  }, [getTotalCartAmount]);

  const upiPaymentApiUrl = "https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid={mid}&orderId={order-id}";

  const generateQrCode = async (e) => {
    e.preventDefault();

    const upiPaymentLink = `upi://pay?pa=${payeeAddress}&pn=${payeeName}&tn=${transactionNote}&am=${transactionAmount}&cu=${currencyCode}`;
    setUrl(upiPaymentLink);

    try {
      const response = await axios.post(upiPaymentApiUrl, { url: upiPaymentLink });

      if (response.data) {
        console.log(response.data);

        QRCode.toDataURL(upiPaymentLink, (err, dataUrl) => {
          if (err) {
            console.error("Error generating QR code:", err);
          } else {
            setQrImage(dataUrl);
          }
        });
      } else {
        console.error("Invalid response format");
      }
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  return (
    <div>
      <Container className={classes.container}>
        <Card>
          <h2 className={classes.title}>Generate & Download QR Code with React js</h2>
          <CardContent>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <TextField label="Payee Address" onChange={(e) => setPayeeAddress(e.target.value)} value={payeeAddress} />
              <br />
              <TextField label="Payee Name" onChange={(e) => setPayeeName(e.target.value)} value={payeeName} />
              <br />
              <TextField label="Transaction Note" onChange={(e) => setTransactionNote(e.target.value)} value={transactionNote} />
              <br />
              <TextField label="Transaction Amount"  value={transactionAmount} />
              <br />
              <TextField label="Currency Code" onChange={(e) => setCurrencyCode(e.target.value)} value={currencyCode} />
               <br />
              <Button className={classes.btn} variant="contained" color="primary" onClick={generateQrCode}>Generate QR code</Button>
              <br />
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              {
                url.length > 0 && qrImage ? (
                  <>
                    <img src={qrImage} alt="QR code for UPI payment" />
                    <p>Scan the QR code to access data!</p>
                  </>
                ) : (
                  <p>Generate a QR code to see the result</p>
                )
              }
            </Grid>
          </CardContent>
        </Card>
      </Container>
      <Link to='/dashboardd'>
        <p>Dashboard</p>
      </Link>
    </div>
  );
}

export default QrCode;
