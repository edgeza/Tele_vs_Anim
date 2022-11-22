
import { css } from "styled-components";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Frame from "./components/Frame";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|frame)">
          <Frame {...frameData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
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
    className: "frame-201",
};

const frame111Data = {
    disabilityCover: "Disability Cover",
    becomingTemporarily: "Becoming temporarily or permanently disabled can cause financial strain on you and your family. We can help you adjust financially, by paying out a lump sum should you become disabled.",
};

const frame112Data = {
    disabilityCover: "Critical Illness Cover",
    becomingTemporarily: "A critical illness can place emotional strain on you and your loved ones. Critical illness cover provides financial support when you're seriously ill.",
    className: "frame-203",
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
    className: "frame-209",
};

const frame151Data = {
    rectangle1: "/img/rectangle-4@2x.png",
    frame14Props: frame142Data,
};

const frame143Data = {
    shortTermInsurance: "Life Protection",
    libertySComprehens: "Have you taken steps to secure your loved ones' financial future after you're gone? If not, isn't it time you thought about doing so?",
    className: "frame-210",
};

const frame152Data = {
    rectangle1: "/img/rectangle-6@2x.png",
    frame14Props: frame143Data,
};

const frame144Data = {
    shortTermInsurance: "Disability Cover",
    libertySComprehens: "Becoming temporarily or permanently disabled can cause financial strain on you and your family. We can help you adjust financially, by paying out a lump sum should you become disabled.",
    className: "frame-211",
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
    className: "frame-213",
};

const frame148Data = {
    shortTermInsurance: "Life Protection",
    libertySComprehens: "Have you taken steps to secure your loved ones' financial future after you're gone? If not, isn't it time you thought about doing so?",
    className: "frame-214",
};

const frame149Data = {
    shortTermInsurance: "Disability Cover",
    libertySComprehens: "Becoming temporarily or permanently disabled can cause financial strain on you and your family. We can help you adjust financially, by paying out a lump sum should you become disabled.",
    className: "frame-215",
};

const frame97Data = {
    className: "frame-197",
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
    className: "frame-198",
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
    className: "frame-236",
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
    className: "frame-237",
    frame22Props: frame225Data,
};

const frame226Data = {
    children: "2021 Claims Stats",
};

const frame214Data = {
    className: "frame-238",
    frame22Props: frame226Data,
};

const frame227Data = {
    children: "Get your tax certificate via WhatsApp",
};

const frame232Data = {
    className: "frame-256",
    frame22Props: frame227Data,
};

const frame228Data = {
    children: "#DriveHope",
};

const frame215Data = {
    className: "frame-239",
    frame22Props: frame228Data,
};

const frame912Data = {
    className: "frame-199",
};

const frame241Data = {
    children: "Name and Surname *",
};

const frame242Data = {
    children: "Email address *",
    className: "frame-258",
};

const frame243Data = {
    children: "Contact number *",
    className: "frame-259",
};

const frame244Data = {
    children: "ID number",
    className: "frame-260",
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
    className: "frame-262",
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
    className: "frame-263",
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
    className: "frame-264",
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

