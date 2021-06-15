import styled from 'styled-components';
import {inputSearchProps} from './types';


export const Container = styled.div`
    border: 0;
    height: 38px;
    padding-left: 16px;
    padding-right: 20px;
    background-color: ${(props:inputSearchProps) => props.background || '#f3f3f9'};
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: ${(props:inputSearchProps) => props.radius || '30px'};
    position: relative;
    color:#495057;
        

`;

export const Search = styled.input.attrs<inputSearchProps>(props => ({ 
    type: 'search',
    placeholder: props.placeholder || 'Search'
    }))`
    background-color: ${(props:inputSearchProps) => props.background || 'transparent'};
    border: 0;
    padding-left: 8px;
    color:#495057;
    
`;