import Styled from 'styled-components';
import {ButtonDropdownProps} from './types';

export const Container = Styled.button.attrs<ButtonDropdownProps>({
    type: 'button'
})
`   cursor: pointer;
    height: 50px;
    min-width:100px;
    width: auto;
    text-align: left;
    padding: 0 12px 0 12px;
    box-sizing: border-box;
    outline: none;
    border:0;
    color: ${(props:ButtonDropdownProps) => props.color || "#555b6d"};
    background: ${(props:ButtonDropdownProps) => props.background || "transparent"};;
    &::after{
        content: "\u2630";
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        float: right;
    }
    
`;
