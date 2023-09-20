'use client'
import styled from 'styled-components';

const Button = styled.button`
  text-transform: uppercase;
  font-size: 14px;
  line-height: 20px;
  color: purple;
  background: orange;
  border: 1px solid white;
  width: 100%;
  transition: all 0.3s;
  cursor: pointer;
  text-transform: uppercase;
  height: 3.8rem;
  &:hover {
    background: darkorange;
    color: white;
    border-color: black;
  }
`;

const StyledWrapper = styled.div`
  background: white;
  font-size: 1rem;
`;

const TestStructure = ({ data }) => (
  <StyledWrapper>
    <p>TEST2</p>
    <p>{data?.description}</p>
  </StyledWrapper>
)
export default TestStructure