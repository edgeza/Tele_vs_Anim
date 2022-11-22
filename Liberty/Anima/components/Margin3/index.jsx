import React from "react";
import styled from "styled-components";
import { NotosansRegularNormalAlabaster18px } from "../../styledMixins";


function Margin3(props) {
  const { children } = props;

  return (
    <Margin>
      <GetInTouch>{children}</GetInTouch>
    </Margin>
  );
}

const Margin = styled.div`
  display: flex;
  flex-direction: column;
  width: 229px;
  align-items: flex-start;
  padding: 0px 0px 0px 8px;
  border: 1px none;
`;

const GetInTouch = styled.div`
  ${NotosansRegularNormalAlabaster18px}
  align-self: stretch;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: normal;
`;

export default Margin3;
