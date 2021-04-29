import React from 'react';
import styled from 'styled-components';
import { rem } from '@styles/functions';
import { absolute } from '@styles/mixins';
import { transitionSpeed } from '@styles/vars';
import { bp } from '@styles/functions';

const StyledBox = styled.div`
    position: relative;
    padding: ${rem(10)} ${rem(15)};
    border-radius: ${rem(10)};
    margin-bottom: ${rem(15)};
    overflow: hidden;
    box-shadow: ${props => props.theme.boxShadowPrimary};
    ::after {
        ${absolute(true)};
        opacity: ${props => props.theme.dark ? '.1' : '.5'};
        background-image: linear-gradient( to top left, transparent 70%, white );
        transition: opacity ${transitionSpeed}, border-radius ${transitionSpeed}
    };
    ${bp('md', `
        padding: ${rem(15)} ${rem(20)};
    `)}
`;

const Box = ({ children, ...others }) => {

    return(
        <StyledBox {...others} >{children}</StyledBox>
    );

}

export default Box;