import React from "react";
import styled from "styled-components";
import { NotosansBoldWhite16px, NotosansRegularNormalWhite16px } from "../../styledMixins";


function Frame14(props) {
  const { shortTermInsurance, libertySComprehens, className } = props;

  return (
    <Frame className={`frame-207 ${className || ""}`}>
      <ShortTermInsurance className="short-term-insurance">{shortTermInsurance}</ShortTermInsurance>
      <LibertysComprehens className="libertys-comprehens">{libertySComprehens}</LibertysComprehens>
    </Frame>
  );
}

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  height: 297px;
  align-items: flex-start;
  gap: 12px;
  padding: 20px;
  align-self: stretch;
  border: 1px none;

  &.frame-207.frame-208 {
    height: 192px;
  }

  &.frame-207.frame-209 {
    height: 192px;
  }

  &.frame-207.frame-210 {
    height: 192px;
  }

  &.frame-207.frame-212 {
    height: 192px;
  }

  &.frame-207.frame-213 {
    height: 192px;
  }

  &.frame-207.frame-214 {
    height: 192px;
  }
`;

const ShortTermInsurance = styled.div`
  ${NotosansBoldWhite16px}
  align-self: stretch;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: 27px;
  white-space: nowrap;
`;

const LibertysComprehens = styled.p`
  ${NotosansRegularNormalWhite16px}
  align-self: stretch;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame14;
