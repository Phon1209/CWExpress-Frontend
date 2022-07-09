import axios from "axios";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";

const qrcode = (amount) => {
  console.log("Creating QR for ", amount);

  const data = JSON.stringify({
    amount: 20,
  });

  const config = {
    method: "post",
    url: `${process.env.REACT_APP_CWEX_URL}/cwex/v1/pay/scb/qr`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(response.data.qrImage);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// For testing purpose only
const instant = (amount) => {
  console.log("calling for ", amount);

  const data = JSON.stringify({
    payeeAccountNumber: "0987654321",
    sendingBankCode: "014",
    receivingBankCode: "014",
    amount,
    transactionId: "202206277DO8PAsjKUDl4EL",
    transactionDateandTime: "2022-07-16T11:30:58+07:00",
    billPaymentRef1: "XB4X18UBJFR8NV1H9FOY",
    billPaymentRef2: "EIW7KRBR26V2N7NUUO5R",
    billPaymentRef3: "CWEX",
    currencyCode: "764",
    bypass: true,
  });

  const config = {
    method: "post",
    url: `${process.env.REACT_APP_CWEX_URL}/cwex/v1/pay/scb/confirm`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
const nothing = (log) => console.log(log);

const paymentChoice = [
  {
    name: "QRCode",
    icon: <MdOutlineQrCodeScanner />,
    action: qrcode,
  },
  {
    name: "Instant",
    icon: <BiMailSend />,
    action: instant,
  },
  {
    name: "Test1",
    icon: <MdOutlineQrCodeScanner />,
    action: nothing,
  },
  {
    name: "Test2",
    icon: <MdOutlineQrCodeScanner />,
    action: nothing,
  },
  {
    name: "Test3",
    icon: <MdOutlineQrCodeScanner />,
    action: nothing,
  },
  {
    name: "Test4",
    icon: <MdOutlineQrCodeScanner />,
    action: nothing,
  },
];

export default paymentChoice;
