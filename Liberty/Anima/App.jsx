
import { css } from "styled-components";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import MyVehicles from "./components/MyVehicles";
import MyVehicles2 from "./components/MyVehicles2";
import MyVehicles3 from "./components/MyVehicles3";
import MyVehiclesAccountInArrears from "./components/MyVehiclesAccountInArrears";
import MyVehicles4 from "./components/MyVehicles4";
import Frame from "./components/Frame";
import Artboard from "./components/Artboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/my-vehicles-3">
          <MyVehicles {...myVehiclesData} />
        </Route>
        <Route path="/my-vehicles">
          <MyVehicles2 {...myVehicles2Data} />
        </Route>
        <Route path="/my-vehicles2">
          <MyVehicles3 {...myVehicles3Data} />
        </Route>
        <Route path="/my-vehicles-account-in-arrears">
          <MyVehiclesAccountInArrears {...myVehiclesAccountInArrearsData} />
        </Route>
        <Route path="/my-vehicles3">
          <MyVehicles4 {...myVehicles4Data} />
        </Route>
        <Route path="/frame">
          <Frame {...frameData} />
        </Route>
        <Route path="/my-vehicles-open-1">
          <MyVehiclesOpen />
        </Route>
        <Route path="/:path(|my-vehicles-open)">
          <MyVehiclesOpen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const group11662Data = {
    className: "group-1182",
};

const myVehiclesData = {
    copyright2018Pix: "Logo",
    summary: "SUMMARY",
    myVehicles1: "MY VEHICLES",
    transactions: "TRANSACTIONS",
    abcIndustries: "ABC Industries",
    faqs: "FAQ’S",
    place: "CONTACT",
    myVehicles2: "My Vehicles",
    totalAmountDueDue: <React.Fragment>Total Amount Due<br />Due Date<br />Account Status</React.Fragment>,
    r1301339331March2022: <React.Fragment>R130,133.93<br />31 March 2022</React.Fragment>,
    address1: "30 Days Overdue",
    text3: "!",
    numberOfVehiclesTotalFleetValue: <React.Fragment>Number of Vehicles<br />Total Fleet Value</React.Fragment>,
    address2: <React.Fragment>15 Vehicles<br />R4,324,348.00</React.Fragment>,
    searchBy: "Search by",
    contractNumber: "Contract number",
    exportToCsv: "Export to .CSV",
    select: "Select",
    contractApproachingMaturity: "Contract approaching maturity",
    vehicleOverContract: "Vehicle over contract",
    vehicleOverKms: "Vehicle over km’s",
    accountInArrears: "Account in arrears",
    contractNo: "Contract No",
    vehicle: "Vehicle",
    registration: "Registration",
    amountRemaining: <React.Fragment>Amount<br />Remaining</React.Fragment>,
    paymentDue: "Payment Due",
    alert1: "Alert",
    number: "1005569",
    fusoCanterLiftFk13240: "Fuso Canter LIFT FK13-240",
    ab01326Gp: "AB01326GP",
    price1: "R16,564.20",
    price2: "R8,282.10",
    text2: "!",
    alert2: "Alert",
    phone: "8669770",
    o500U1826Euro5Auto: "O 500 U 1826 Euro 5 Auto",
    c34J2Yf44Gp: "C34J2YF44GP",
    price3: "R725,386.86",
    price4: "R20,386.81",
    text1: "!",
    alert3: "Alert",
    text: "Clear Filter",
    theNewModelX: "The New Model X",
    convallisPulvinarN: "Convallis pulvinar netus purus placerat ipsum tortor. Malesuada egestas urna varius est rutrum eget nisl aliquet. Mi, venenatis felis, tortor feugiat cras ut diam vel.",
    specialPromotion: "Special promotion",
    text4: "Contact me",
    wwwMercedesBenzBusCom: "www.mercedes-benz-bus.com",
    group1166Props: group11662Data,
};

const group11663Data = {
    className: "group-1174",
};

const group11664Data = {
    className: "group-1176",
};

const group11665Data = {
    className: "group-1177",
};

const group11666Data = {
    className: "group-1181",
};

const group11667Data = {
    className: "group-1182-1",
};

const group11668Data = {
    className: "group-1186",
};

const group11669Data = {
    className: "group-1187",
};

const group116610Data = {
    className: "group-1190",
};

const group116611Data = {
    className: "group-1191",
};

const group116612Data = {
    className: "group-1195",
};

const group116613Data = {
    className: "group-1196",
};

const group116614Data = {
    className: "group-1199",
};

const group116615Data = {
    className: "group-1200",
};

const group116616Data = {
    className: "group-1204",
};

const group116617Data = {
    className: "group-1205",
};

const group12282Data = {
    className: "group-1232",
};

const group12312Data = {
    className: "group-1233",
};

const group12731Data = {
    group1228Props: group12282Data,
    group1231Props: group12312Data,
};

