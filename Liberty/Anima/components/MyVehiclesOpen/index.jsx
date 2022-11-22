import React from "react";
import styled from "styled-components";


function MyVehiclesOpen() {
  return (
    <MyVehiclesOpen1>
      <lottie-player
        src="https://assets7.lottiefiles.com/packages/lf20_Au6z826BEy.json"
        background="transparent"
        speed="1"
        loop
        controls
        autoplay
      ></lottie-player>
    </MyVehiclesOpen1>
  );
}

const MyVehiclesOpen1 = styled.div`
  width: 1440px;
  height: 3352px;
  border: 1px none;
`;

const MyVehiclesOpen2 = styled.div`
  width: 1440px;
  height: 3352px;
  border: 1px none;
`;

export default MyVehiclesOpen;
