import React from "react";
import Frame19 from "../Frame19";
import styled from "styled-components";


function Frame20(props) {
  const { rectangle, frame19Props } = props;

  return (
    <Frame>
      <Frame1>
        <Frame2>
          <Rectangle src={rectangle} alt="Rectangle" />
          <Frame19
            consultingAndActuarialSolutions={frame19Props.consultingAndActuarialSolutions}
            atLibertyCorporate={frame19Props.atLibertyCorporate}
          />
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
  padding: 0px 0px 99.96875px;
  background-color: var(--white);
  border-radius: 4px;
  border: 1px none;
  box-shadow: 0px -5px 15px #000000;
`;

const Frame2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  align-self: stretch;
  margin-bottom: -0.97px;
  border: 1px none;
`;

const Rectangle = styled.img`
  align-self: stretch;
  min-width: 372px;
  height: 123px;
  object-fit: cover;
`;

export default Frame20;
