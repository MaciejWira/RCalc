import React from 'react';
import styled from 'styled-components';
import { rem } from '@styles/functions';
import { lighten } from 'polished';

const StyledBox = styled.div`
    padding: ${rem(10)} ${rem(15)};
    border-radius: ${rem(10)};
    margin-bottom: ${rem(15)};
    ${props => {
        const th = props.theme;
        return `
            background-image: linear-gradient( to top left, ${th.colorBack} 70%, ${lighten( .07, th.colorBack )} );
            box-shadow: ${th.boxShadowPrimary};
        `
    }}
`;

const Box = ({ children, ...others }) => {

    return(
        <StyledBox {...others} >{children}</StyledBox>
    );

}

export default Box;