import React from "react";
import Margin from "../Margin";
import Frame2 from "../Frame2";
import Frame5 from "../Frame5";
import Frame7 from "../Frame7";
import Frame8 from "../Frame8";
import Frame9 from "../Frame9";
import Frame10 from "../Frame10";
import Frame11 from "../Frame11";
import Margin2 from "../Margin2";
import Frame12 from "../Frame12";
import Frame13 from "../Frame13";
import Frame15 from "../Frame15";
import Frame14 from "../Frame14";
import Frame16 from "../Frame16";
import Frame17 from "../Frame17";
import Frame18 from "../Frame18";
import Frame20 from "../Frame20";
import Frame19 from "../Frame19";
import Frame21 from "../Frame21";
import Frame23 from "../Frame23";
import Frame24 from "../Frame24";
import Frame25 from "../Frame25";
import Margin3 from "../Margin3";
import Frame26 from "../Frame26";
import styled from "styled-components";
import {
  NotosansNormalBlueberry14px,
  NotosansNormalAlabaster18px,
  NotosansBoldVulcan24px,
  NotosansNormalWhite14px,
  NotosansNormalWhite14px2,
  NotosansMediumGulfBlue16px,
  RobotoNormalWhite20px,
  Fontawesome5brandsRegularNormalWhit,
  NotosansMediumWhite16px,
} from "../../styledMixins";
import "./Frame.css";

