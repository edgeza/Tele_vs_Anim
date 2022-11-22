import React from "react";
import Frame14 from "../Frame14";
import Frame12 from "../Frame12";
import styled from "styled-components";


function Frame13(props) {
  const { frame14Props } = props;

  return (
    <Frame>
      <Frame1>
        <Rectangle></Rectangle>
        <Frame14
          shortTermInsurance={frame14Props.shortTermInsurance}
          libertySComprehens={frame14Props.libertySComprehens}
        />
        <Frame12 />
      </Frame1>
    </Frame>
  );
}

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 399px;
  align-items: flex-start;
  padding: 0px 27px 0px 0px;
  border: 1px none;
`;

const Frame1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 372px;
  height: 368px;
  align-items: flex-start;
  position: relative;
  background-color: var(--blueberry);
  border-radius: 4px;
  border: 1px none;
  box-shadow: 0px -5px 15px #000000;
`;

const Rectangle = styled.div`
  align-self: stretch;
  min-width: 372px;
  height: 1px;
  background-color: var(--alto);
  border-radius: 3px 3px 0px 0px;
  border: 1px none;
`;

export default Frame13;
