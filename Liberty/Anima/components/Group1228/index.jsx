import React from "react";
import styled from "styled-components";


function Group1228(props) {
  const { className } = props;

  return (
    <Group12281 className={`group-1228 ${className || ""}`}>
      <Vector190 className="vector-190" src="/img/vector-190-10@2x.svg" alt="Vector 190" />
    </Group12281>
  );
}

const Group12281 = styled.div`
  height: 20px;
  margin-left: 5px;
  margin-top: 2px;
  display: flex;
  padding: 0 5.6px;
  align-items: center;
  min-width: 20px;
  background-color: var(--mist-gray);
  border-radius: 10px;

  &.group-1228.group-1232 {
    position: absolute;
    top: 1px;
    left: 41px;
    padding: 4px 5.6px;
    align-items: flex-end;
    transform: rotate(-180deg);
    margin-left: unset;
    margin-top: unset;
  }

  &.group-1228.group-1232-1 {
    position: absolute;
    top: 1px;
    left: 41px;
    padding: 4px 5.6px;
    align-items: flex-end;
    transform: rotate(-180deg);
    margin-left: unset;
    margin-top: unset;
  }

  &.group-1228.group-1232-2 {
    position: absolute;
    top: 1px;
    left: 41px;
    padding: 4px 5.6px;
    align-items: flex-end;
    transform: rotate(-180deg);
    margin-left: unset;
    margin-top: unset;
  }
`;

const Vector190 = styled.img`
  width: 7px;
  height: 12px;
`;

const Vector1901 = styled.img`
  .group-1228.group-1232 & {
    transform: rotate(180deg);
  }
`;

const Vector1902 = styled.img`
  .group-1228.group-1232-1 & {
    transform: rotate(180deg);
  }
`;

const Vector1903 = styled.img`
  .group-1228.group-1232-2 & {
    transform: rotate(180deg);
  }
`;

export default Group1228;