function Frame(props) {
  const {
    howToClaim,
    findAForm,
    fundFactSheets,
    unclaimedBenefits,
    helpfulResources,
    rectangle1,
    text1,
    rectangle2,
    personal,
    business,
    talkToAnAdviser,
    mediaInsights1,
    aboutUs1,
    login,
    getComprehensiveCo1,
    rectangle3,
    rectangle4,
    rectangle5,
    rectangle6,
    rectangle7,
    rectangle8,
    rectangle9,
    rectangle10,
    getComprehensiveCo2,
    rectangle11,
    rectangle12,
    rectangle13,
    rectangle14,
    rectangle15,
    advice,
    service,
    completeTheFormFo,
    usedToCheckWhethe,
    frame,
    spanText1,
    spanText2,
    callMeBack,
    aboutUs2,
    ourStory,
    whyLiberty,
    csiInitiatives,
    sustainability,
    mediaInsights2,
    researchAndInsightsHub,
    careers,
    personalInvest,
    saveForRetirement,
    invest,
    investForIncome,
    investOffshore,
    investForEducation,
    stash,
    generalEnquiries,
    phone,
    infoLibertyCoZa,
    spanText3,
    spanText4,
    complaintResolution,
    libertyInAfrica,
    place,
    governance,
    privacyAndSecurity,
    yourFundAndTrustees,
    text6,
    text7,
    text8,
    text9,
    text10,
    libertyGroupLimite,
    spanText5,
    spanText6,
    spanText7,
    frame21Props,
    frame51Props,
    frame52Props,
    frame53Props,
    frame81Props,
    frame22Props,
    frame82Props,
    frame83Props,
    frame84Props,
    frame7Props,
    frame85Props,
    frame91Props,
    frame101Props,
    frame102Props,
    frame111Props,
    frame112Props,
    frame131Props,
    frame151Props,
    frame152Props,
    frame153Props,
    frame132Props,
    frame133Props,
    frame141Props,
    frame142Props,
    frame143Props,
    frame161Props,
    frame171Props,
    frame172Props,
    frame181Props,
    frame201Props,
    frame202Props,
    frame203Props,
    frame182Props,
    frame191Props,
    frame192Props,
    frame193Props,
    frame162Props,
    frame211Props,
    frame212Props,
    frame231Props,
    frame213Props,
    frame214Props,
    frame232Props,
    frame215Props,
    frame92Props,
    frame241Props,
    frame242Props,
    frame243Props,
    frame244Props,
    frame251Props,
    frame252Props,
    margin31Props,
    frame253Props,
    frame254Props,
    frame26Props,
    margin32Props,
  } = props;

  return (
    <div className="frame screen">
      <Frame1>
        <Frame3>
          <Frame4>
            <Frame6>
              <Frame22>
                <Frame27>
                  <Frame28>
                    <HowToClaim>{howToClaim}</HowToClaim>
                  </Frame28>
                </Frame27>
                <Frame29>
                  <Frame30>
                    <FindAForm>{findAForm}</FindAForm>
                  </Frame30>
                </Frame29>
                <Frame29>
                  <Frame31>
                    <HowToClaim>{fundFactSheets}</HowToClaim>
                  </Frame31>
                </Frame29>
                <Frame29>
                  <Frame32>
                    <FindAForm>{unclaimedBenefits}</FindAForm>
                  </Frame32>
                </Frame29>
                <Frame29>
                  <Frame33>
                    <FindAForm>{helpfulResources}</FindAForm>
                  </Frame33>
                </Frame29>
                <Frame29>
                  <Frame34>
                    <IconCall src={rectangle1} alt="icon-call" />
                  </Frame34>
                </Frame29>
                <Frame35>
                  <Frame36>
                    <Frame37>
                      <Text1>{text1}</Text1>
                    </Frame37>
                  </Frame36>
                </Frame35>
              </Frame22>
            </Frame6>
          </Frame4>
        </Frame3>
        <Frame38>
          <Frame39>
            <FrameContainer>
              <Frame40>
                <Rectangle src={rectangle2} alt="Rectangle" />
              </Frame40>
              <Frame41>
                <Frame42>
                  <Frame43>
                    <Frame44>
                      <Personal>{personal}</Personal>
                      <Margin />
                    </Frame44>
                  </Frame43>
                  <Frame45>
                    <Frame44>
                      <Personal>{business}</Personal>
                      <Margin />
                    </Frame44>
                  </Frame45>
                  <Frame46>
                    <Personal>{talkToAnAdviser}</Personal>
                  </Frame46>
                  <Frame46>
                    <Personal>{mediaInsights1}</Personal>
                  </Frame46>
                  <Frame47>
                    <Personal>{aboutUs1}</Personal>
                  </Frame47>
                </Frame42>
              </Frame41>
              <Frame48>
                <Frame49>
                  <Login>{login}</Login>
                  <Margin1>
                    <Rectangle1></Rectangle1>
                  </Margin1>
                </Frame49>
              </Frame48>
            </FrameContainer>
          </Frame39>
        </Frame38>
      </Frame1>
      <Frame50>
        <Frame51>
          <FrameContainer1>
            <Frame52>
              <Frame53>
                <Frame2 frame3Props={frame21Props.frame3Props} />
                <Frame5 frame3Props={frame51Props.frame3Props} frame6Props={frame51Props.frame6Props} />
                <Frame5
                  className={frame52Props.className}
                  frame3Props={frame52Props.frame3Props}
                  frame6Props={frame52Props.frame6Props}
                />
                <Frame5
                  className={frame53Props.className}
                  frame3Props={frame53Props.frame3Props}
                  frame6Props={frame53Props.frame6Props}
                />
                <Frame7 />
                <Frame8 frame3Props={frame81Props.frame3Props} frame6Props={frame81Props.frame6Props} />
                <Frame2 className={frame22Props.className} frame3Props={frame22Props.frame3Props} />
                <Frame8
                  className={frame82Props.className}
                  frame3Props={frame82Props.frame3Props}
                  frame6Props={frame82Props.frame6Props}
                />
                <Frame8
                  className={frame83Props.className}
                  frame3Props={frame83Props.frame3Props}
                  frame6Props={frame83Props.frame6Props}
                />
                <Frame8
                  className={frame84Props.className}
                  frame3Props={frame84Props.frame3Props}
                  frame6Props={frame84Props.frame6Props}
                />
                <Frame7 className={frame7Props.className} />
                <Frame8
                  className={frame85Props.className}
                  frame3Props={frame85Props.frame3Props}
                  frame6Props={frame85Props.frame6Props}
                />
              </Frame53>
            </Frame52>
            <Frame54>
              <Frame9 />
              <Frame9 className={frame91Props.className} />
              <Frame9 />
              <Frame9 />
              <Frame9 />
              <Frame9 />
            </Frame54>
          </FrameContainer1>
          <Frame55>
            <Frame10>{frame101Props.children}</Frame10>
            <Frame10 className={frame102Props.className}>{frame102Props.children}</Frame10>
          </Frame55>
        </Frame51>
      </Frame50>
      <Frame56>
        <Frame57>
          <Frame58>
            <GetComprehensiveCo>{getComprehensiveCo1}</GetComprehensiveCo>
            <Frame59>
              <FrameContainer2>
                <Frame60>
                  <Frame61>
                    <Frame62>
                      <Frame63>
                        <Rectangle2 src={rectangle3} alt="Rectangle" />
                        <FrameContainer3>
                          <Frame11
                            disabilityCover={frame111Props.disabilityCover}
                            becomingTemporarily={frame111Props.becomingTemporarily}
                          />
                          <Frame64>
                            <Frame65>
                              <Rectangle3 src={rectangle4} alt="Rectangle" />
                              <Margin2 />
                            </Frame65>
                          </Frame64>
                        </FrameContainer3>
                      </Frame63>
                    </Frame62>
                    <Frame62>
                      <Frame66>
                        <Rectangle4></Rectangle4>
                        <Frame11
                          disabilityCover={frame112Props.disabilityCover}
                          becomingTemporarily={frame112Props.becomingTemporarily}
                          className={frame112Props.className}
                        />
                        <Frame12 />
                      </Frame66>
                    </Frame62>
                    <Frame13 frame14Props={frame131Props.frame14Props} />
                    <Frame15 rectangle1={frame151Props.rectangle1} frame14Props={frame151Props.frame14Props} />
                    <Frame15 rectangle1={frame152Props.rectangle1} frame14Props={frame152Props.frame14Props} />
                    <Frame15 rectangle1={frame153Props.rectangle1} frame14Props={frame153Props.frame14Props} />
                    <Frame13 frame14Props={frame132Props.frame14Props} />
                    <Frame13 frame14Props={frame133Props.frame14Props} />
                    <Frame62>
                      <Frame66>
                        <Rectangle5 src={rectangle5} alt="Rectangle" />
                        <Frame14
                          shortTermInsurance={frame141Props.shortTermInsurance}
                          libertySComprehens={frame141Props.libertySComprehens}
                          className={frame141Props.className}
                        />
                        <Frame67>
                          <Frame65>
                            <Rectangle6 src={rectangle6} alt="Rectangle" />
                            <Margin2 />
                          </Frame65>
                        </Frame67>
                      </Frame66>
                    </Frame62>
                    <Frame62>
                      <Frame66>
                        <Rectangle7 src={rectangle7} alt="Rectangle" />
                        <Frame14
                          shortTermInsurance={frame142Props.shortTermInsurance}
                          libertySComprehens={frame142Props.libertySComprehens}
                          className={frame142Props.className}
                        />
                        <Frame67>
                          <Frame65>
                            <Rectangle8 src={rectangle8} alt="Rectangle" />
                            <Margin2 />
                          </Frame65>
                        </Frame67>
                      </Frame66>
                    </Frame62>
                    <Frame62>
                      <Frame66>
                        <Rectangle9 src={rectangle9} alt="Rectangle" />
                        <Frame14
                          shortTermInsurance={frame143Props.shortTermInsurance}
                          libertySComprehens={frame143Props.libertySComprehens}
                          className={frame143Props.className}
                        />
                        <Frame67>
                          <Frame65>
                            <Rectangle10 src={rectangle10} alt="Rectangle" />
                            <Margin2 />
                          </Frame65>
                        </Frame67>
                      </Frame66>
                    </Frame62>
                  </Frame61>
                </Frame60>
                <Frame16 frame9Props={frame161Props.frame9Props} />
              </FrameContainer2>
            </Frame59>
          </Frame58>
          <Frame68>
            <GetComprehensiveCo>{getComprehensiveCo2}</GetComprehensiveCo>
            <Frame59>
              <FrameContainer2>
                <Frame60>
                  <Frame69>
                    <Frame62>
                      <Frame70>
                        <Frame71>
                          <Rectangle11 src={rectangle11} alt="Rectangle" />
                          <Frame17
                            investmentSolutions={frame171Props.investmentSolutions}
                            theLibertyInvestme={frame171Props.theLibertyInvestme}
                          />
                        </Frame71>
                      </Frame70>
                    </Frame62>
                    <Frame62>
                      <Frame70>
                        <Frame71>
                          <Rectangle12 src={rectangle12} alt="Rectangle" />
                          <Frame17
                            investmentSolutions={frame172Props.investmentSolutions}
                            theLibertyInvestme={frame172Props.theLibertyInvestme}
                          />
                        </Frame71>
                      </Frame70>
                    </Frame62>
                    <Frame18 frame19Props={frame181Props.frame19Props} />
                    <Frame20 rectangle={frame201Props.rectangle} frame19Props={frame201Props.frame19Props} />
                    <Frame20 rectangle={frame202Props.rectangle} frame19Props={frame202Props.frame19Props} />
                    <Frame20 rectangle={frame203Props.rectangle} frame19Props={frame203Props.frame19Props} />
                    <Frame18 frame19Props={frame182Props.frame19Props} />
                    <Frame62>
                      <Frame70>
                        <Frame72>
                          <Rectangle13 src={rectangle13} alt="Rectangle" />
                          <Frame19
                            consultingAndActuarialSolutions={frame191Props.consultingAndActuarialSolutions}
                            atLibertyCorporate={frame191Props.atLibertyCorporate}
                          />
                        </Frame72>
                      </Frame70>
                    </Frame62>
                    <Frame62>
                      <Frame70>
                        <Frame72>
                          <Rectangle14 src={rectangle14} alt="Rectangle" />
                          <Frame19
                            consultingAndActuarialSolutions={frame192Props.consultingAndActuarialSolutions}
                            atLibertyCorporate={frame192Props.atLibertyCorporate}
                          />
                        </Frame72>
                      </Frame70>
                    </Frame62>
                    <Frame62>
                      <Frame70>
                        <Frame72>
                          <Rectangle15 src={rectangle15} alt="Rectangle" />
                          <Frame19
                            consultingAndActuarialSolutions={frame193Props.consultingAndActuarialSolutions}
                            atLibertyCorporate={frame193Props.atLibertyCorporate}
                          />
                        </Frame72>
                      </Frame70>
                    </Frame62>
                  </Frame69>
                </Frame60>
                <Frame16 frame9Props={frame162Props.frame9Props} />
              </FrameContainer2>
            </Frame59>
          </Frame68>
        </Frame57>
        <Frame73>
          <Frame74>
            <Frame75>
              <Frame76>
                <FrameContainer4>
                  <Frame77>
                    <Frame78>
                      <Frame21 frame22Props={frame211Props.frame22Props} />
                      <Frame21 className={frame212Props.className} frame22Props={frame212Props.frame22Props} />
                      <Frame23 frame22Props={frame231Props.frame22Props} />
                      <Frame21 className={frame213Props.className} frame22Props={frame213Props.frame22Props} />
                      <Frame21 className={frame214Props.className} frame22Props={frame214Props.frame22Props} />
                      <Frame23 className={frame232Props.className} frame22Props={frame232Props.frame22Props} />
                      <Frame21 className={frame215Props.className} frame22Props={frame215Props.frame22Props} />
                    </Frame78>
                  </Frame77>
                  <Frame79>
                    <Frame9 />
                    <Frame9 className={frame92Props.className} />
                    <Frame9 />
                  </Frame79>
                </FrameContainer4>
              </Frame76>
            </Frame75>
            <Frame80>
              <Frame81>
                <Frame82>
                  <Frame83>
                    <Frame84>
                      <Frame85>
                        <Advice>{advice}</Advice>
                      </Frame85>
                    </Frame84>
                    <Frame86>
                      <Frame87>
                        <Service>{service}</Service>
                      </Frame87>
                    </Frame86>
                  </Frame83>
                  <Frame88>
                    <Frame89>
                      <CompleteTheFormFo>{completeTheFormFo}</CompleteTheFormFo>
                      <Frame90>
                        <Frame91>
                          <Frame92>
                            <Frame93>
                              <Frame94>
                                <Frame95>
                                  <Frame24>{frame241Props.children}</Frame24>
                                </Frame95>
                              </Frame94>
                            </Frame93>
                            <Frame93>
                              <Frame94>
                                <Frame96>
                                  <Frame24 className={frame242Props.className}>{frame242Props.children}</Frame24>
                                </Frame96>
                              </Frame94>
                            </Frame93>
                            <Frame93>
                              <Frame94>
                                <Frame97>
                                  <Frame24 className={frame243Props.className}>{frame243Props.children}</Frame24>
                                </Frame97>
                              </Frame94>
                            </Frame93>
                            <Frame93>
                              <Frame98>
                                <OverlapGroup>
                                  <Frame99>
                                    <Frame100>
                                      <Frame24 className={frame244Props.className}>{frame244Props.children}</Frame24>
                                    </Frame100>
                                  </Frame99>
                                  <UsedToCheckWhethe>{usedToCheckWhethe}</UsedToCheckWhethe>
                                </OverlapGroup>
                              </Frame98>
                            </Frame93>
                            <Frame93>
                              <Frame101>
                                <Frame102>
                                  <Frame103>
                                    <Rectangle16></Rectangle16>
                                  </Frame103>
                                </Frame102>
                              </Frame101>
                            </Frame93>
                            <Frame104>
                              <Frame105>
                                <Frame106>
                                  <Frame107>
                                    <Frame108 style={{ backgroundImage: `url(${frame})` }}></Frame108>
                                    <IAcceptThePrivacy>
                                      <Span0>{spanText1}</Span0>
                                      <span className="notosans-normal-blueberry-14px">{spanText2}</span>
                                    </IAcceptThePrivacy>
                                  </Frame107>
                                </Frame106>
                              </Frame105>
                            </Frame104>
                            <Frame93>
                              <Frame109>
                                <CallMeBack>{callMeBack}</CallMeBack>
                              </Frame109>
                            </Frame93>
                          </Frame92>
                        </Frame91>
                      </Frame90>
                    </Frame89>
                  </Frame88>
                </Frame82>
              </Frame81>
            </Frame80>
          </Frame74>
        </Frame73>
      </Frame56>
      <Frame110>
        <Frame111>
          <Frame112>
            <FrameContainer5>
              <Frame113>
                <Frame114>
                  <AboutUs>{aboutUs2}</AboutUs>
                  <Frame115>
                    <OurStory>{ourStory}</OurStory>
                    <WhyLiberty>{whyLiberty}</WhyLiberty>
                    <WhyLiberty>{csiInitiatives}</WhyLiberty>
                    <WhyLiberty>{sustainability}</WhyLiberty>
                    <WhyLiberty>{mediaInsights2}</WhyLiberty>
                    <WhyLiberty>{researchAndInsightsHub}</WhyLiberty>
                    <WhyLiberty>{careers}</WhyLiberty>
                  </Frame115>
                </Frame114>
                <Frame25 personalInsure={frame251Props.personalInsure} frame26Props={frame251Props.frame26Props} />
                <Frame117>
                  <AboutUs>{personalInvest}</AboutUs>
                  <Frame115>
                    <OurStory>{saveForRetirement}</OurStory>
                    <WhyLiberty>{invest}</WhyLiberty>
                    <WhyLiberty>{investForIncome}</WhyLiberty>
                    <WhyLiberty>{investOffshore}</WhyLiberty>
                    <WhyLiberty>{investForEducation}</WhyLiberty>
                    <WhyLiberty>{stash}</WhyLiberty>
                  </Frame115>
                </Frame117>
                <Frame25
                  personalInsure={frame252Props.personalInsure}
                  className={frame252Props.className}
                  frame26Props={frame252Props.frame26Props}
                />
                <Frame118>
                  <Margin3>{margin31Props.children}</Margin3>
                  <Frame119>
                    <Frame116>
                      <GeneralEnquiries>{generalEnquiries}</GeneralEnquiries>
                      <Phone>{phone}</Phone>
                      <Infolibertycoza>{infoLibertyCoZa}</Infolibertycoza>
                      <WhatsApp>
                        <span className="roboto-normal-white-20px">{spanText3}</span>
                        <span className="notosans-normal-white-14px">{spanText4}</span>
                      </WhatsApp>
                    </Frame116>
                    <Frame120>
                      <Login>{complaintResolution}</Login>
                    </Frame120>
                  </Frame119>
                </Frame118>
              </Frame113>
              <Frame121>
                <Frame25
                  personalInsure={frame253Props.personalInsure}
                  className={frame253Props.className}
                  frame26Props={frame253Props.frame26Props}
                />
                <Frame25
                  personalInsure={frame254Props.personalInsure}
                  className={frame254Props.className}
                  frame26Props={frame254Props.frame26Props}
                />
                <Frame122>
                  <AboutUs>{libertyInAfrica}</AboutUs>
                  <Frame26 {...frame26Props} />
                </Frame122>
                <Frame123>
                  <AboutUs>{place}</AboutUs>
                  <Frame115>
                    <OurStory>{governance}</OurStory>
                    <WhyLiberty>{privacyAndSecurity}</WhyLiberty>
                    <WhyLiberty>{yourFundAndTrustees}</WhyLiberty>
                  </Frame115>
                </Frame123>
                <Frame124>
                  <Margin3>{margin32Props.children}</Margin3>
                  <Frame125>
                    <Frame126>
                      <Text6>{text6}</Text6>
                      <Text6>{text7}</Text6>
                      <Text8>{text8}</Text8>
                      <Text9>{text9}</Text9>
                      <Text9>{text10}</Text9>
                    </Frame126>
                  </Frame125>
                </Frame124>
              </Frame121>
            </FrameContainer5>
            <Frame127>
              <OverlapGroup1>
                <LibertyGroupLimite>{libertyGroupLimite}</LibertyGroupLimite>
                <Frame128>
                  <UserAgreementSitemap>
                    <span className="notosans-normal-sea-serpent-14px">{spanText5}</span>
                    <span className="notosans-normal-white-14px">{spanText6}</span>
                    <span className="notosans-normal-sea-serpent-14px">{spanText7}</span>
                  </UserAgreementSitemap>
                </Frame128>
              </OverlapGroup1>
            </Frame127>
          </Frame112>
        </Frame111>
      </Frame110>
    </div>
  );
}

