import styled from 'styled-components';

export const Header = styled.h1`
    color: ${(props) => props.color || 'white'} ;
    text-align: center;
    font-size: ${(props) => props.size || '25px'}
`