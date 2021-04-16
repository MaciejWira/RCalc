import styled from 'styled-components';
import Button from '@atoms/Button';

export const StyledFactor = styled.div`
    position: relative;
    text-align: center;
    margin-bottom: ${props => props.theme.rem(45)};
`;

export const FieldsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ButtonWrapper = styled.div`
    padding-top: ${props => props.theme.rem(10)};
    display: flex;
    justify-content: flex-start;
`;

export const StandardsButton = styled(Button)`
  background-color: ${props => props.theme.colorPrimary};
  width: auto;
  border: none;
  color: white;
  text-transform: uppercase;
  font-size: ${props => props.theme.rem(12)};
  font-weight: 700;
  padding: ${props => props.theme.rem(5)};
`;