import styled from 'styled-components';
import { rem } from '@styles/functions';
import { H2 } from '@atoms/H2';
import Button from '@atoms/Button';
import { relative } from '@styles/mixins';
import { bp } from '@styles/functions';

export const StyledSegment = styled.div`
    margin-bottom: ${rem(35)};
    border-radius: ${rem(15)};
    ${relative}
`;

export const SegmentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: ${rem(10)};
    ${bp('md', `
        margin-top: ${rem(-10)};
    `)}
    `;
    
export const SegmentHeading = styled(H2)`
    margin-right: ${rem(15)};
    margin-bottom: ${rem(10)};
    margin-top: ${rem(10)};
`;

export const ButtonWrapper = styled.div`
    display: flex;
    // padding-top: ${rem(10)};
    // padding-bottom: ${rem(10)};
`;

export const MarginedButton = styled(Button)`
    margin-right: ${rem(7)}
`;