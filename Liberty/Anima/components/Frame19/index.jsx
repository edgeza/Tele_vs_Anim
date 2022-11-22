import React from "react";
import styled from "styled-components";
import { NotosansBoldBlueberry16px, NotosansRegularNormalBlack16px } from "../../styledMixins";


function Frame19(props) {
  const { consultingAndActuarialSolutions, atLibertyCorporate } = props;

  return (
    <Frame>
      <ConsultingAndActuarialSolutions>{consultingAndActuarialSolutions}</ConsultingAndActuarialSolutions>
      <AtLibertyCorporate>{atLibertyCorporate}</AtLibertyCorporate>
    </Frame>
  );
}

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 20px;
  align-self: stretch;
  border: 1px none;
`;

const ConsultingAndActuarialSolutions = styled.div`
  ${NotosansBoldBlueberry16px}
  align-self: stretch;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: 27px;
  white-space: nowrap;
`;

const AtLibertyCorporate = styled.p`
  ${NotosansRegularNormalBlack16px}
  align-self: stretch;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame19;
