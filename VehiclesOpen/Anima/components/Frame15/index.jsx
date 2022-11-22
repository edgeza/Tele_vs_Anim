import React from "react";
import Frame14 from "../Frame14";
import Margin2 from "../Margin2";
import styled from "styled-components";


function Frame15(props) {
  const { rectangle1, frame14Props } = props;

  return (
    <Frame>
      <Frame1>
        <Rectangle src={rectangle1} alt="Rectangle" />
        <Frame14
          shortTermInsurance={frame14Props.shortTermInsurance}
          libertySComprehens={frame14Props.libertySComprehens}
          className={frame14Props.className}
        />
        <Frame2>
          <Frame3>
            <IconClipboard src="/img/rectangle-5@2x.png" alt="icon-clipboard" />
            <Margin2 />
          </Frame3>
        </Frame2>
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

const Rectangle = styled.img`
  align-self: stretch;
  min-width: 372px;
  height: 123px;
  object-fit: cover;
`;

const Frame2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 198px 16px 20px;
  align-self: stretch;
  background-color: var(--blueberry);
  border-radius: 0px 0px 3px 3px;
  border: 1px none;
`;

const Frame3 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  margin-right: -1px;
  border: 1px none;
`;

const IconClipboard = styled.img`
  min-width: 24px;
  height: 25px;
  object-fit: cover;
`;

export default Frame15;