const Frame1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--gulf-blue);
  border: 1px none;
`;

const Frame3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 361.5px;
  align-self: stretch;
  z-index: 1;
  background-color: #f0f1f4;
  border: 1px none;
`;

const Frame4 = styled.div`
  display: flex;
  flex-direction: column;
  width: 1197px;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 15px;
  border: 1px none;
`;

const Frame6 = styled.div`
  display: flex;
  flex-direction: column;
  height: 52px;
  align-items: flex-end;
  padding: 0px 0px 0px 412px;
  align-self: stretch;
  border: 1px none;
`;

const Frame22 = styled.div`
  display: flex;
  width: fit-content;
  height: 52px;
  align-items: flex-start;
  padding: 16px 0px;
  border: 1px none;
`;

const Frame27 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  padding: 0px 1px;
  align-self: stretch;
  border-right-width: 1px;
  border-right-style: solid;
  border-left-width: 1px;
  border-left-style: solid;
  border-color: var(--star-dust);
`;

const Frame28 = styled.div`
  position: relative;
  flex: 1;
  min-width: 117px;
  height: 20px;
  border: 1px none;
`;

const HowToClaim = styled.div`
  ${NotosansMediumGulfBlue16px}
  position: absolute;
  top: -2px;
  left: 7px;
  text-shadow: 0px 4px 12px #0000000d;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame29 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  padding: 0px 1px 0px 0px;
  align-self: stretch;
  border-right-width: 1px;
  border-right-style: solid;
  border-color: var(--star-dust);
