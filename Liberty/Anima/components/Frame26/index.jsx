import React from "react";
import styled from "styled-components";
import { NotosansRegularNormalWhite14px } from "../../styledMixins";


function Frame26(props) {
  const {
    criticalIllnessCover,
    disabilityCover,
    funeralCover,
    incomeProtection,
    lifeProtection,
    medicalCover,
    onlineSolutions,
    shortTermInsurance,
  } = props;

  return (
    <Frame>
      <CriticalIllnessCover>{criticalIllnessCover}</CriticalIllnessCover>
      <DisabilityCover>{disabilityCover}</DisabilityCover>
      <DisabilityCover>{funeralCover}</DisabilityCover>
      <DisabilityCover>{incomeProtection}</DisabilityCover>
      <DisabilityCover>{lifeProtection}</DisabilityCover>
      <DisabilityCover>{medicalCover}</DisabilityCover>
      <DisabilityCover>{onlineSolutions}</DisabilityCover>
      <DisabilityCover>{shortTermInsurance}</DisabilityCover>
    </Frame>
  );
}

const Frame = styled.div`
  ${NotosansRegularNormalWhite14px}
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  border-radius: 4px;
  border: 1px none;
`;

const CriticalIllnessCover = styled.div`
  width: 229px;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: normal;
`;

const DisabilityCover = styled.div`
  width: 229px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame26;
