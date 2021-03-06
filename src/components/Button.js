import styled from "styled-components";

export default styled.button`
  background-color: ${(props) => (props.primary ? "#275efe" : "#bebebe")};
  border: none;
  color: white;
  margin: 5px 10px;
  padding: 16px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;
