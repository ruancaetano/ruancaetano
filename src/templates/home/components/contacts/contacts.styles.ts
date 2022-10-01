import styled from "styled-components";

export const Contacts = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & > a {
    width: 50px;
    height: 50px;
    margin: 0;
    padding: 10px;
    text-align: center;

    svg {
      padding: 0;
      margin: 0;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
      border-radius: 50%;
      opacity: 0.9;
    }
`;
