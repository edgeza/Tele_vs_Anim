import React from "react";
import styled from "styled-components";
import { NotosansMediumWhite20px } from "../../styledMixins";


function Frame7(props) {
  const { className } = props;

  return (
    <Frame className={`frame-178 ${className || ""}`}>
      <Frame1 className="frame-179">
        <Frame2 className="frame-180">
          <Frame3 className="frame-181">
            <Frame4 className="frame-182">
              <Frame5 className="frame-183">
                <Frame6 className="frame-184">
                  <FindOutMoreAboutOurStory className="find-out-more-about-our-story">
                    <span className="span0-3 notosans-medium-white-20px">Find out more about </span>
                    <span className="span1-3 notosans-bold-white-20px">Our Story</span>
                  </FindOutMoreAboutOurStory>
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
  background-image: url(/img/frame-4@1x.svg);
  background-size: cover;
  background-position: 50% 50%;
`;

const Frame3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 148px 0px 52px;
  flex: 1;
  align-self: stretch;
  background-color: var(--black-2);
  border: 1px none;
`;

const Frame4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  align-self: stretch;
  border: 1px none;
`;

const Frame5 = styled.div`
  flex: 1;
  align-self: stretch;
  min-width: 1920px;
  height: 200px;
  border: 1px none;
`;

const Frame6 = styled.div`
  display: flex;
  flex-direction: column;
  width: 1920px;
  align-items: center;
  padding: 48px 8px 8px;
  position: relative;
  top: 120px;
  border: 1px none;
`;

const FindOutMoreAboutOurStory = styled.p`
  ${NotosansMediumWhite20px}
  align-self: stretch;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Frame8 = styled.div`
  .frame-178.frame-185 & {
    background-image: url(/img/frame-10@1x.svg);
  }
`;

export default Frame7;
