import { css } from "styled-components";

export const header = css`
    display:flex;
    align-items: center;
    padding-left: 20px !important;
`;

export const item = css`
  height: 42px;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
`;

export const button = css`
    color: #fff !important;
    background: transparent !important;
    padding: 0 !important;
    margin: 0 !important;
`;

export const logoHeader = css`
  background: #1572E8 !important;
  display: flex;
  position: relative;
  height: 100%;
  max-width:240px !important;
  transition: width .300s;
`;

export const logoName = css`
  display:inline;
  margin:0;
  font-family: Roboto;
  color: #363333;
  letter-spacing: 1px;
`;

export const logoImg = css`
  display:block;
  width:35px;
  height:25px;
  vertical-align:middle;
  margin-right: 20px;
  visibility: visible;
  opacity: 1;
  transition: opacity 0.1s, display 0.1s;
`;
export const logoImgClosed = css`
  display:none;
  visibility: hidden !important;
  opacity: 0 !important;
  transition: display 0s 2s ,opacity 0.5s, visibility 0s 1s !important;
`;
export const sideBarMinimize = css`
`;
export const breakPointHeader = (value) => {
  return css`
    width:${value};

`;
}





export const divImg = css`
    width:50%;
    height:100%;
    position:relative;

    display:flex;
    align-items: center;
    padding-left:24px;
    transition: all 0.3s;
`;

export const divButton = css`
    width:50%;
    height:100%;
    position:relative;

    display:flex;
    align-items: center;
    justify-content: flex-end;
    padding-right:24px;
`;

export const divButtonClosed = css`
  width:calc(50% + 50%);
  justify-content: center !important;
  padding: 0 !important;

`;
export const divImgClosed = css`
  display: none;
  transition: display 0s 2s;
`;

export const icon = css`
  margin: 0 !important;
  padding: 0 !important;
  opacity: 1 !important;
  height: 1em;
  visibility: visible;
  opacity: 1;
  transition: opacity 0.3s;
`;
export const iconClosed = css`
  visibility: visible;
  opacity: 0;
  transition: opacity 2 s;
  &:before{
    content: "\f142" !important;
  }
`;