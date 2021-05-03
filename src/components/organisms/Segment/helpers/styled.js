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
    
export const SegmentHeadingMobile = styled(H2)`
    margin-right: ${rem(15)};
    margin-bottom: ${rem(10)};
    margin-top: ${rem(10)};
    font-size: ${rem(32)};
    ${bp('sm', `
        display: none;
    `)}
`;
    
export const SegmentHeading = styled(H2)`
    display: none;
    ${bp('sm', `
        display: block;
        margin-right: ${rem(5)};
        margin-bottom: ${rem(10)};
        margin-top: ${rem(10)};
    `)}
`;

export const margin = 5;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const DragButton = styled(Button)`
    cursor: move;
    font-size: ${rem(20)};
    ${bp('sm',`
        font-size: ${rem(22)};
    `)}
`;
