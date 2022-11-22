import React from "react";
import styled from "styled-components";
import { NotosansNormalSonicSilver16px } from "../../styledMixins";


function Frame24(props) {
  const { children, className } = props;

  return (
    <Frame className={`frame-257 ${className || ""}`}>
      <NameAndSurname className="name-and-surname">{children}</NameAndSurname>
    </Frame>
  );
}

const Frame = styled.div`
  display: flex;
  margin-bottom: -1764px;
  flex-direction: column;
  width: 319px;
  height: 38px;
  align-items: flex-start;
  justify-content: center;
  padding: 6px 12px;
  background-color: var(--white);
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--mischka);

  &.frame-257.frame-258 {
    margin-bottom: -1818px;
  }

  &.frame-257.frame-259 {
    margin-bottom: -1872px;
  }

  &.frame-257.frame-260 {
    margin-bottom: -1926px;
  }
`;

const NameAndSurname = styled.div`
  ${NotosansNormalSonicSilver16px}
  align-self: stretch;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default Frame24;
