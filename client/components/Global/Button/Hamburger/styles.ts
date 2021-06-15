import Styled from 'styled-components';
import {ButtonHamburgerProps} from './types';

export const Container = Styled.button.attrs<ButtonHamburgerProps>({
    type: 'button'
})
`   cursor: pointer;
    height: 70px;
    width:52px;
    box-sizing: border-box;
    outline: none;
    border:0;
    color: ${(props:ButtonHamburgerProps) => props.color || "#555b6d"};
    background: ${(props:ButtonHamburgerProps) => props.background || "transparent"};;
    &::after{
        content: "\u2630";
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        
    }
    
`;
