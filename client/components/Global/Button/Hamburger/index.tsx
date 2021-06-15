import {Container} from './styles';
import { ButtonHamburgerProps } from './types';


export const Hamburger = ({color, background}:ButtonHamburgerProps) => {
    return (
        <Container color={color} background={background} />
    )
}