const myVehicles2Data = {
    copyright2018Pix: "Logo",
    summary: "SUMMARY",
    myVehicles1: "MY VEHICLES",
    transactions: "TRANSACTIONS",
    abcIndustries: "ABC Industries",
    faqs: "FAQ’S",
    place: "CONTACT",
    myVehicles2: "My Vehicles",
    totalAmountDueDue: <React.Fragment>Total Amount Due<br />Due Date<br />Account Status</React.Fragment>,
    r1301339331March2022: <React.Fragment>R130,133.93<br />31 March 2022</React.Fragment>,
    address1: "30 Days Overdue",
    text11: "!",
    numberOfVehiclesTotalFleetValue: <React.Fragment>Number of Vehicles<br />Total Fleet Value</React.Fragment>,
    address2: <React.Fragment>15 Vehicles<br />R4,324,348.00</React.Fragment>,
    searchBy: "Search by",
    select: "Select",
    contractApproachingMaturity: "Contract approaching maturity",
    vehicleOverKms: "Vehicle over km’s",
    vehicleOverContract: "Vehicle over contract",
    accountInArrears: "Account in arrears",
    exportToCsv: "Export to .CSV",
    contractNumber: "Contract number",
    chassisNumberVehicleType: <React.Fragment>Chassis number<br />Vehicle type</React.Fragment>,
    contractNo: "Contract No",
    vehicle: "Vehicle",
    registration: "Registration",
    amountRemaining: <React.Fragment>Amount<br />Remaining</React.Fragment>,
    paymentDue: "Payment Due",
    alert1: "Alert",
    phone1: "866977",
    fusoCanterLiftFa9137: "Fuso Canter LIFT FA9-137",
    number1: "904347",
    argosy90Ddc1271670: "Argosy 90 DDC 12.7-1670",
    phone2: "967189",
    address3: "4900 Wrecker",
    number2: "1005569",
    of917Euro3Manual1: "OF 917 Euro 3 Manual",
    phone3: "8669770",
    o500U1826Euro5Auto1: "O 500 U 1826 Euro 5 Auto",
    phone4: "8661238",
    o500U1826Euro5Auto2: "O 500 U 1826 Euro 5 Auto",
    phone5: "8662545",
    o500U1826Euro5Auto3: "O 500 U 1826 Euro 5 Auto",
    phone6: "7678510",
    o500U1826Euro5Auto4: "O 500 U 1826 Euro 5 Auto",
    phone7: "7678510",
    bmw7SeriesSedan: "BMW 7 Series Sedan",
    phone8: "7678510",
    oh2436RfEuro3Auto1: "OH 2436 RF Euro 3 Auto",
    phone9: "5748932",
    oh2436RfEuro3Auto2: "OH 2436 RF Euro 3 Auto",
    alert2: "Alert",
    text4: "!",
    alert3: "Alert",
    alert4: "Alert",
    alert5: "Alert",
    alert6: "Alert",
    text5: "!",
    text6: "!",
    text7: "!",
    text8: "!",
    alert7: "Alert",
    text9: "!",
    phone10: "5745742",
    of917Euro3Manual2: "OF 917 Euro 3 Manual",
    phone11: "5748241",
    of917Euro3Manual3: "OF 917 Euro 3 Manual",
    phone12: "5748241",
    of917Euro3Manual4: "OF 917 Euro 3 Manual",
    number3: "1234567",
    of917Euro3Manual5: "OF 917 Euro 3 Manual",
    ab01326Gp1: "AB01326GP",
    ap1Bc87Gp: "AP1BC87GP",
    fljey0132Gp: "FLJEY0132GP",
    ap1Bc877Gp: "AP1BC877GP",
    dhfhao1Gp: "DHFHAO1GP",
    ks873Mfhgp: "KS873MFHGP",
    sndhs225Gp: "SNDHS225GP",
    d0F5Jkf54Gp: "D0F5JKF54GP",
    fmj785123Gp: "FMJ785123GP",
    fmj7812Gp: "FMJ7812GP",
    f11256522Gp: "F11256522GP",
    dkf137426Gp: "DKF137426GP",
    fm2125441Gp: "FM2125441GP",
    h0971702Gp: "H0971702GP",
    c34J2Yf44Gp: "C34J2YF44GP",
    price1: "R725,386.86",
    price2: "R658,643.69",
    price3: "R725,386.86",
    price4: "R658,643.69",
    price5: "R258,643.69",
    price6: "R25,643.05",
    price7: "R658,643.69",
    price8: "R658,643.69",
    price9: "R658,643.69",
    price10: "R658,643.69",
    price11: "R658,643.69",
    price12: "R158,643.69",
    price13: "R658,643.69",
    price14: "R568,768.75",
    price15: "R1,967,570.19",
    price16: "R20,386.81",
    number4: "1005569",
    fusoCanterLiftFk13240: "Fuso Canter LIFT FK13-240",
    ab01326Gp2: "AB01326GP",
    price17: "R16,564.20",
    price18: "R8,282.10",
    text10: "!",
    alert8: "Alert",
    price19: "R15,211.81",
    price20: "R20,386.81",
    price21: "R20,386.81",
    price22: "R20,386.81",
    price23: "R8,282.10",
    price24: "R23,574.22",
    price25: "R8,282.10",
    price26: "R8,282.10",
    price27: "R8,282.10",
    price28: "R15,211.81",
    price29: "R20,386.81",
    price30: "R8,282.10",
    price31: "R23,574.22",
    price32: "R8,282.10",
    theNewModelX: "The New Model X",
    convallisPulvinarN: "Convallis pulvinar netus purus placerat ipsum tortor. Malesuada egestas urna varius est rutrum eget nisl aliquet. Mi, venenatis felis, tortor feugiat cras ut diam vel.",
    specialPromotion: "Special promotion",
    text: "Contact me",
    wwwMercedesBenzBusCom: "www.mercedes-benz-bus.com",
    group11661Props: group11663Data,
    group11662Props: group11664Data,
    group11663Props: group11665Data,
    group11664Props: group11666Data,
    group11665Props: group11667Data,
    group11666Props: group11668Data,
    group11667Props: group11669Data,
    group11668Props: group116610Data,
    group11669Props: group116611Data,
    group116610Props: group116612Data,
    group116611Props: group116613Data,
    group116612Props: group116614Data,
    group116613Props: group116615Data,
    group116614Props: group116616Data,
    group116615Props: group116617Data,
    group1273Props: group12731Data,
};

const group116619Data = {
    className: "group-1166-2",
};

const group116620Data = {
    className: "group-1174-1",
};

const group116621Data = {
    className: "group-1176-1",
};

const group116622Data = {
    className: "group-1177-1",
};

const group116623Data = {
    className: "group-1181-1",
};

const group116624Data = {
    className: "group-1182-2",
};

const group116625Data = {
    className: "group-1186-1",
};

const group116626Data = {
    className: "group-1187-1",
};

const group116627Data = {
    className: "group-1190-1",
};

const group116628Data = {
    className: "group-1191-1",
};

const group116629Data = {
    className: "group-1195-1",
};

const group116630Data = {
    className: "group-1196-1",
};

const group116631Data = {
    className: "group-1199-1",
};

const group116632Data = {
    className: "group-1200-1",
};

const group116633Data = {
    className: "group-1204-1",
};

const group116634Data = {
    className: "group-1205-1",
};

const group12284Data = {
    className: "group-1232-1",
};

const group12314Data = {
    className: "group-1233-1",
};

const group12732Data = {
    className: "group-1273-1",
    group1228Props: group12284Data,
    group1231Props: group12314Data,
};

