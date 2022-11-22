import React from "react";
import styled from "styled-components";
import { NotosansBoldWhite40px } from "../../styledMixins";


function Frame22(props) {
  const { children } = props;

  return (
    <Frame>
      <Frame1>
        <Frame2>
          <Frame3>
            <DriveHope>{children}</DriveHope>
          </Frame3>
        </Frame2>
      </Frame1>
    </Frame>
  );
}

const Frame = styled.div`
  position: absolute;
  height: 176px;
  top: 0;
  left: 12px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 765px;
  border: 1px none;
`;

const Frame1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 772px;
  align-items: flex-start;
  padding: 48px 0px 0px;
  border: 1px none;
`;

const Frame2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 54px 0px 30px;
  align-self: stretch;
  border: 1px none;
`;

const Frame3 = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 772px;
  height: 44px;
  border: 1px none;
`;

const DriveHope = styled.div`
  ${NotosansBoldWhite40px}
  position: absolute;
  top: -1px;
  left: 0;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: 44px;
  white-space: nowrap;
`;

export default Frame22;
