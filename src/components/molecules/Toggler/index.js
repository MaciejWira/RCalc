import { useState } from 'react';
import Button from '@atoms/Button';
import styled from 'styled-components';
import { rem } from '@styles/functions';
import { buttonSizePrimary, buttonSizePrimaryFactor, transitionPrimary, transitionSpeed, colorPrimaryLight } from '@styles/vars';

const StyledToggler = styled.div`
    position: relative;
    cursor: pointer;
    width: ${props => props.size ? rem( props.size * 1.75 ) : rem( buttonSizePrimaryFactor * 1.75 )};
    height: ${props => props.size ? rem( props.size ) : buttonSizePrimary};
    border-radius: ${props => props.size ? rem( props.size ) : buttonSizePrimary};
    background-color: ${props => props.theme.colorPrimary};
    box-shadow: ${rem(2)} ${rem(2)} ${rem(5)} 0 rgba(0,0,0,.25) inset;

    :hover {
        background-color: ${colorPrimaryLight};
    }
`;

const StyledButton = styled(Button)`
    position: absolute;
    left: 100%;
    transform: translateX(-100%);
    transition: ${transitionPrimary}, transform ${transitionSpeed}, left ${transitionSpeed};
    ${props => {
        if ( props.on === 'true' ){
            return `
                left: 0;
                transform: translateX(0);
            `
        }
    }};

    * {
        transition: none
    }

    :hover {
        background-color: ${props => props.theme.colorBack};
        color: ${props => props.theme.colorFront}
    }
`;

// handler needs to toggle between two states

const Toggler = ({ handler, content, $on, ...others }) => {

    const [ on, setOn ] = useState($on);

    const fullHandler = () => {
        handler();
        setOn(prev => !prev);
    };

    return(
        <StyledToggler onClick={fullHandler} {...others} >
            <StyledButton
                forwardedAs='span'
                on={on.toString()}
                type='round'>
                {content}
            </StyledButton>
        </StyledToggler>
    );

};

export default Toggler;