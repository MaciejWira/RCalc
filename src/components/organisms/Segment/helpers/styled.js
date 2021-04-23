import styled from 'styled-components';
import { rem } from '@styles/functions';
import { H2 } from '@atoms/H2';
import Button from '@atoms/Button';

export const StyledSegment = styled.div`
    margin-bottom: ${rem(35)};
    border-radius: ${rem(15)};
`;

export const SegmentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: ${rem(10)};
`;

export const SegmentHeading = styled(H2)`
    margin-bottom: 0;
    margin-right: ${rem(15)}
`;

export const ButtonWrapper = styled.div`
    display: flex;
    padding-top: ${rem(10)};
    padding-bottom: ${rem(10)};
`;

export const MarginedButton = styled(Button)`
    margin-right: ${rem(7)}
`;