const myVehicles3Data = {
    select: "Select",
    contractApproachingMaturity: "Contract approaching maturity",
    vehicleOverContract: "Vehicle over contract",
    vehicleOverKms: "Vehicle over km’s",
    accountInArrears: "Account in arrears",
    searchBy: "Search by",
    contractNumber: "Contract number",
    exportToCsv: "Export to .CSV",
    phone1: "866977",
    fusoCanterLiftFa9137: "Fuso Canter LIFT FA9-137",
    number1: "904347",
    argosy90Ddc1271670: "Argosy 90 DDC 12.7-1670",
    phone2: "967189",
    address1: "4900 Wrecker",
    number2: "1005569",
    of917Euro3Manual1: "OF 917 Euro 3 Manual",
    phone3: "8669770",
    o500U1826Euro5Auto1: "O 500 U 1826 Euro 5 Auto",
    phone4: "8661238",
    o500U1826Euro5Auto2: "O 500 U 1826 Euro 5 Auto",
    phone5: "8662545",
    o500U1826Euro5Auto3: "O 500 U 1826 Euro 5 Auto",
    phone6: "7678510",
    o500U1826Euro5Auto4: "O 500 U 1826 Euro 5 Auto",
    phone7: "7678510",
    bmw7SeriesSedan: "BMW 7 Series Sedan",
    phone8: "7678510",
    oh2436RfEuro3Auto1: "OH 2436 RF Euro 3 Auto",
    phone9: "5748932",
    oh2436RfEuro3Auto2: "OH 2436 RF Euro 3 Auto",
    fusoCanterLiftFk132401: "Fuso Canter LIFT FK13-240",
    alert1: "Alert",
    text12: "!",
    alert2: "Alert",
    text13: "!",
    alert3: "Alert",
    alert4: "Alert",
    alert5: "Alert",
    alert6: "Alert",
    text14: "!",
    text15: "!",
    text16: "!",
    text17: "!",
    alert7: "Alert",
    text18: "!",
    number3: "1005569",
    phone10: "5745742",
    of917Euro3Manual2: "OF 917 Euro 3 Manual",
    phone11: "5748241",
    of917Euro3Manual3: "OF 917 Euro 3 Manual",
    phone12: "5748241",
    of917Euro3Manual4: "OF 917 Euro 3 Manual",
    number4: "1234567",
    of917Euro3Manual5: "OF 917 Euro 3 Manual",
    ab01326Gp1: "AB01326GP",
    ab01326Gp2: "AB01326GP",
    ap1Bc87Gp: "AP1BC87GP",
    fljey0132Gp: "FLJEY0132GP",
    ap1Bc877Gp: "AP1BC877GP",
    dhfhao1Gp: "DHFHAO1GP",
    ks873Mfhgp: "KS873MFHGP",
    sndhs225Gp: "SNDHS225GP",
    d0F5Jkf54Gp: "D0F5JKF54GP",
    fmj785123Gp: "FMJ785123GP",
    fmj7812Gp: "FMJ7812GP",
    f11256522Gp: "F11256522GP",
    dkf137426Gp: "DKF137426GP",
    fm2125441Gp: "FM2125441GP",
    h0971702Gp: "H0971702GP",
    c34J2Yf44Gp: "C34J2YF44GP",
    price1: "R725,386.86",
    price2: "R16,564.20",
    price3: "R658,643.69",
    price4: "R725,386.86",
    price5: "R658,643.69",
    price6: "R258,643.69",
    price7: "R25,643.05",
    price8: "R658,643.69",
    price9: "R658,643.69",
    price10: "R658,643.69",
    price11: "R658,643.69",
    price12: "R658,643.69",
    price13: "R158,643.69",
    price14: "R658,643.69",
    price15: "R568,768.75",
    price16: "R1,967,570.19",
    price17: "R20,386.81",
    price18: "R8,282.10",
    price19: "R15,211.81",
    price20: "R20,386.81",
    price21: "R20,386.81",
    price22: "R20,386.81",
    price23: "R8,282.10",
    price24: "R23,574.22",
    price25: "R8,282.10",
    price26: "R8,282.10",
    price27: "R8,282.10",
    price28: "R15,211.81",
    amountRemaining: <React.Fragment>Amount<br />Remaining</React.Fragment>,
    price29: "R20,386.81",
    price30: "R8,282.10",
    price31: "R23,574.22",
    price32: "R8,282.10",
    vehicle: "Vehicle",
    contractNo: "Contract No",
    registration: "Registration",
    paymentDue: "Payment Due",
    alert8: "Alert",
    r1301339331March2022: <React.Fragment>R130,133.93<br />31 March 2022</React.Fragment>,
    address2: "30 Days Overdue",
    text19: "!",
    totalAmountDueDue: <React.Fragment>Total Amount Due<br />Due Date<br />Account Status</React.Fragment>,
    address3: <React.Fragment>15 Vehicles<br />R4,324,348.00</React.Fragment>,
    numberOfVehiclesTotalFleetValue: <React.Fragment>Number of Vehicles<br />Total Fleet Value</React.Fragment>,
    fusoCanterLiftFk132402: "Fuso Canter LIFT FK13-240",
    contractNumber1005569: "Contract Number 1005569",
    r828210R1656420: <React.Fragment>R8,282.10<br />R16.564.20<br />R725,386.86<br />Arrears</React.Fragment>,
    text21: "!",
    paymentDueThisMon: <React.Fragment>Payment due this month:<br />Total amount outstanding:<br />Total amount paid to date:<br />Account status:</React.Fragment>,
    contractDetails: "Contract Details",
    vehicleDetails: "Vehicle Details",
    theGlossaryOfTele1: "Paid to date",
    theGlossaryOfTele2: "Amount Paid",
    theGlossaryOfTele3: "Balance outstanding",
    theGlossaryOfTele4: "R725,386.86",
    theGlossaryOfTele5: " R16,564.20",
    theGlossaryOfTele6: "48 month Contract",
    theGlossaryOfTele7: "45 months concluded",
    theGlossaryOfTele8: "3 months remaining",
    contractStartCont: <React.Fragment>Contract start: <br />Contract end: <br />Vehicle return:<br />Principal debt:<br />Contract term:<br />Outstanding term:<br />Guaranteed future value:<br />Interest rate:<br />Payment date:<br />Financial product:<br />Payment due (excl arrears):<br />Arrears / Overdue<br />Arrears / Overpayment</React.Fragment>,
    address4: <React.Fragment>1 May 2018<br />1 May 2022<br />1 April 2022<br />R750,000.00<br />48 Months<br />2 Months<br />R600,000.00<br />7.06%<br />31 March 2022<br />Contract Purchase<br />R16,564.20<br />R0.00<br />R0.00</React.Fragment>,
    vehicleMileageMax: <React.Fragment>Vehicle Mileage: <br />Maximum annual distance: <br />Maximum contract distance: <br />Excess distance charge: <br />Engine number: <br />Chassis number:<br />Registration number:<br />Date of last service:</React.Fragment>,
    address5: <React.Fragment>58 485km<br />48 000km<br />240 000km<br />?<br />6M60239211<br />ABJFK62FLJEY01326<br />CY182428 <br />2020/12/12</React.Fragment>,
    copyright2018Pix: "Logo",
    summary: "SUMMARY",
    myVehicles1: "MY VEHICLES",
    transactions: "TRANSACTIONS",
    abcIndustries: "ABC Industries",
    faqs: "FAQ’S",
    place: "CONTACT",
    alert9: "Alert",
    yourContractIsApproachingMaturity: "Your contract is approaching maturity",
    text1: "View",
    alert10: "Alert",
    yourContractIsInArrears: "Your contract is in arrears",
    text2: "View",
    documents: "Documents",
    text3: "",
    surname: "Cross Border Clearance Document",
    settlementQuotation: "Settlement Quotation",
    amortisationSchedule: "Amortisation Schedule",
    balanceCertificate: "Balance Certificate",
    text4: "Request",
    wwwMercedesBenzBusCom: "www.mercedes-benz-bus.com",
    theNewModelX: "The New Model X",
    convallisPulvinarN: "Convallis pulvinar netus purus placerat ipsum tortor. Malesuada egestas urna varius est rutrum eget nisl aliquet. Mi, venenatis felis, tortor feugiat cras ut diam vel.",
    specialPromotion: "Special promotion",
    text5: "Contact me",
    address6: "1 May 2022",
    contractEndOutsta: <React.Fragment>Contract end: <br />Outstanding term:<br />Vehicle mileage:</React.Fragment>,
    address7: "3 Months",
    text20: "!",
    spanText1: "58 485km ",
    spanText2: "(Distance exceeded)",
    myVehicles2: "My Vehicles",
    group11661Props: group116619Data,
    group11662Props: group116620Data,
    group11663Props: group116621Data,
    group11664Props: group116622Data,
    group11665Props: group116623Data,
    group11666Props: group116624Data,
    group11667Props: group116625Data,
    group11668Props: group116626Data,
    group11669Props: group116627Data,
    group116610Props: group116628Data,
    group116611Props: group116629Data,
    group116612Props: group116630Data,
    group116613Props: group116631Data,
    group116614Props: group116632Data,
    group116615Props: group116633Data,
    group116616Props: group116634Data,
    group1273Props: group12732Data,
};

