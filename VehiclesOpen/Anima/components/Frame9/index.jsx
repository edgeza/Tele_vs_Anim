import React from "react";
import styled from "styled-components";


function Frame9(props) {
  const { className } = props;

  return (
    <Frame className={`frame-194 ${className || ""}`}>
      <Rectangle className="rectangle-18"></Rectangle>
    </Frame>
  );
}

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  justify-content: center;
  padding: 5px 7px;
  border: 1px none;
`;

const Rectangle = styled.div`
  min-width: 10px;
  height: 10px;
  background-color: var(--white);
  border-radius: 30px;
  border: 1px none;
`;

const Rectangle1 = styled.div`
  .frame-194.frame-195 & {
    background-color: var(--blueberry);
  }
`;

const Rectangle2 = styled.div`
  .frame-194.frame-197 & {
    background-color: var(--blueberry);
  }
`;

const Rectangle3 = styled.div`
  .frame-194.frame-198 & {
    background-color: var(--blueberry);
  }
`;

const Rectangle4 = styled.div`
  .frame-194.frame-199 & {
    background-color: var(--blueberry);
  }
`;

export default Frame9;
