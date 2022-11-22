import React from "react";
import Group1231 from "../Group1231";
import Group1228 from "../Group1228";
import styled from "styled-components";
import { OpensansNormalMineShaft16px } from "../../styledMixins";


function Group1273(props) {
  const { className, group1228Props, group1231Props } = props;

  return (
    <Group12731 className={`group-1273 ${className || ""}`}>
      <Group1231 />
      <Group1228 />
      <Surname className="surname">Page</Surname>
      <OverlapGroup1 className="overlap-group1-3">
        <Rectangle223 className="rectangle-223"></Rectangle223>
        <Number className="number-5">1</Number>
      </OverlapGroup1>
      <OverlapGroup className="overlap-group-6">
        <Group1228 className={group1228Props.className} />
        <Of2 className="of-2">of 2</Of2>
      </OverlapGroup>
      <Group1231 className={group1231Props.className} />
    </Group12731>
  );
}

const Group12731 = styled.div`
  ${OpensansNormalMineShaft16px}
  position: relative;
  align-self: flex-end;
  margin-top: 56px;
  margin-right: 94px;
  display: flex;
  align-items: flex-start;
  min-width: 252px;

  &.group-1273.group-1273-1 {
    position: absolute;
    height: 31px;
    top: 3542px;
    left: 1094px;
    align-self: unset;
    margin-top: unset;
    margin-right: unset;
  }

  &.group-1273.group-1273-2 {
    margin-top: 34px;
  }
`;

const Surname = styled.div`
  width: 37px;
  min-height: 30px;
  align-self: flex-end;
  margin-left: 14px;
  letter-spacing: 0;
  line-height: 50px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  width: 50px;
  height: 31px;
  position: relative;
  margin-left: 7px;
`;

const Rectangle223 = styled.div`
  position: absolute;
  width: 50px;
  height: 26px;
  top: 0;
  left: 0;
  background-color: var(--white);
  border: 1px none;
`;

const Number = styled.div`
  position: absolute;
  width: 19px;
  top: 1px;
  left: 8px;
  letter-spacing: 0;
  line-height: 50px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  width: 61px;
  height: 30px;
  position: relative;
  align-self: flex-end;
  margin-left: 7px;
`;

const Of2 = styled.div`
  position: absolute;
  width: 46px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 50px;
  white-space: nowrap;
`;

export default Group1273;