const group116635Data = {
    className: "group-1166-3",
};

const myVehiclesAccountInArrearsData = {
    copyright2018Pix: "Logo",
    summary: "SUMMARY",
    myVehicles1: "MY VEHICLES",
    transactions: "TRANSACTIONS",
    abcIndustries: "ABC Industries",
    faqs: "FAQ’S",
    place: "CONTACT",
    myVehicles2: "My Vehicles",
    totalAmountDueDue: <React.Fragment>Total Amount Due<br />Due Date<br />Account Status</React.Fragment>,
    r1301339331March2022: <React.Fragment>R130,133.93<br />31 March 2022</React.Fragment>,
    address1: "30 Days Overdue",
    text23: "!",
    numberOfVehiclesTotalFleetValue: <React.Fragment>Number of Vehicles<br />Total Fleet Value</React.Fragment>,
    address2: <React.Fragment>15 Vehicles<br />R4,324,348.00</React.Fragment>,
    searchBy: "Search by",
    contractNumber: "Contract number",
    exportToCsv: "Export to .CSV",
    select: "Select",
    contractApproachingMaturity: "Contract approaching maturity",
    vehicleOverContract: "Vehicle over contract",
    vehicleOverKms: "Vehicle over km’s",
    accountInArrears: "Account in arrears",
    contractNo: "Contract No",
    vehicle: "Vehicle",
    registration: "Registration",
    amountRemaining: <React.Fragment>Amount<br />Remaining</React.Fragment>,
    paymentDue: "Payment Due",
    alert1: "Alert",
    fusoCanterLiftFk13240: "Fuso Canter LIFT FK13-240",
    alert2: "Alert",
    text22: "!",
    number: "1005569",
    ab01326Gp: "AB01326GP",
    price1: "R16,564.20",
    price2: "R8,282.10",
    text1: "Clear Filter",
    theNewModelX: "The New Model X",
    convallisPulvinarN: "Convallis pulvinar netus purus placerat ipsum tortor. Malesuada egestas urna varius est rutrum eget nisl aliquet. Mi, venenatis felis, tortor feugiat cras ut diam vel.",
    specialPromotion: "Special promotion",
    text2: "Contact me",
    wwwMercedesBenzBusCom: "www.mercedes-benz-bus.com",
    group1166Props: group116635Data,
};

const group116636Data = {
    className: "group-1174-2",
};

const group116637Data = {
    className: "group-1176-2",
};

const group116638Data = {
    className: "group-1177-2",
};

const group116639Data = {
    className: "group-1181-2",
};

const group116640Data = {
    className: "group-1182-3",
};

const group116641Data = {
    className: "group-1186-2",
};

const group116642Data = {
    className: "group-1187-2",
};

const group116643Data = {
    className: "group-1190-2",
};

const group116644Data = {
    className: "group-1191-2",
};

const group116645Data = {
    className: "group-1195-2",
};

const group116646Data = {
    className: "group-1196-2",
};

const group116647Data = {
    className: "group-1199-2",
};

const group116648Data = {
    className: "group-1200-2",
};

const group116649Data = {
    className: "group-1204-2",
};

const group116650Data = {
    className: "group-1205-2",
};

const group12286Data = {
    className: "group-1232-2",
};

const group12316Data = {
    className: "group-1233-2",
};

const group12733Data = {
    className: "group-1273-2",
    group1228Props: group12286Data,
    group1231Props: group12316Data,
};