`;

const Frame30 = styled.div`
  position: relative;
  flex: 1;
  min-width: 105px;
  height: 20px;
  border: 1px none;
`;

const FindAForm = styled.div`
  ${NotosansMediumGulfBlue16px}
  position: absolute;
  top: -2px;
  left: 8px;
  text-shadow: 0px 4px 12px #0000000d;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame31 = styled.div`
  position: relative;
  flex: 1;
  min-width: 144px;
  height: 20px;
  border: 1px none;
`;

const Frame32 = styled.div`
  position: relative;
  flex: 1;
  min-width: 163px;
  height: 20px;
  border: 1px none;
`;

const Frame33 = styled.div`
  position: relative;
  flex: 1;
  min-width: 154px;
  height: 20px;
  border: 1px none;
`;

const Frame34 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  justify-content: center;
  padding: 8px;
  flex: 1;
  border: 1px none;
`;

const IconCall = styled.img`
  min-width: 17px;
  height: 17px;
  margin-top: -6.5px;
  margin-bottom: -6.5px;
  object-fit: cover;
`;

const Frame35 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  align-self: stretch;
  border: 1px none;
`;

const Frame36 = styled.div`
  flex: 1;
  min-width: 32px;
  height: 20px;
  border: 1px none;
`;

const Frame37 = styled.div`
  display: flex;
  flex-direction: column;
  width: 32px;
  height: 32px;
  align-items: center;
  padding: 8px;
  position: relative;
  top: -6px;
  border: 1px none;
