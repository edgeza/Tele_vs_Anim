import React from "react";
import styled from "styled-components";


function Margin() {
  return (
    <Margin1>
      <Rectangle></Rectangle>
    </Margin1>
  );
}

const Margin1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 10px;
  height: 13.125px;
  align-items: flex-start;
  padding: 8.125px 0px 0px;
  border: 1px none;
`;

const Rectangle = styled.div`
  flex: 1;
  align-self: stretch;
  min-width: 10px;
  height: 5px;
  background-color: var(--white-2);
  border: 1px none;
  box-shadow: inset 4.796879768371582px 0px 0px transparent, inset -4.796879768371582px 0px 0px transparent,
    inset 0px 4.796879768371582px 0px #ffffff;
`;

export default Margin;
