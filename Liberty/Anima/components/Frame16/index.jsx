import React from "react";
import Frame9 from "../Frame9";
import styled from "styled-components";


function Frame16(props) {
  const { frame9Props } = props;

  return (
    <Frame>
      <Frame9 className={frame9Props.className} />
      <Frame9 />
    </Frame>
  );
}

const Frame = styled.div`
  display: flex;
  width: 1197px;
  align-items: flex-start;
  padding: 0px 0px 4px;
  position: absolute;
  top: 371px;
  left: 0;
  border: 1px none;
`;

export default Frame16;