`;

const Text1 = styled.div`
  width: fit-content;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  font-family: var(--font-family-roboto);
  font-weight: 400;
  color: var(--gulf-blue);
  font-size: var(--font-size-m);
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Frame38 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 361.5px;
  align-self: stretch;
  z-index: 0;
  border: 1px none;
`;

const Frame39 = styled.div`
  min-width: 1197px;
  height: 100px;
  border: 1px none;
`;

const FrameContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 1182px;
`;

const Frame40 = styled.div`
  display: flex;
  margin-top: 1px;
  flex-direction: column;
  width: 140px;
  height: 65px;
  align-items: flex-start;
  border: 1px none;
`;

const Rectangle = styled.img`
  align-self: stretch;
  min-width: 140px;
  height: 53px;
  object-fit: cover;
`;

const Frame41 = styled.div`
  display: flex;
  flex-direction: column;
  width: 944px;
  height: 100px;
  align-items: flex-end;
  justify-content: center;
  padding: 0px 0px 0px 307.65625px;
  border: 1px none;
`;

const Frame42 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  padding: 0px 12px 0px 0px;
  border: 1px none;
`;

const Frame43 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  padding: 0px 4px;
  border: 1px none;
`;

const Frame44 = styled.div`
  display: flex;
  width: fit-content;
  height: 38px;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  padding: 8px;
  position: relative;
  border: 1px none;
`;

const Personal = styled.div`
  ${NotosansMediumWhite16px}
  width: fit-content;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame45 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 38px;
  align-items: flex-start;
  padding: 0px 8px 0px 4px;
  border: 1px none;
`;

const Frame46 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 38px;
  align-items: center;
  padding: 8px 16px 8px 8px;
  border: 1px none;
`;

const Frame47 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  padding: 8px;
  border: 1px none;
`;

const Frame48 = styled.div`
  display: flex;
  margin-left: 8px;
  margin-top: 1px;
  flex-direction: column;
  width: 90px;
  height: 33px;
  align-items: flex-end;
  padding: 1px 7px 7px 18.0625px;
  border-radius: 3px;
  border: 1px none;
`;

const Frame49 = styled.div`
  display: flex;
  width: fit-content;
  height: 31px;
  align-items: flex-start;
  gap: 4px;
  padding: 6px;
  margin-bottom: -6px;
  border-radius: 2px;
  border: 1px solid;
  border-color: #c5c8d3;
`;

const Login = styled.div`
  ${NotosansNormalWhite14px}
  width: fit-content;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: normal;
`;

const Margin1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 8px;
  height: 11.25px;
  align-items: flex-start;
  padding: 7.25px 0px 0px;
  border: 1px none;
`;

const Rectangle1 = styled.div`
  flex: 1;
  align-self: stretch;
  min-width: 8px;
  height: 4px;
  background-color: var(--white-2);
  border: 1px none;
  box-shadow: inset 4.1875px 0px 0px transparent, inset -4.1875px 0px 0px transparent, inset 0px 4.1875px 0px #ffffff;
`;

const Frame50 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 35px;
  align-self: stretch;
  border: 1px none;
`;

const Frame51 = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 1920px;
  height: 434px;
  border: 1px none;
`;

const FrameContainer1 = styled.div`
  position: absolute;
  width: 1920px;
  height: 400px;
  top: 0;
  left: 0;
`;

const Frame52 = styled.div`
  position: absolute;
  width: 1920px;
  height: 400px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  border: 1px none;
`;

const Frame53 = styled.div`
  display: flex;
  position: relative;
  margin-left: -7680px;
  width: 23040px;
  align-items: flex-start;
  border: 1px none;
`;

const Frame54 = styled.div`
  display: flex;
  width: 1197px;
  align-items: flex-start;
  padding: 0px 0px 4px;
  position: absolute;
  top: 360px;
  left: 362px;
  border: 1px none;
`;

const Frame55 = styled.div`
  position: absolute;
  height: 1px;
  top: 410px;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 1920px;
  gap: 1800px;
  border: 1px none;
`;

const Frame56 = styled.div`
  display: flex;
  flex-direction: column;
  width: 1920px;
  align-items: flex-start;
  padding: 0px 361.5px 20px;
  border: 1px none;
`;

const Frame57 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  z-index: 1;
  border: 1px none;
`;

const Frame58 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  align-self: stretch;
  z-index: 1;
  border: 1px none;
