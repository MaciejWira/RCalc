import { StyledLogo, StyleOne, StyleTwo } from './styled';
import LogoIcon from '@molecules/LogoIcon';

const Logo = () => {

    return(
        <StyledLogo>
            <StyleOne>RUN</StyleOne>
            <StyleTwo>PLAN</StyleTwo>
            <LogoIcon />
        </StyledLogo>
    );

}

export default Logo;