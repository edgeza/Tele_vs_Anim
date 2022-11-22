import React from "react";
import Frame3 from "../Frame3";
import Frame6 from "../Frame6";
import styled from "styled-components";


function Frame5(props) {
  const { className, frame3Props, frame6Props } = props;

  return (
    <Frame className={`frame-164 ${className || ""}`}>
      <Frame1 className="frame-165">
        <Frame2 className="frame-166">
          <Frame4 className="frame-167">
            <Frame3>{frame3Props.children}</Frame3>
            <Frame7 className="frame-168">
              <Frame6 noMatterWhatYour={frame6Props.noMatterWhatYour} frame4Props={frame6Props.frame4Props} />
            </Frame7>
          </Frame4>
        </Frame2>
      </Frame1>
    </Frame>
  );
}

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 1920px;
  align-items: flex-start;
  border: 1px none;
`;

const Frame1 = styled.div`
  align-self: stretch;
  min-width: 1920px;
  height: 400px;
  border: 1px none;
`;

const Frame2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 1920px;
  height: 400px;
  align-items: flex-start;
  border: 1px none;
  background-image: url(/img/frame-1@1x.svg);
  background-size: cover;
  background-position: 50% 50%;
`;

const Frame4 = styled.div`
  position: relative;
  flex: 1;
  align-self: stretch;
  min-width: 1920px;
  height: 400px;
  background-color: var(--black-2);
  border: 1px none;
`;

const Frame7 = styled.div`
  display: flex;
  flex-direction: column;
  width: 1197px;
  height: 400px;
  align-items: flex-start;
  position: absolute;
  top: 148px;
  left: 362px;
  border: 1px none;
`;

const Frame8 = styled.div`
  .frame-164.frame-169 & {
    background-image: url(/img/frame-2@1x.svg);
  }
`;

const Frame9 = styled.div`
  .frame-164.frame-170 & {
    background-image: url(/img/frame-3@1x.svg);
  }
`;

export default Frame5;
