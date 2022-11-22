import React from "react";
import styled from "styled-components";
import { NotosansBoldBlueberry16px, NotosansRegularNormalBlack16px } from "../../styledMixins";


function Frame17(props) {
  const { investmentSolutions, theLibertyInvestme } = props;

  return (
    <Frame>
      <InvestmentSolutions>{investmentSolutions}</InvestmentSolutions>
      <TheLibertyInvestme>{theLibertyInvestme}</TheLibertyInvestme>
    </Frame>
  );
}

const Frame = styled.div`
  position: absolute;
  width: 372px;
  top: 123px;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 19px 0;
  align-items: center;
  min-height: 145px;
  gap: 11px;
  border: 1px none;
`;

const InvestmentSolutions = styled.div`
  ${NotosansBoldBlueberry16px}
  width: 332px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: 27px;
  white-space: nowrap;
`;

const TheLibertyInvestme = styled.p`
  ${NotosansRegularNormalBlack16px}
  width: 332px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame17;
