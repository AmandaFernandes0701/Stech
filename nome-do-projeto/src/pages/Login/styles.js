import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
`;

export const LoginTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

export const LoginButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;
