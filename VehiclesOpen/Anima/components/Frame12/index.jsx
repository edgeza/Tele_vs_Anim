import React from "react";
import styled from "styled-components";
import { NotosansMediumWhite16px } from "../../styledMixins";


function Frame12() {
  return (
    <Frame>
      <Frame1>
        <Margin>
          <Rectangle></Rectangle>
        </Margin>
        <FindOutMore>Find out more &gt;</FindOutMore>
      </Frame1>
    </Frame>
  );
}

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 198px 37px 20px;
  align-self: stretch;
  margin-bottom: -1px;
  background-color: var(--blueberry);
  border-radius: 0px 0px 3px 3px;
  border: 1px none;
`;

const Frame1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 10px;
  margin-right: -1px;
  border: 1px none;
`;

const Margin = styled.div`
  display: flex;
  flex-direction: column;
  width: 24px;
  height: 22px;
  align-items: flex-start;
  padding: 11px 0px;
  border: 1px none;
`;

const Rectangle = styled.div`
  flex: 1;
  align-self: stretch;
  min-width: 24px;
  height: 1px;
  margin-bottom: -1px;
  background-color: var(--alto);
  border: 1px none;
`;

const FindOutMore = styled.div`
  ${NotosansMediumWhite16px}
  width: fit-content;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame12;
