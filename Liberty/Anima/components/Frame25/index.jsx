import React from "react";
import Frame26 from "../Frame26";
import styled from "styled-components";
import { NotosansRegularNormalAlabaster18px } from "../../styledMixins";


function Frame25(props) {
  const { personalInsure, className, frame26Props } = props;

  return (
    <Frame className={`frame-260 ${className || ""}`}>
      <PersonalInsure className="personal-insure">{personalInsure}</PersonalInsure>
      <Frame26 {...frame26Props} />
    </Frame>
  );
}

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  padding: 0px 0px 19px;
  position: relative;
  border: 1px none;

  &.frame-260.frame-261 {
    padding: unset;
  }

  &.frame-260.frame-262 {
    padding: unset;
  }

  &.frame-260.frame-263 {
    padding: unset;
  }
`;

const PersonalInsure = styled.div`
  ${NotosansRegularNormalAlabaster18px}
  width: 229px;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame25;
