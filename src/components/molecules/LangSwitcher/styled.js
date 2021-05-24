import styled from 'styled-components';
import Button from '@atoms/Button';
import { transitionSpeed } from '@styles/vars';
import { rem } from '@styles/functions';
import { rgba } from 'polished';

export const StyledLangSwitcher = styled.div`
    position: relative;
    display: flex;
    height: 100%;
`;

export const DummyButton = styled(Button)`
    position: relative;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
`;

export const StyledButton = styled(Button)`
    transition: margin-top ${transitionSpeed}, transform ${transitionSpeed}, background-color ${transitionSpeed};
    ${props => {
        if ( props.$active ){
            return`
                position: absolute;
                top: 0;
                left: 0;
                z-index: 10;
            `
        } else {

            const opened = !props.$opened ? '' : `
                transform: translateY(100%);
                margin-top: ${rem(15)};
                box-shadow: 0 0 ${rem(25)} ${rem(5)} ${rgba(0,0,0,.5)};

            `;

            return`
                position: absolute;
                z-index: ${props.position - props.position + 1};
                ${opened}
            `
        }
    }}
`;