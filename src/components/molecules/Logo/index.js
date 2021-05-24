import { StyledLogo, StyleOne, StyleTwo } from './styled';
import LogoIcon from '@molecules/LogoIcon';

const Logo = ({ scroll }) => {

    return(
        <StyledLogo scroll={scroll}>
            <StyleOne>RUN</StyleOne>
            <StyleTwo>PLAN</StyleTwo>
            <LogoIcon />
        </StyledLogo>
    );

}

export default Logo;