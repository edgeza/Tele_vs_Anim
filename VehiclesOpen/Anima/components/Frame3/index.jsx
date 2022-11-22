import React from "react";
import styled from "styled-components";
import { NotosansBoldWhite40px } from "../../styledMixins";


function Frame3(props) {
  const { children } = props;

  return (
    <Frame>
      <Frame1>
        <Frame2>
          <Address>{children}</Address>
        </Frame2>
      </Frame1>
    </Frame>
  );
}

const Frame = styled.div`
  position: absolute;
  height: 148px;
  top: 0;
  left: 362px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 1197px;
  border: 1px none;
`;

const Frame1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 1204px;
  align-items: flex-start;
  padding: 48px 0px 0px;
  border: 1px none;
`;

const Frame2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 0px 8px;
  align-self: stretch;
  border: 1px none;
`;

const Address = styled.h1`
  ${NotosansBoldWhite40px}
  align-self: stretch;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: 68px;
  white-space: nowrap;
`;

export default Frame3;
