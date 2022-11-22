import React from "react";
import Frame22 from "../Frame22";
import styled from "styled-components";
import { NotosansNormalWhite14px, NotosansNormalWhite15px, RobotoNormalWhite32px } from "../../styledMixins";


function Frame23(props) {
  const { className, frame22Props } = props;

  return (
    <Frame className={`frame-244 ${className || ""}`}>
      <Frame1 className="frame-245">
        <Frame2 className="frame-246">
          <Frame3 className="frame-247">
            <Frame22>{frame22Props.children}</Frame22>
            <Frame4 className="frame-248">
              <Frame5 className="frame-249">
                <Frame6 className="frame-250">
                  <Frame7 className="frame-251">
                    <Frame8 className="frame-252">
                      <Frame9 className="frame-253">
                        <Text4 className="text-4"></Text4>
                      </Frame9>
                    </Frame8>
                  </Frame7>
                  <WhatsAppHiTo071 className="whats-app-hi-to-071">
                    WhatsApp &#39;Hi&#39; to 071 618 6572&nbsp;&nbsp;Select option 3
                  </WhatsAppHiTo071>
                </Frame6>
              </Frame5>
              <Frame10 className="frame-254">
                <Frame11 className="frame-255">
                  <ChatNow className="chat-now">Chat now</ChatNow>
                </Frame11>
              </Frame10>
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
  background-image: url(/img/frame-14@1x.svg);
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
  gap: 24px;
  padding: 8px 8px 24px;
  position: absolute;
  top: 176px;
  left: 12px;
  border: 1px none;
`;

const Frame5 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border: 1px none;
`;

const Frame6 = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  border: 1px none;
`;

const Frame7 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 54px;
  align-items: flex-start;
  padding: 4px 12px 11.609375px 4px;
  border: 1px none;
`;

const Frame8 = styled.div`
  display: flex;
  flex-direction: column;
  width: 28px;
  height: 38px;
  align-items: flex-start;
  padding: 3px 0px 0px;
  border: 1px none;
`;

const Frame9 = styled.div`
  position: relative;
  min-width: 28px;
  height: 32px;
  border: 1px none;
`;

const Text4 = styled.div`
  ${RobotoNormalWhite32px}
  position: absolute;
  top: -4px;
  left: 0;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: 38.4px;
  white-space: nowrap;
`;

const WhatsAppHiTo071 = styled.p`
  ${NotosansNormalWhite14px}
  flex: 1;
  height: 54px;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame10 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 657.640625px 0px 0px;
  align-self: stretch;
  border: 1px none;
`;

const Frame11 = styled.div`
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

const ChatNow = styled.div`
  ${NotosansNormalWhite15px}
  width: fit-content;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  text-align: center;
  letter-spacing: 0;
  line-height: 22.5px;
  white-space: nowrap;
`;

const Frame12 = styled.div`
  .frame-244.frame-256 & {
    background-image: url(/img/frame-17@1x.svg);
  }
`;

export default Frame23;