const myVehicles4Data = {
    copyright2018Pix: "Logo",
    summary: "SUMMARY",
    myVehicles1: "MY VEHICLES",
    transactions: "TRANSACTIONS",
    abcIndustries: "ABC Industries",
    faqs: "FAQ’S",
    place: "CONTACT",
    myVehicles2: "My Vehicles",
    totalAmountDueDue: <React.Fragment>Total Amount Due<br />Due Date<br />Account Status</React.Fragment>,
    r1301339331March2022: <React.Fragment>R130,133.93<br />31 March 2022</React.Fragment>,
    address1: "30 Days Overdue",
    text30: "!",
    numberOfVehiclesTotalFleetValue: <React.Fragment>Number of Vehicles<br />Total Fleet Value</React.Fragment>,
    address2: <React.Fragment>15 Vehicles<br />R4,324,348.00</React.Fragment>,
    searchBy: "Search by",
    contractNumber: "Contract number",
    exportToCsv: "Export to .CSV",
    select: "Select",
    contractApproachingMaturity: "Contract approaching maturity",
    vehicleOverContract: "Vehicle over contract",
    vehicleOverKms: "Vehicle over km’s",
    accountInArrears: "Account in arrears",
    contractNo: "Contract No",
    vehicle: "Vehicle",
    registration: "Registration",
    amountRemaining: <React.Fragment>Amount<br />Remaining</React.Fragment>,
    paymentDue: "Payment Due",
    alert1: "Alert",
    phone1: "866977",
    fusoCanterLiftFa9137: "Fuso Canter LIFT FA9-137",
    number1: "904347",
    argosy90Ddc1271670: "Argosy 90 DDC 12.7-1670",
    phone2: "967189",
    address3: "4900 Wrecker",
    number2: "1005569",
    of917Euro3Manual1: "OF 917 Euro 3 Manual",
    phone3: "8669770",
    o500U1826Euro5Auto1: "O 500 U 1826 Euro 5 Auto",
    phone4: "8661238",
    o500U1826Euro5Auto2: "O 500 U 1826 Euro 5 Auto",
    phone5: "8662545",
    o500U1826Euro5Auto3: "O 500 U 1826 Euro 5 Auto",
    phone6: "7678510",
    o500U1826Euro5Auto4: "O 500 U 1826 Euro 5 Auto",
    phone7: "7678510",
    bmw7SeriesSedan: "BMW 7 Series Sedan",
    phone8: "7678510",
    oh2436RfEuro3Auto1: "OH 2436 RF Euro 3 Auto",
    phone9: "5748932",
    oh2436RfEuro3Auto2: "OH 2436 RF Euro 3 Auto",
    alert2: "Alert",
    text24: "!",
    alert3: "Alert",
    alert4: "Alert",
    alert5: "Alert",
    alert6: "Alert",
    text25: "!",
    text26: "!",
    text27: "!",
    text28: "!",
    alert7: "Alert",
    text29: "!",
    phone10: "5745742",
    of917Euro3Manual2: "OF 917 Euro 3 Manual",
    phone11: "5748241",
    of917Euro3Manual3: "OF 917 Euro 3 Manual",
    phone12: "5748241",
    of917Euro3Manual4: "OF 917 Euro 3 Manual",
    number3: "1234567",
    of917Euro3Manual5: "OF 917 Euro 3 Manual",
    ab01326Gp1: "AB01326GP",
    ap1Bc87Gp: "AP1BC87GP",
    fljey0132Gp: "FLJEY0132GP",
    ap1Bc877Gp: "AP1BC877GP",
    dhfhao1Gp: "DHFHAO1GP",
    ks873Mfhgp: "KS873MFHGP",
    sndhs225Gp: "SNDHS225GP",
    d0F5Jkf54Gp: "D0F5JKF54GP",
    fmj785123Gp: "FMJ785123GP",
    fmj7812Gp: "FMJ7812GP",
    f11256522Gp: "F11256522GP",
    dkf137426Gp: "DKF137426GP",
    fm2125441Gp: "FM2125441GP",
    h0971702Gp: "H0971702GP",
    c34J2Yf44Gp: "C34J2YF44GP",
    price1: "R725,386.86",
    price2: "R658,643.69",
    price3: "R725,386.86",
    price4: "R658,643.69",
    price5: "R258,643.69",
    price6: "R25,643.05",
    price7: "R658,643.69",
    price8: "R658,643.69",
    price9: "R658,643.69",
    price10: "R658,643.69",
    price11: "R658,643.69",
    price12: "R158,643.69",
    price13: "R658,643.69",
    price14: "R568,768.75",
    price15: "R1,967,570.19",
    price16: "R20,386.81",
    price17: "R15,211.81",
    price18: "R20,386.81",
    price19: "R20,386.81",
    price20: "R20,386.81",
    price21: "R8,282.10",
    price22: "R23,574.22",
    price23: "R8,282.10",
    price24: "R8,282.10",
    price25: "R8,282.10",
    price26: "R15,211.81",
    price27: "R20,386.81",
    price28: "R8,282.10",
    price29: "R23,574.22",
    price30: "R8,282.10",
    number4: "1005569",
    fusoCanterLiftFk13240: "Fuso Canter LIFT FK13-240",
    ab01326Gp2: "AB01326GP",
    price31: "R16,564.20",
    price32: "R8,282.10",
    text31: "!",
    alert8: "Alert",
    theNewModelX: "The New Model X",
    convallisPulvinarN: "Convallis pulvinar netus purus placerat ipsum tortor. Malesuada egestas urna varius est rutrum eget nisl aliquet. Mi, venenatis felis, tortor feugiat cras ut diam vel.",
    specialPromotion: "Special promotion",
    text: "Contact me",
    wwwMercedesBenzBusCom: "www.mercedes-benz-bus.com",
    group11661Props: group116636Data,
    group11662Props: group116637Data,
    group11663Props: group116638Data,
    group11664Props: group116639Data,
    group11665Props: group116640Data,
    group11666Props: group116641Data,
    group11667Props: group116642Data,
    group11668Props: group116643Data,
    group11669Props: group116644Data,
    group116610Props: group116645Data,
    group116611Props: group116646Data,
    group116612Props: group116647Data,
    group116613Props: group116648Data,
    group116614Props: group116649Data,
    group116615Props: group116650Data,
    group1273Props: group12733Data,
};

