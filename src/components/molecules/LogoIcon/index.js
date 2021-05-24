import { colorPrimary } from '@styles/vars';
import { RiCompass2Fill } from 'react-icons/ri';
import styled, { keyframes } from 'styled-components';

const compassKeyframes = keyframes`
    0% { transform: rotate(0deg) }
    10% { transform: rotate(360deg) }
    100% { transform: rotate(360deg) }
`;

const StyledCompass = styled(RiCompass2Fill)`
    animation: ${compassKeyframes} 5s linear infinite;
`;

const LogoIcon = () => {
    return (
        <StyledCompass color={colorPrimary}/>
    );
}
 
export default LogoIcon;