import styled from 'styled-components';
import { colorPrimary, transitionSpeed } from '@styles/vars';

const A = styled.a`
    color: inherit;
    text-decoration: none;
    transition: color ${transitionSpeed};

    :hover {
        color: ${colorPrimary}
    }
`;
 
export default A;