const frame31Data = {
    children: "2021 Claims Statistics",
};

const frame21Data = {
    frame3Props: frame31Data,
};

const frame32Data = {
    children: "Invested Together",
};

const frame42Data = {
    className: "frame-160",
};

const frame61Data = {
    noMatterWhatYour: "No matter what you’re saving for, we’re invested together in your goals.",
    frame4Props: frame42Data,
};

const frame51Data = {
    frame3Props: frame32Data,
    frame6Props: frame61Data,
};

const frame33Data = {
    children: "Employee Benefits Solutions",
};

const frame43Data = {
    className: "frame-161",
};

const frame62Data = {
    noMatterWhatYour: "We take care of your employees' financial wellbeing. Because people are the heart of our business and yours.",
    frame4Props: frame43Data,
};

const frame52Data = {
    className: "frame-169",
    frame3Props: frame33Data,
    frame6Props: frame62Data,
};

const frame34Data = {
    children: "LAUNCH YOUR LIFE GOALS",
};

const frame44Data = {
    className: "frame-162",
};

const frame63Data = {
    noMatterWhatYour: "Your life goals are waiting, ready to be launched into the great, big, wonderful world.",
    frame4Props: frame44Data,
};

const frame53Data = {
    className: "frame-170",
    frame3Props: frame34Data,
    frame6Props: frame63Data,
};

const frame35Data = {
    children: "Going Global, Together.",
};

const frame45Data = {
    className: "",
};

const frame64Data = {
    noMatterWhatYour: "Get access to a world of investment opportunities with our offshore solutions.",
    className: "frame-173",
    frame4Props: frame45Data,
};

const frame81Data = {
    frame3Props: frame35Data,
    frame6Props: frame64Data,
};

const frame36Data = {
    children: "2021 Claims Statistics",
};

const frame22Data = {
    className: "frame-154",
    frame3Props: frame36Data,
};

const frame37Data = {
    children: "Invested Together",
};

const frame47Data = {
    className: "",
};

const frame65Data = {
    noMatterWhatYour: "No matter what you’re saving for, we’re invested together in your goals.",
    className: "frame-174",
    frame4Props: frame47Data,
};

const frame82Data = {
    className: "frame-190",
    frame3Props: frame37Data,
    frame6Props: frame65Data,
};

const frame38Data = {
    children: "Employee Benefits Solutions",
};

const frame48Data = {
    className: "",
};

const frame66Data = {
    noMatterWhatYour: "We take care of your employees' financial wellbeing. Because people are the heart of our business and yours.",
    className: "frame-175",
    frame4Props: frame48Data,
};

const frame83Data = {
    className: "frame-191",
    frame3Props: frame38Data,
    frame6Props: frame66Data,
};

const frame39Data = {
    children: "LAUNCH YOUR LIFE GOALS",
};

const frame49Data = {
    className: "",
};

const frame67Data = {
    noMatterWhatYour: "Your life goals are waiting, ready to be launched into the great, big, wonderful world.",
    className: "frame-176",
    frame4Props: frame49Data,
};

const frame84Data = {
    className: "frame-192",
    frame3Props: frame39Data,
    frame6Props: frame67Data,
};

const frame72Data = {
    className: "frame-185",
};

const frame310Data = {
    children: "Going Global, Together.",
};

const frame410Data = {
    className: "",
};

const frame68Data = {
    noMatterWhatYour: "Get access to a world of investment opportunities with our offshore solutions.",
    className: "frame-177",
    frame4Props: frame410Data,
};

const frame85Data = {
    className: "frame-193",
    frame3Props: frame310Data,
    frame6Props: frame68Data,
};

const frame92Data = {
    className: "frame-195",
};

const frame101Data = {
    children: "",
};

const frame102Data = {
    children: "",
    className: "frame-200",
};

const frame111Data = {
    disabilityCover: "Disability Cover",
    becomingTemporarily: "Becoming temporarily or permanently disabled can cause financial strain on you and your family. We can help you adjust financially, by paying out a lump sum should you become disabled.",
};

const frame112Data = {
    disabilityCover: "Critical Illness Cover",
    becomingTemporarily: "A critical illness can place emotional strain on you and your loved ones. Critical illness cover provides financial support when you're seriously ill.",
    className: "frame-202",
};

const frame141Data = {
    shortTermInsurance: "Short-Term Insurance",
    libertySComprehens: "Liberty's comprehensive range of Short-Term Insurance solutions keeps your possessions covered so that when the unexpected happens, you can continue living.",
};

const frame131Data = {
    frame14Props: frame141Data,
};

const frame142Data = {
    shortTermInsurance: "Online Solutions",
    libertySComprehens: "Apply online now for disability, life, income or critical illness cover.",
    className: "frame-208",
};

const frame151Data = {
    rectangle1: "/img/rectangle-4@2x.png",
    frame14Props: frame142Data,
};

const frame143Data = {
    shortTermInsurance: "Life Protection",
    libertySComprehens: "Have you taken steps to secure your loved ones' financial future after you're gone? If not, isn't it time you thought about doing so?",
    className: "frame-209",
};

const frame152Data = {
    rectangle1: "/img/rectangle-6@2x.png",
    frame14Props: frame143Data,
};

const frame144Data = {
    shortTermInsurance: "Disability Cover",
    libertySComprehens: "Becoming temporarily or permanently disabled can cause financial strain on you and your family. We can help you adjust financially, by paying out a lump sum should you become disabled.",
    className: "frame-210",
};

const frame153Data = {
    rectangle1: "/img/rectangle-8@2x.png",
    frame14Props: frame144Data,
};

const frame145Data = {
    shortTermInsurance: "Critical Illness Cover",
    libertySComprehens: "A critical illness can place emotional strain on you and your loved ones. Critical illness cover provides financial support when you're seriously ill.",
};

const frame132Data = {
    frame14Props: frame145Data,
};

const frame146Data = {
    shortTermInsurance: "Short-Term Insurance",
    libertySComprehens: "Liberty's comprehensive range of Short-Term Insurance solutions keeps your possessions covered so that when the unexpected happens, you can continue living.",
};

const frame133Data = {
    frame14Props: frame146Data,
};

const frame147Data = {
    shortTermInsurance: "Online Solutions",
    libertySComprehens: "Apply online now for disability, life, income or critical illness cover.",
    className: "frame-212",
};

