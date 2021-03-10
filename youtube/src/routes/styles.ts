import styled from 'styled-components/native';

interface ViewProps {
  isFocused: boolean;
}

export const IconTab = styled.View<ViewProps>`
  ${props =>
    props.isFocused
      ? 'background-color: #1A279E'
      : 'background-color: #F2F2F2'};
`;