`;

const GetComprehensiveCo = styled.p`
  ${NotosansBoldVulcan24px}
  align-self: stretch;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: normal;
`;

const UserAgreementSitemap = styled.div`
  ${NotosansNormalWhite14px2}
  align-self: stretch;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame59 = styled.div`
  align-self: stretch;
  min-width: 1197px;
  height: 400px;
  border: 1px none;
`;

const FrameContainer2 = styled.div`
  position: relative;
  width: 1205px;
  height: 400px;
  left: -8px;
`;

const Frame60 = styled.div`
  position: absolute;
  width: 1197px;
  height: 400px;
  top: 0;
  left: 8px;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  border: 1px none;
`;

const Frame61 = styled.div`
  display: flex;
  position: relative;
  margin-left: -1197px;
  width: 4389px;
  align-items: flex-start;
  border: 1px none;
`;

const Frame62 = styled.div`
  display: flex;
  flex-direction: column;
  width: 399px;
  align-items: flex-start;
  padding: 0px 27px 0px 0px;
  border: 1px none;
`;

const Frame63 = styled.div`
  position: relative;
  min-width: 372px;
  height: 368px;
  background-color: var(--blueberry);
  border-radius: 4px;
  border: 1px none;
  box-shadow: 0px -5px 15px #000000;
`;

const Rectangle2 = styled.img`
  position: absolute;
  width: 372px;
  height: 123px;
  top: 8218px;
  left: 11906px;
  object-fit: cover;
`;

const FrameContainer3 = styled.div`
  position: absolute;
  width: 372px;
  top: 123px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 245px;
`;

const Frame64 = styled.div`
  display: flex;
  flex-direction: column;
  width: 372px;
  align-items: flex-start;
  padding: 12px 198px 16px 20px;
  background-color: var(--blueberry);
  border-radius: 0px 0px 3px 3px;
  border: 1px none;
`;

const Frame65 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  margin-right: -1px;
  border: 1px none;
`;

const Rectangle3 = styled.img`
  min-width: 24px;
  height: 25px;
  margin-bottom: -7891px;
  margin-right: -11755.5px;
  object-fit: cover;
`;

const Frame66 = styled.div`
  display: flex;
  flex-direction: column;
  width: 372px;
  height: 368px;
  align-items: flex-start;
  position: relative;
  background-color: var(--blueberry);
  border-radius: 4px;
  border: 1px none;
  box-shadow: 0px -5px 15px #000000;
`;

const Rectangle4 = styled.div`
  align-self: stretch;
  min-width: 372px;
  height: 1px;
  background-color: var(--alto);
  border-radius: 3px 3px 0px 0px;
  border: 1px none;
`;

const Rectangle5 = styled.img`
  align-self: stretch;
  min-width: 372px;
  height: 123px;
  margin-bottom: -7973px;
  margin-right: -8714.5px;
  object-fit: cover;
`;

const Frame67 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 198px 16px 20px;
  align-self: stretch;
  background-color: var(--blueberry);
  border-radius: 0px 0px 3px 3px;
  border: 1px none;
`;

const Rectangle6 = styled.img`
  min-width: 24px;
  height: 25px;
  margin-bottom: -7891px;
  margin-right: -8563.5px;
  object-fit: cover;
`;

const Rectangle7 = styled.img`
  align-self: stretch;
  min-width: 372px;
  height: 123px;
  margin-bottom: -7973px;
  margin-right: -8315.5px;
  object-fit: cover;
`;

const Rectangle8 = styled.img`
  min-width: 24px;
  height: 25px;
  margin-bottom: -7891px;
  margin-right: -8164.5px;
  object-fit: cover;
`;

const Rectangle9 = styled.img`
  align-self: stretch;
  min-width: 372px;
  height: 123px;
  margin-bottom: -7973px;
  margin-right: -7916.5px;
  object-fit: cover;
`;

const Rectangle10 = styled.img`
  min-width: 24px;
  height: 25px;
  margin-bottom: -7891px;
  margin-right: -7765.5px;
  object-fit: cover;
`;

const Frame68 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  align-self: stretch;
  z-index: 0;
  border: 1px none;
`;

const Frame69 = styled.div`
  display: flex;
  position: relative;
  margin-left: -1197px;
  width: 3990px;
  align-items: flex-start;
  border: 1px none;
`;

const Frame70 = styled.div`
  display: flex;
  flex-direction: column;
  width: 372px;
  height: 368px;
  align-items: flex-start;
  padding: 0px 0px 99.96875px;
  background-color: var(--white);
  border-radius: 4px;
  border: 1px none;
  box-shadow: 0px -5px 15px #000000;
`;

const Frame71 = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 372px;
  height: 268px;
  border: 1px none;
`;

const Rectangle11 = styled.img`
  position: absolute;
  width: 372px;
  height: 123px;
  top: 7739px;
  left: 11906px;
  object-fit: cover;
`;

const Rectangle12 = styled.img`
  position: absolute;
  width: 372px;
  height: 123px;
  top: 7739px;
  left: 11508px;
  object-fit: cover;
`;

const Frame72 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  align-self: stretch;
  margin-bottom: -0.97px;
  border: 1px none;
`;

const Rectangle13 = styled.img`
  align-self: stretch;
  min-width: 372px;
  height: 123px;
  margin-bottom: -7593px;
  margin-right: -9113.5px;
  object-fit: cover;
`;

const Rectangle14 = styled.img`
  align-self: stretch;
  min-width: 372px;
  height: 123px;
  margin-bottom: -7593px;
  margin-right: -8714.5px;
  object-fit: cover;
`;

const Rectangle15 = styled.img`
  align-self: stretch;
  min-width: 372px;
  height: 123px;
  margin-bottom: -7593px;
  margin-right: -8315.5px;
  object-fit: cover;
`;

const Frame73 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 48px 4px 16px;
  align-self: stretch;
  z-index: 0;
  border: 1px none;
`;

const Frame74 = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 1189px;
  height: 604px;
  border: 1px none;