const frame148Data = {
    shortTermInsurance: "Life Protection",
    libertySComprehens: "Have you taken steps to secure your loved ones' financial future after you're gone? If not, isn't it time you thought about doing so?",
    className: "frame-213",
};

const frame149Data = {
    shortTermInsurance: "Disability Cover",
    libertySComprehens: "Becoming temporarily or permanently disabled can cause financial strain on you and your family. We can help you adjust financially, by paying out a lump sum should you become disabled.",
    className: "frame-214",
};

const frame97Data = {
    className: "frame-196",
};

const frame161Data = {
    frame9Props: frame97Data,
};

const frame171Data = {
    investmentSolutions: "Investment Solutions",
    theLibertyInvestme: "The Liberty Investment Proposition for institutional clients is outcome focussed and customer centric.",
};

const frame172Data = {
    investmentSolutions: "Group Risk Solutions",
    theLibertyInvestme: "Business owners can purchase these benefits for their employees, either as part of a retirement fund or individually.",
};

const frame191Data = {
    consultingAndActuarialSolutions: "Consulting and Actuarial Solutions",
    atLibertyCorporate: "At Liberty Corporate we help employers look after their employees to enable them to keep their eye on the bottom line.",
};

const frame181Data = {
    frame19Props: frame191Data,
};

const frame192Data = {
    consultingAndActuarialSolutions: "Umbrella Fund Solutions",
    atLibertyCorporate: "At Liberty Corporate we help employers look after their employees to enable them to keep their eye on the bottom line.",
};

const frame201Data = {
    rectangle: "/img/rectangle-18@2x.png",
    frame19Props: frame192Data,
};

const frame193Data = {
    consultingAndActuarialSolutions: "Investment Solutions",
    atLibertyCorporate: "The Liberty Investment Proposition for institutional clients is outcome focussed and customer centric.",
};

const frame202Data = {
    rectangle: "/img/rectangle-19@2x.png",
    frame19Props: frame193Data,
};

const frame194Data = {
    consultingAndActuarialSolutions: "Group Risk Solutions",
    atLibertyCorporate: "Business owners can purchase these benefits for their employees, either as part of a retirement fund or individually.",
};

const frame203Data = {
    rectangle: "/img/rectangle-20@2x.png",
    frame19Props: frame194Data,
};

const frame195Data = {
    consultingAndActuarialSolutions: "Consulting and Actuarial Solutions",
    atLibertyCorporate: "At Liberty Corporate we help employers look after their employees to enable them to keep their eye on the bottom line.",
};

const frame182Data = {
    frame19Props: frame195Data,
};

const frame196Data = {
    consultingAndActuarialSolutions: "Umbrella Fund Solutions",
    atLibertyCorporate: "At Liberty Corporate we help employers look after their employees to enable them to keep their eye on the bottom line.",
};

const frame197Data = {
    consultingAndActuarialSolutions: "Investment Solutions",
    atLibertyCorporate: "The Liberty Investment Proposition for institutional clients is outcome focussed and customer centric.",
};

const frame198Data = {
    consultingAndActuarialSolutions: "Group Risk Solutions",
    atLibertyCorporate: "Business owners can purchase these benefits for their employees, either as part of a retirement fund or individually.",
};

const frame99Data = {
    className: "frame-197",
};

const frame162Data = {
    frame9Props: frame99Data,
};

const frame222Data = {
    children: "#DriveHope",
};

const frame211Data = {
    frame22Props: frame222Data,
};

const frame223Data = {
    children: "2021 Claims Stats",
};

const frame212Data = {
    className: "frame-235",
    frame22Props: frame223Data,
};

const frame224Data = {
    children: "Get your tax certificate via WhatsApp",
};

const frame231Data = {
    frame22Props: frame224Data,
};

const frame225Data = {
    children: "#DriveHope",
};

const frame213Data = {
    className: "frame-236",
    frame22Props: frame225Data,
};

const frame226Data = {
    children: "2021 Claims Stats",
};

const frame214Data = {
    className: "frame-237",
    frame22Props: frame226Data,
};

const frame227Data = {
    children: "Get your tax certificate via WhatsApp",
};

const frame232Data = {
    className: "frame-255",
    frame22Props: frame227Data,
};

const frame228Data = {
    children: "#DriveHope",
};

const frame215Data = {
    className: "frame-238",
    frame22Props: frame228Data,
};

const frame912Data = {
    className: "frame-198",
};

const frame241Data = {
    children: "Name and Surname *",
};

const frame242Data = {
    children: "Email address *",
    className: "frame-257",
};

const frame243Data = {
    children: "Contact number *",
    className: "frame-258",
};

const frame244Data = {
    children: "ID number",
    className: "frame-259",
};

const frame261Data = {
    criticalIllnessCover: "Critical Illness Cover",
    disabilityCover: "Disability Cover",
    funeralCover: "Funeral Cover",
    incomeProtection: "Income Protection",
    lifeProtection: "Life Protection",
    medicalCover: "Medical Cover",
    onlineSolutions: "Online Solutions",
    shortTermInsurance: "Short-Term Insurance",
};

const frame251Data = {
    personalInsure: "Personal Insure",
    frame26Props: frame261Data,
};

const frame262Data = {
    criticalIllnessCover: "Umbrella Fund Solutions",
    disabilityCover: "Investment Solutions",
    funeralCover: "Group Risk Solutions",
    incomeProtection: "Consulting and Actuarial Solutions",
    lifeProtection: "Solutions for Entrepreneurs",
    medicalCover: "Business Assurance",
    onlineSolutions: "Unclaimed Benefits",
    shortTermInsurance: "Member Information",
};

const frame252Data = {
    personalInsure: "Business",
    className: "frame-261",
    frame26Props: frame262Data,
};

const margin31Data = {
    children: "Get in Touch",
};

const frame263Data = {
    criticalIllnessCover: "Contact us",
    disabilityCover: "How to Claim",
    funeralCover: "Find a Form",
    incomeProtection: "Fund Fact Sheets",
    lifeProtection: "Talk to an Adviser",
    medicalCover: "Find a Financial Adviser",
    onlineSolutions: "Tools & Calculators",
    shortTermInsurance: "Frequently Asked Questions",
};

