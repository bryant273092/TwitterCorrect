import styled from 'styled-components';

export const FlexColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
    
`
export const FlexRow = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: row;
    
    
`
export const Image = styled.img``
export const Button = styled.button`
    background-color: ${(props) => props.back || '#1DA1F2'};
    color: ${(props) => props.color || "white"};
    padding: 5px;
    width: ${(props) => props.width || '100%'};
    border-radius: 10px;
    border: none;
`
