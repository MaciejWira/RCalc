import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import Button from '@atoms/Button';

const ButtonDir = ({ dir, handler, type = 'round font-big', ...others }) => (
    <Button 
        type={type}
        onClick={handler}
        {...others}
        >
        { dir === 'up' ? (<RiArrowUpSLine />) : (<RiArrowDownSLine />)}
    </Button>
)
 
export default ButtonDir;