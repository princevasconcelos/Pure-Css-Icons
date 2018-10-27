import React from "react";
import styled from "styled-components";

const Pentagon = styled.div`
  position: relative;

  margin-top: 20px;

  width: 100px;
  height: 0;

  border-top: 50px solid crimson;
  border-right: 25px solid transparent;
  border-left: 25px solid transparent;

  &:after {
    content: "";
    position: absolute;

    width: 0;
    height: 0;

    top: -90px;
    right: -25px;

    border-right: 50px solid transparent;
    border-bottom: 40px solid crimson;
    border-left: 50px solid transparent;
  }
`;

export default Pentagon;