`;

const Frame75 = styled.div`
  display: flex;
  flex-direction: column;
  width: 793px;
  align-items: flex-start;
  padding: 0px 16px 0px 0px;
  position: absolute;
  top: 0;
  left: 0;
  border: 1px none;
`;

const Frame76 = styled.div`
  align-self: stretch;
  min-width: 777px;
  height: 604px;
  border: 1px none;
`;

const FrameContainer4 = styled.div`
  position: relative;
  width: 777px;
  height: 570px;
`;

const Frame77 = styled.div`
  position: absolute;
  width: 777px;
  height: 570px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  border: 1px none;
`;

const Frame78 = styled.div`
  display: flex;
  position: relative;
  margin-left: -2329px;
  width: 5437px;
  align-items: flex-start;
  border: 1px none;
`;

const Frame79 = styled.div`
  display: flex;
  width: 777px;
  align-items: flex-start;
  padding: 0px 15px 4px;
  position: absolute;
  top: 530px;
  left: 0;
  border: 1px none;
`;

const Frame80 = styled.div`
  display: flex;
  flex-direction: column;
  width: 396px;
  height: 604px;
  align-items: flex-start;
  padding: 0px 51.328125px 0px 0px;
  position: absolute;
  top: 0;
  left: 793px;
  border: 1px none;
`;

const Frame81 = styled.div`
  display: flex;
  flex-direction: column;
  width: 345px;
  height: 568px;
  align-items: flex-start;
  padding: 10px;
  margin-right: -0.33px;
  background-color: var(--white);
  border: 1px none;
  box-shadow: 2px 2px 9px 2px #00000054;
`;

const Frame82 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3.1875px 3.1875px 3.200000047683716px;
  flex: 1;
  align-self: stretch;
  border: 1px none;
`;

const Frame83 = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px 0px 1px;
  align-self: stretch;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: #dee2e6;
`;

const Frame84 = styled.div`
  min-width: 95px;
  height: 44px;
  border: 1px none;
`;

const Frame85 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  padding: 9px 17px;
  background-color: var(--white);
  border-radius: 4px 4px 0px 0px;
  border: 1px none;
  box-shadow: inset 1px 0px 0px #dee2e6, inset -1px 0px 0px #dee2e6, inset 0px 1px 0px #dee2e6,
    inset 0px -1px 0px #ffffff;
`;

const Advice = styled.div`
  width: fit-content;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  font-family: var(--font-family-noto_sans);
  font-weight: 400;
  color: #495057;
  font-size: var(--font-size-xl);
  letter-spacing: 0;
  line-height: normal;
`;

const Frame86 = styled.div`
  min-width: 100px;
  height: 44px;
  border: 1px none;
`;

const Frame87 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  padding: 9px 17px;
  border-radius: 4px 4px 0px 0px;
  border: 1px solid;
  border-color: transparent;
`;

const Service = styled.div`
  width: fit-content;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  font-family: var(--font-family-noto_sans);
  font-weight: 400;
  color: var(--blueberry);
  font-size: var(--font-size-xl);
  letter-spacing: 0;
  line-height: normal;
`;

const Frame88 = styled.div`
  display: flex;
  flex-direction: column;
  height: 497px;
  align-items: flex-start;
  align-self: stretch;
  margin-bottom: -0.39px;
  background-color: var(--white);
  border: 1px none;
`;

const Frame89 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border: 1px none;
`;

const CompleteTheFormFo = styled.p`
  ${NotosansNormalBlueberry14px}
  align-self: stretch;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: 21px;
`;

const Frame90 = styled.div`
  display: flex;
  flex-direction: column;
  height: 439px;
  align-items: flex-start;
  align-self: stretch;
  border: 1px none;
`;

const Frame91 = styled.div`
  align-self: stretch;
  min-width: 318.625px;
  height: 439px;
  border: 1px none;
`;

const Frame92 = styled.div`
  display: flex;
  flex-direction: column;
  width: 349px;
  align-items: flex-start;
  position: relative;
  left: -15px;
  border: 1px none;
`;

const Frame93 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 15px 16px;
  align-self: stretch;
  border: 1px none;
`;

const Frame94 = styled.div`
  align-self: stretch;
  min-width: 319px;
  height: 38px;
  border: 1px none;
`;

const Frame95 = styled.div`
  position: relative;
  height: 1px;
  top: -1727px;
  left: -1171px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 1px;
  border: 1px none;
`;

const Frame96 = styled.div`
  position: relative;
  height: 1px;
  top: -1781px;
  left: -1171px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 1px;
  border: 1px none;
`;

const Frame97 = styled.div`
  position: relative;
  height: 1px;
  top: -1835px;
  left: -1171px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 1px;
  border: 1px none;
`;

const Frame98 = styled.div`
  align-self: stretch;
  min-width: 319px;
  height: 79px;
  border: 1px none;
`;

const OverlapGroup = styled.div`
  position: relative;
  width: 319px;
  height: 78px;
`;

const Frame99 = styled.div`
  position: absolute;
  height: 38px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 319px;
  border: 1px none;
`;

const Frame100 = styled.div`
  height: 1px;
  position: relative;
  margin-left: -1171px;
  margin-top: -1889px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 1px;
  border: 1px none;
`;

const UsedToCheckWhethe = styled.p`
  position: absolute;
  width: 319px;
  top: 36px;
  left: 0;
  text-shadow: 0px 4px 12px #0000000d;
  font-family: var(--font-family-noto_sans);
  font-weight: 400;
  color: #343a40;
  font-size: var(--font-size-xs);
  letter-spacing: 0;
  line-height: 21px;
`;

const Frame101 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 14.625px 0px 0px;
  align-self: stretch;
  border: 1px none;
`;

const Frame102 = styled.div`
  min-width: 304px;
  height: 78px;
  border: 1px none;
`;

const Frame103 = styled.div`
  display: flex;
  flex-direction: column;
  width: 304px;
  align-items: flex-start;
  padding: 0px 0px 4px;
  border: 1px none;
`;

