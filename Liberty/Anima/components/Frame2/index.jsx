import React from "react";
import Frame3 from "../Frame3";
import Frame4 from "../Frame4";
import styled from "styled-components";


function Frame2(props) {
  const { className, frame3Props } = props;

  return (
    <Frame className={`frame-149 ${className || ""}`}>
      <Frame1 className="frame-150">
        <Frame5 className="frame-151">
          <Frame6 className="frame-152">
            <Frame3>{frame3Props.children}</Frame3>
            <Frame7 className="frame-153">
              <Frame4 />
            </Frame7>
          </Frame6>
        </Frame5>
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

const Frame5 = styled.div`
  display: flex;
  flex-direction: column;
  width: 1920px;
  height: 400px;
  align-items: flex-start;
  border: 1px none;
  background-image: url(/img/frame@1x.svg);
  background-size: cover;
  background-position: 50% 50%;
`;

const Frame6 = styled.div`
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
  padding: 32px 8px 24px;
  position: absolute;
  top: 148px;
  left: 362px;
  border: 1px none;
`;

const Frame8 = styled.div`
  .frame-149.frame-154 & {
    background-image: url(/img/frame-6@1x.svg);
  }
`;

export default Frame2;
