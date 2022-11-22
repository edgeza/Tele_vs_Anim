import React from "react";
import styled from "styled-components";
import { RobotoNormalWhite14px } from "../../styledMixins";


function Frame10(props) {
  const { children, className } = props;

  return (
    <Frame className={`frame-200 ${className || ""}`}>
      <Text2 className="text-2">{children}</Text2>
    </Frame>
  );
}

const Frame = styled.div`
  display: flex;
  margin-top: -217px;
  flex-direction: column;
  width: 60px;
  height: 48px;
  align-items: center;
  justify-content: center;
  padding: 0px 25.5px;
  background-color: var(--blueberry);
  border-radius: 0px 4px 4px 0px;
  border: 1px none;
  box-shadow: 0px 0px 5px #00000033;

  &.frame-200.frame-201 {
    border-radius: 4px 0px 0px 4px;
  }
`;

const Text2 = styled.div`
  ${RobotoNormalWhite14px}
  width: 9px;
  height: 14px;
  text-align: center;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

export default Frame10;