const Rectangle16 = styled.div`
  align-self: stretch;
  min-width: 304px;
  height: 78px;
  background-color: var(--white-2);
  border: 1px none;
  box-shadow: inset 0px 0px 0px #000000, inset 0px 0px 0px #000000ad, inset 0px 0px 0px #000000,
    inset 0px 0px 0px #000000, inset 0px 0px 0px #000000, inset 0px 0px 0px #000000ad;
`;

const Frame104 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 15px 8px;
  align-self: stretch;
  border: 1px none;
`;

const Frame105 = styled.div`
  align-self: stretch;
  min-width: 319px;
  height: 25px;
  border: 1px none;
`;

const Frame106 = styled.div`
  position: relative;
  height: 1px;
  top: -2078px;
  left: -1171px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 1px;
  border: 1px none;
`;

const Frame107 = styled.div`
  margin-bottom: -2096px;
  display: flex;
  align-items: flex-start;
  min-width: 172px;
  gap: 11px;
  border: 1px none;
`;

const Frame108 = styled.div`
  width: 19px;
  height: 19px;
  border: 1px none;
  background-size: cover;
  background-position: 50% 50%;
`;

const IAcceptThePrivacy = styled.p`
  ${NotosansNormalWhite14px2}
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

const Span0 = styled.span`
  font-family: var(--font-family-noto_sans);
  font-weight: 400;
  color: #424757;
  font-size: var(--font-size-xs);
`;

const Frame109 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  align-self: stretch;
  background-color: var(--blueberry);
  border-radius: 5px;
  border: 2px solid;
`;

const CallMeBack = styled.div`
  align-self: stretch;
  margin-top: -2px;
  font-family: var(--font-family-noto_sans);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-s);
  text-align: center;
  letter-spacing: 0;
  line-height: 22.5px;
  white-space: nowrap;
`;

const Frame110 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background-color: #0d3393;
  border: 1px none;
`;

const Frame111 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 390px 36px;
  align-self: stretch;
  background-color: var(--gulf-blue);
  border: 1px none;
`;

const Frame112 = styled.div`
  position: relative;
  min-width: 1140px;
  height: 489px;
  border: 1px none;
`;

const FrameContainer5 = styled.div`
  position: absolute;
  width: 1155px;
  height: 428px;
  top: 0;
  left: -15px;
`;

const Frame113 = styled.div`
  display: flex;
  width: 1155px;
  align-items: flex-start;
  padding: 24px 0px 0px;
  position: absolute;
  top: 0;
  left: 0;
  border: 1px none;
`;

const Frame114 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  padding: 0px 0px 38px;
  border: 1px none;
`;

const AboutUs = styled.div`
  ${NotosansNormalAlabaster18px}
  width: 229px;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: normal;
`;

const OurStory = styled.div`
  width: 229px;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame115 = styled.div`
  ${NotosansNormalWhite14px}
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  border-radius: 4px;
  border: 1px none;
`;

const Frame116 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  border-radius: 4px;
  border: 1px none;
`;

const WhyLiberty = styled.div`
  width: 229px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame117 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  padding: 0px 0px 57px 8px;
  border: 1px none;
`;

const Frame118 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  padding: 0px 0px 36px;
  position: relative;
  border: 1px none;
`;

const Frame119 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 24px;
  padding: 0px 0px 0px 8px;
  border: 1px none;
`;

const GeneralEnquiries = styled.div`
  width: 221px;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  font-family: var(--font-family-noto_sans);
  font-weight: 400;
  color: var(--alabaster);
  font-size: var(--font-size-xs);
  letter-spacing: 0;
  line-height: normal;
`;

const Phone = styled.div`
  ${NotosansNormalWhite14px}
  width: 221px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: normal;
`;

const Infolibertycoza = styled.div`
  ${NotosansNormalBlueberry14px}
  width: 221px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: normal;
`;

const WhatsApp = styled.div`
  ${RobotoNormalWhite20px}
  width: 221px;
  height: 32px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: 24px;
`;

const Frame120 = styled.div`
  display: flex;
  flex-direction: column;
  width: 221px;
  height: 22px;
  align-items: flex-start;
  padding: 2px 77.40625px 1px 0px;
  border: 1px none;
`;

const Frame121 = styled.div`
  display: flex;
  width: 1155px;
  align-items: flex-start;
  padding: 16px 0px 0px;
  position: absolute;
  top: 227px;
  left: 0;
  border: 1px none;
`;

const Frame122 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  padding: 0px 0px 0px 8px;
  position: relative;
  border: 1px none;
`;

const Frame123 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  padding: 0px 0px 95px;
  border: 1px none;
`;

const Frame124 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  padding: 0px 0px 122px;
  position: relative;
  border: 1px none;
`;

const Frame125 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  border: 1px none;
`;

const Frame126 = styled.div`
  ${Fontawesome5brandsRegularNormalWhit}
  display: flex;
  width: 229px;
  align-items: flex-start;
  gap: 16px;
  padding: 8px;
  border: 1px none;
`;

const Text6 = styled.div`
  width: 14px;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

const Text8 = styled.div`
  width: 16px;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

const Text9 = styled.div`
  width: 12px;
  margin-top: -1px;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

const Frame127 = styled.div`
  position: absolute;
  height: 38px;
  top: 451px;
  left: -15px;
  display: flex;
  align-items: flex-start;
  min-width: 1155px;
  border: 1px none;
`;

const OverlapGroup1 = styled.div`
  width: 1155px;
  height: 36px;
  position: relative;
  margin-top: -1px;
`;

const LibertyGroupLimite = styled.p`
  ${NotosansNormalWhite14px}
  position: absolute;
  width: 1155px;
  top: 0;
  left: 0;
  text-shadow: 0px 4px 12px #0000000d;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame128 = styled.div`
  display: flex;
  flex-direction: column;
  width: 462px;
  align-items: flex-start;
  padding: 0px 0px 16px;
  position: absolute;
  top: 1px;
  left: 0;
  border: 1px none;
`;

export default Frame;
