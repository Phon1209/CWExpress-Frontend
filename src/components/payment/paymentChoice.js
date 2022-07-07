import axios from "axios";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";

const qrcode = (amount) => {
  console.log("Creating QR for ", amount);
};

// For testing purpose only
const instant = (amount) => {
  console.log("calling for ", amount);
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
