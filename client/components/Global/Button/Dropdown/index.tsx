import {Container} from './styles';
import { ButtonDropdownProps } from './types';


export const Dropdown = ( { color, background } : ButtonDropdownProps) => {
    return (
        <Container color={color} background={background} >
            Menu
            <i className="mdi mdi-chevron-down"></i>
        </Container>
    )
}