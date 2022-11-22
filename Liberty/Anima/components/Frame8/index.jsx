import React from "react";
import Frame3 from "../Frame3";
import Frame6 from "../Frame6";
import styled from "styled-components";


function Frame8(props) {
  const { className, frame3Props, frame6Props } = props;

  return (
    <Frame className={`frame-186 ${className || ""}`}>
      <Frame1 className="frame-187">
        <Frame2 className="frame-188">
          <Frame4 className="frame-189">
            <Frame3>{frame3Props.children}</Frame3>
            <Frame6
              noMatterWhatYour={frame6Props.noMatterWhatYour}
              className={frame6Props.className}
              frame4Props={frame6Props.frame4Props}
            />
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
  background-image: url(/img/frame-5@1x.svg);
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

const Frame5 = styled.div`
  .frame-186.frame-190 & {
    background-image: url(/img/frame-7@1x.svg);
  }
`;

const Frame7 = styled.div`
  .frame-186.frame-191 & {
    background-image: url(/img/frame-8@1x.svg);
  }
`;

const Frame9 = styled.div`
  .frame-186.frame-192 & {
    background-image: url(/img/frame-9@1x.svg);
  }
`;

const Frame10 = styled.div`
  .frame-186.frame-193 & {
    background-image: url(/img/frame-11@1x.svg);
  }
`;

export default Frame8;
