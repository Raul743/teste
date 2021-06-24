import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 40%;
  min-height: 45vh;
  top: 50%;
  left: 50%;
  padding: 20px 40px;
  background-color: #fff;
  transform: translate(-50%, -50%);
  z-index: 99;
  border-radius: 6px;
  box-sizing: content-border;
`;

export const Content = styled.div`
  margin-bottom: 10px;
`;

export const ContainerButtons = styled.div`
  float: right;
  margin-top: 10px;
`;

export const Header = styled.h1`
  color: rgb(13, 26, 117);
  margin-bottom: 20px;
  font-size: 26px;
`;

export const ContentInline = styled.div`
  display: inline-block;
  margin-left: 10px;
`;

export const Label = styled.label`
  margin: 0;
  padding: 0;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 3px;
  margin: 0;
  text-indent: 15px;
  background-color: #ebebeb;
`;

export const ButtonGreen = styled.input`
  border: none;
  border-radius: 3px;
  padding: 7px 30px;
  color: #fff;
  background-color: #08be57;
`;

export const ButtonRed = styled.input`
  border: none;
  border-radius: 3px;
  padding: 7px 30px;
  color: #fff;
  background-color: #ff5f58;
`;
