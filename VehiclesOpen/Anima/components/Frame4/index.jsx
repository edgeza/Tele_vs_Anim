import React from "react";
import styled from "styled-components";
import { NotosansNormalWhite16px } from "../../styledMixins";


function Frame4(props) {
  const { className } = props;

  return (
    <Frame className={`frame-158 ${className || ""}`}>
      <Frame1 className="frame-159">
        <FindOutMore className="find-out-more">Find out more</FindOutMore>
      </Frame1>
    </Frame>
  );
}

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 1048px 0px 0px;
  align-self: stretch;
  border: 1px none;

  &.frame-158.frame-160 {
    width: 1181px;
    position: absolute;
    top: 51px;
    left: 8px;
    align-self: unset;
  }

  &.frame-158.frame-161 {
    width: 1181px;
    position: absolute;
    top: 51px;
    left: 8px;
    align-self: unset;
  }

  &.frame-158.frame-162 {
    width: 1181px;
    position: absolute;
    top: 51px;
    left: 8px;
    align-self: unset;
  }
`;

const Frame1 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  padding: 7px 13px;
  background-color: var(--blueberry);
  border-radius: 4px;
  border: 1px solid;
`;

const FindOutMore = styled.div`
  ${NotosansNormalWhite16px}
  width: fit-content;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default Frame4;
