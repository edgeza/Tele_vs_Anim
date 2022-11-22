import React from "react";
import Frame4 from "../Frame4";
import styled from "styled-components";
import { NotosansNormalWhite14px } from "../../styledMixins";


function Frame6(props) {
  const { noMatterWhatYour, className, frame4Props } = props;

  return (
    <Frame className={`frame-171 ${className || ""}`}>
      <NoMatterWhatYour className="no-matter-what-your">{noMatterWhatYour}</NoMatterWhatYour>
      <Frame4 className={frame4Props.className} />
    </Frame>
  );
}

const Frame = styled.div`
  position: relative;
  flex: 1;
  align-self: stretch;
  min-width: 1197px;
  height: 400px;
  border: 1px none;

  &.frame-171.frame-173 {
    display: flex;
    flex-direction: column;
    width: 1197px;
    align-items: flex-start;
    gap: 24px;
    padding: 8px 8px 24px;
    position: absolute;
    top: 148px;
    left: 362px;
    flex: unset;
    align-self: unset;
    min-width: unset;
  }

  &.frame-171.frame-174 {
    display: flex;
    flex-direction: column;
    width: 1197px;
    align-items: flex-start;
    gap: 24px;
    padding: 8px 8px 24px;
    position: absolute;
    top: 148px;
    left: 362px;
    flex: unset;
    align-self: unset;
    min-width: unset;
  }

  &.frame-171.frame-175 {
    display: flex;
    flex-direction: column;
    width: 1197px;
    align-items: flex-start;
    gap: 24px;
    padding: 8px 8px 24px;
    position: absolute;
    top: 148px;
    left: 362px;
    flex: unset;
    align-self: unset;
    min-width: unset;
  }

  &.frame-171.frame-176 {
    display: flex;
    flex-direction: column;
    width: 1197px;
    align-items: flex-start;
    gap: 24px;
    padding: 8px 8px 24px;
    position: absolute;
    top: 148px;
    left: 362px;
    flex: unset;
    align-self: unset;
    min-width: unset;
  }

  &.frame-171.frame-177 {
    display: flex;
    flex-direction: column;
    width: 1197px;
    align-items: flex-start;
    gap: 24px;
    padding: 8px 8px 24px;
    position: absolute;
    top: 148px;
    left: 362px;
    flex: unset;
    align-self: unset;
    min-width: unset;
  }
`;

const NoMatterWhatYour = styled.p`
  ${NotosansNormalWhite14px}
  position: absolute;
  width: 1181px;
  top: 7px;
  left: 8px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: normal;
`;

const GetAccessToAWorl = styled.p`
  ${NotosansNormalWhite14px}

  .frame-171.frame-173  & {
    align-self: stretch;
    margin-top: -1px;
    position: unset;
    width: unset;
    top: unset;
    left: unset;
  }
`;

const NoMatterWhatYour1 = styled.p`
  ${NotosansNormalWhite14px}

  .frame-171.frame-174  & {
    align-self: stretch;
    margin-top: -1px;
    position: unset;
    width: unset;
    top: unset;
    left: unset;
  }
`;

const WeTakeCareOfYour = styled.p`
  ${NotosansNormalWhite14px}

  .frame-171.frame-175  & {
    align-self: stretch;
    margin-top: -1px;
    position: unset;
    width: unset;
    top: unset;
    left: unset;
  }
`;

const YourLifeGoalsAre = styled.p`
  ${NotosansNormalWhite14px}

  .frame-171.frame-176  & {
    align-self: stretch;
    margin-top: -1px;
    position: unset;
    width: unset;
    top: unset;
    left: unset;
  }
`;

const GetAccessToAWorl1 = styled.p`
  ${NotosansNormalWhite14px}

  .frame-171.frame-177  & {
    align-self: stretch;
    margin-top: -1px;
    position: unset;
    width: unset;
    top: unset;
    left: unset;
  }
`;

export default Frame6;
