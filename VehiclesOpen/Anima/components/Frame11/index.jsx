import React from "react";
import styled from "styled-components";
import { NotosansNormalWhite16px, NotosansBoldWhite16px } from "../../styledMixins";


function Frame11(props) {
  const { disabilityCover, becomingTemporarily, className } = props;

  return (
    <Frame className={`frame-202 ${className || ""}`}>
      <DisabilityCover className="disability-cover">{disabilityCover}</DisabilityCover>
      <BecomingTemporarily className="becoming-temporarily">{becomingTemporarily}</BecomingTemporarily>
    </Frame>
  );
}

const Frame = styled.div`
  width: 372px;
  display: flex;
  flex-direction: column;
  padding: 19px 0;
  align-items: center;
  min-height: 192px;
  gap: 11px;
  border: 1px none;

  &.frame-202.frame-203 {
    position: relative;
    align-self: stretch;
    min-width: 372px;
    height: 297px;
    width: unset;
    display: unset;
    flex-direction: unset;
    padding: unset;
    align-items: unset;
    min-height: unset;
    gap: unset;
  }
`;

const DisabilityCover = styled.div`
  ${NotosansBoldWhite16px}
  width: 332px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: 27px;
  white-space: nowrap;
`;

const BecomingTemporarily = styled.p`
  ${NotosansNormalWhite16px}
  width: 332px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: normal;
`;

const CriticalIllnessCover = styled.div`
  ${NotosansBoldWhite16px}

  .frame-202.frame-203  & {
    position: absolute;
    top: 19px;
    left: 20px;
  }
`;

const ACriticalIllnessC = styled.p`
  ${NotosansNormalWhite16px}

  .frame-202.frame-203  & {
    position: absolute;
    top: 58px;
    left: 20px;
  }
`;

export default Frame11;
