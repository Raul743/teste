import React from 'react';
import { Container, Search } from './styles';
import {inputSearchProps} from './types';



const InputSearch = ({color, background, placeholder, type}: inputSearchProps) => {
    return (
        <Container color={color} background={background} placeholder={placeholder} >
            <i className="bx bx-search-alt"/>
            
            <Search />
        </Container>
    )
}

export default InputSearch