const frame253Data = {
    personalInsure: "Helpful Resources",
    className: "frame-262",
    frame26Props: frame263Data,
};

const frame264Data = {
    criticalIllnessCover: "MyLiberty Self-Service",
    disabilityCover: "Direct from Liberty",
    funeralCover: "Liberty Short-Term Insurance",
    incomeProtection: "STANLIB",
    lifeProtection: "Liberty Health",
    medicalCover: "Liberty Holdings",
    onlineSolutions: "Liberty Two Degrees",
    shortTermInsurance: "Mind MyMoney",
};

const frame254Data = {
    personalInsure: "Liberty Websites",
    className: "frame-263",
    frame26Props: frame264Data,
};

const frame265Data = {
    criticalIllnessCover: "Liberty Health",
    disabilityCover: "Liberty Botswana",
    funeralCover: "Liberty Kenya",
    incomeProtection: "Liberty Lesotho",
    lifeProtection: "Liberty Namibia",
    medicalCover: "Liberty Swaziland",
    onlineSolutions: "Liberty Uganda",
    shortTermInsurance: "Liberty Zambia",
};

const margin32Data = {
    children: "Social Media",
};

const frameData = {
    howToClaim: "How to Claim",
    findAForm: "Find a Form",
    fundFactSheets: "Fund Fact Sheets",
    unclaimedBenefits: "Unclaimed Benefits",
    helpfulResources: "Helpful Resources",
    rectangle1: "/img/rectangle@2x.png",
    text1: "",
    rectangle2: "/img/rectangle-1@2x.png",
    personal: "Personal",
    business: "Business",
    talkToAnAdviser: "Talk to an Adviser",
    mediaInsights1: "Media & Insights",
    aboutUs1: "About Us",
    login: "Login",
    getComprehensiveCo1: "Get comprehensive cover for you and your loved ones",
    rectangle3: "/img/rectangle-2@2x.png",
    rectangle4: "/img/rectangle-2@2x.png",
    rectangle5: "/img/rectangle-2@2x.png",
    rectangle6: "/img/rectangle-2@2x.png",
    rectangle7: "/img/rectangle-2@2x.png",
    rectangle8: "/img/rectangle-2@2x.png",
    rectangle9: "/img/rectangle-2@2x.png",
    rectangle10: "/img/rectangle-2@2x.png",
    getComprehensiveCo2: "Get comprehensive cover for your business",
    rectangle11: "/img/rectangle-2@2x.png",
    rectangle12: "/img/rectangle-2@2x.png",
    rectangle13: "/img/rectangle-2@2x.png",
    rectangle14: "/img/rectangle-2@2x.png",
    rectangle15: "/img/rectangle-2@2x.png",
    advice: "Advice",
    service: "Service",
    completeTheFormFo: "Complete the form for a Financial Adviser to contact you",
    usedToCheckWhethe: "Used to check whether you have existing Liberty products",
    frame: "/img/frame@2x.png",
    spanText1: "I accept the privacy ",
    spanText2: "terms and conditions",
    callMeBack: "Call me back",
    aboutUs2: "About us",
    ourStory: "Our Story",
    whyLiberty: "Why Liberty?",
    csiInitiatives: "CSI Initiatives",
    sustainability: "Sustainability",
    mediaInsights2: "Media & Insights",
    researchAndInsightsHub: "Research and Insights Hub",
    careers: "Careers",
    personalInvest: "Personal Invest",
    saveForRetirement: "Save for Retirement",
    invest: "Invest",
    investForIncome: "Invest for Income",
    investOffshore: "Invest Offshore",
    investForEducation: "Invest for Education",
    stash: "STASH",
    generalEnquiries: "General Enquiries",
    phone: "+27 860 456 789",
    infoLibertyCoZa: "info@liberty.co.za",
    spanText3: "",
    spanText4: " WhatsApp",
    complaintResolution: "Complaint Resolution",
    libertyInAfrica: "Liberty in Africa",
    place: "Legal",
    governance: "Governance",
    privacyAndSecurity: "Privacy and Security",
    yourFundAndTrustees: "Your Fund and Trustees",
    text6: "",
    text7: "",
    text8: "",
    text9: "",
    text10: "",
    libertyGroupLimite: "Liberty Group Limited - a Licensed Life Insurer and an Authorised Financial Services Provider (Licence no 2409)​",
    spanText5: "User Agreement",
    spanText6: " | ",
    spanText7: "Sitemap",
    frame21Props: frame21Data,
    frame51Props: frame51Data,
    frame52Props: frame52Data,
    frame53Props: frame53Data,
    frame81Props: frame81Data,
    frame22Props: frame22Data,
    frame82Props: frame82Data,
    frame83Props: frame83Data,
    frame84Props: frame84Data,
    frame7Props: frame72Data,
    frame85Props: frame85Data,
    frame91Props: frame92Data,
    frame101Props: frame101Data,
    frame102Props: frame102Data,
    frame111Props: frame111Data,
    frame112Props: frame112Data,
    frame131Props: frame131Data,
    frame151Props: frame151Data,
    frame152Props: frame152Data,
    frame153Props: frame153Data,
    frame132Props: frame132Data,
    frame133Props: frame133Data,
    frame141Props: frame147Data,
    frame142Props: frame148Data,
    frame143Props: frame149Data,
    frame161Props: frame161Data,
    frame171Props: frame171Data,
    frame172Props: frame172Data,
    frame181Props: frame181Data,
    frame201Props: frame201Data,
    frame202Props: frame202Data,
    frame203Props: frame203Data,
    frame182Props: frame182Data,
    frame191Props: frame196Data,
    frame192Props: frame197Data,
    frame193Props: frame198Data,
    frame162Props: frame162Data,
    frame211Props: frame211Data,
    frame212Props: frame212Data,
    frame231Props: frame231Data,
    frame213Props: frame213Data,
    frame214Props: frame214Data,
    frame232Props: frame232Data,
    frame215Props: frame215Data,
    frame92Props: frame912Data,
    frame241Props: frame241Data,
    frame242Props: frame242Data,
    frame243Props: frame243Data,
    frame244Props: frame244Data,
    frame251Props: frame251Data,
    frame252Props: frame252Data,
    margin31Props: margin31Data,
    frame253Props: frame253Data,
    frame254Props: frame254Data,
    frame26Props: frame265Data,
    margin32Props: margin32Data,
};

