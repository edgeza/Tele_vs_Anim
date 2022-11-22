import React from "react";
import Frame22 from "../Frame22";
import styled from "styled-components";
import { NotosansNormalWhite15px } from "../../styledMixins";


function Frame21(props) {
  const { className, frame22Props } = props;

  return (
    <Frame className={`frame-229 ${className || ""}`}>
      <Frame1 className="frame-230">
        <Frame2 className="frame-231">
          <Frame3 className="frame-232">
            <Frame22>{frame22Props.children}</Frame22>
            <Frame4 className="frame-233">
              <Frame5 className="frame-234">
                <Frame6 className="frame-235">
                  <FindOutMore className="find-out-more-3">Find out more</FindOutMore>
                </Frame6>
              </Frame5>
            </Frame4>
          </Frame3>
        </Frame2>
      </Frame1>
    </Frame>
  );
}

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 777px;
  align-items: flex-start;
  border: 1px none;

  &.frame-229.frame-239 {
    margin-right: -2px;
  }
`;

const Frame1 = styled.div`
  align-self: stretch;
  min-width: 777px;
  height: 570px;
  border: 1px none;
`;

const Frame2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 777px;
  height: 570px;
  align-items: flex-start;
  border: 1px none;
  background-image: url(/img/frame-12@1x.svg);
  background-size: cover;
  background-position: 50% 50%;
`;

const Frame3 = styled.div`
  position: relative;
  flex: 1;
  align-self: stretch;
  min-width: 777px;
  height: 570px;
  background-color: var(--black-2);
  border: 1px none;
`;

const Frame4 = styled.div`
  display: flex;
  flex-direction: column;
  width: 765px;
  height: 570px;
  align-items: flex-start;
  padding: 32px 8px 24px;
  position: absolute;
  top: 176px;
  left: 12px;
  border: 1px none;
`;

const Frame5 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 624.640625px 0px 0px;
  align-self: stretch;
  border: 1px none;
`;

const Frame6 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 38px;
  align-items: center;
  padding: 6px 13px;
  margin-right: -1.64px;
  background-color: var(--blueberry);
  border-radius: 3px;
  border: 1px solid;
`;

const FindOutMore = styled.div`
  ${NotosansNormalWhite15px}
  width: fit-content;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  text-align: center;
  letter-spacing: 0;
  line-height: 22.5px;
  white-space: nowrap;
`;

const Frame7 = styled.div`
  .frame-229.frame-236 & {
    background-image: url(/img/frame-13@1x.svg);
  }
`;

const Frame8 = styled.div`
  .frame-229.frame-237 & {
    background-image: url(/img/frame-15@1x.svg);
  }
`;

const Frame9 = styled.div`
  .frame-229.frame-238 & {
    background-image: url(/img/frame-16@1x.svg);
  }
`;

const Frame10 = styled.div`
  .frame-229.frame-239 & {
    background-image: url(/img/frame-18@1x.svg);
  }
`;

export default Frame21;
