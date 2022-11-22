import React from "react";
import styled from "styled-components";


function Group1231(props) {
  const { className } = props;

  return (
    <Group12311 className={`group-1231 ${className || ""}`}>
      <Line13 className="line-13" src="/img/line-13-2@2x.svg" alt="Line 13" />
      <Vector191 className="vector-191" src="/img/vector-190-10@2x.svg" alt="Vector 191" />
    </Group12311>
  );
}

const Group12311 = styled.div`
  height: 20px;
  margin-top: 2px;
  display: flex;
  padding: 0 5px;
  justify-content: flex-end;
  align-items: center;
  min-width: 20px;
  background-color: var(--mist-gray);
  border-radius: 10px;

  &.group-1231.group-1233 {
    margin-left: 5px;
    margin-top: 2px;
    padding: 4px 5px;
    transform: rotate(-180deg);
  }

  &.group-1231.group-1233-1 {
    margin-left: 5px;
    margin-top: 2px;
    padding: 4px 5px;
    transform: rotate(-180deg);
  }

  &.group-1231.group-1233-2 {
    margin-left: 5px;
    margin-top: 2px;
    padding: 4px 5px;
    transform: rotate(-180deg);
  }
`;

const Line13 = styled.img`
  width: 2px;
  height: 12px;
`;

const Vector191 = styled.img`
  width: 7px;
  height: 12px;
`;

const Line131 = styled.img`
  .group-1231.group-1233 & {
    align-self: flex-end;
    transform: rotate(180deg);
  }
`;

const Vector1911 = styled.img`
  .group-1231.group-1233 & {
    margin-bottom: 0;
    transform: rotate(180deg);
  }
`;

const Line132 = styled.img`
  .group-1231.group-1233-1 & {
    align-self: flex-end;
    transform: rotate(180deg);
  }
`;

const Vector1912 = styled.img`
  .group-1231.group-1233-1 & {
    margin-bottom: 0;
    transform: rotate(180deg);
  }
`;

const Line133 = styled.img`
  .group-1231.group-1233-2 & {
    align-self: flex-end;
    transform: rotate(180deg);
  }
`;

const Vector1913 = styled.img`
  .group-1231.group-1233-2 & {
    margin-bottom: 0;
    transform: rotate(180deg);
  }
`;

export default Group1231;
