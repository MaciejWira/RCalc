import { useStore } from '@store/store';
import { SET_THEME } from '@store/actions';
import Toggler from '@molecules/Toggler';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';
import styled from 'styled-components';

const StyledMoon = styled(RiMoonClearFill)`
    color: ${props => props.theme.colorDark };
`;

const StyledSun = styled(RiSunFill)`
    color: ${props => props.theme.colorLight };
`;

const ThemeSwitcher = ({ ...others }) => {

    const { dispatch, globalState: { theme } } = useStore();

    const content = theme === 'dark' ? (
        <StyledSun size="60%"/>
        ) : (
        <StyledMoon size="60%"/>
    ); 

    return(
        <Toggler 
            $on={theme === 'dark'}
            content={content}
            handler={() => dispatch({ type: SET_THEME })} 
            { ...others }/>
    );

}

export default ThemeSwitcher;