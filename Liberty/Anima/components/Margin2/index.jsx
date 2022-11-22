import React from "react";
import styled from "styled-components";
import { NotosansMediumWhite16px } from "../../styledMixins";


function Margin2() {
  return (
    <Margin>
      <FindOutMore>Find out more &gt;</FindOutMore>
    </Margin>
  );
}

const Margin = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  padding: 1.5px 0px;
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

export default Margin2;
