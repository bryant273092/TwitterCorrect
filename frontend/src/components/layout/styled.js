import styled from 'styled-components';

export const primary = '#1DA1F2'
export const secondary = '#15202B'

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.aligned || ''};
    margin: ${(props) => props.margin || '0'};
    height: ${(props) => props.height || 'auto'};
    width: ${(props) => props.width || 'auto'};
    justify-content: ${(props) => props.jc || ''};
    background-color: ${(props) => props.bg || 'none'};
    border-radius: ${(props) => props.br || '0'};
    
`
export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: ${(props) => props.aligned || ''};
    margin: ${(props) => props.margin || '0'};
    justify-content: ${(props) => props.jc || ''};
    
`
export const Grid = styled(FlexColumn)`
    display: grid;
    
    grid-template-columns: ${(props) => props.template || 'repeat(auto-fit, minmax(150px, 1fr))'};
    width: ${(props) => props.width || 'auto'};
    margin: ${(props) => props.margin || '0'};
    grid-row-gap: 25px;
    grid-column-gap: 10px;
    @media (min-width: 1024px) {
        grid-template-columns: ${(props) => props.template || 'repeat(auto-fit, minmax(260px, 1fr))'};
        grid-column-gap: 25px;
    }
`
export const Button = styled.a`
    color: ${(props) => props.color || secondary};
    padding: ${(props) => props.padding || '10px 40px'}; 
    width: ${(props) => props.width || '30%'};
    border-radius: ${(props) => props.br || '5px'};
    margin: ${(props) => props.margin || '0px'};
    background-color: ${ props => props.bg || primary};
    text-align: center;
    @media (max-width: 1024px) {
        width: ${(props) => props.width || 'clamp(250px, 60%, 400px)'};
    };
    text-decoration: none;
    :hover {
        text-decoration: none;
    }
    white-space: nowrap;
`
export const ButtonGrid = styled(FlexRow)`
    width: 100%;
    margin-top: clamp(20px,7.5%,45px);
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`
export const SectionHeading = styled.h3`
    color: ${(props) => props.color || 'white'};
    font-size: ${(props) => props.size || '2rem'};
    padding: ${(props) => props.padding || '0px'};
    margin: ${(props) => props.margin || ''};

`
export const HeadingLine = styled.hr`
    border-top: 2px solid white;
    width: 100%;
    margin: 0px 10px;
`
export const Image = styled.img`
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
    padding: 8px;
    position: static;
`
export const Text = styled.p`
    color: ${(props) => props.color || 'white'}; 
    font-size: clamp(15px, 1.7vw, 22.5px);
    width: ${(props) => props.width || "clamp(250px, 60%, 800px)"};
    margin-left: 10px;
    margin-right: 10px;
    line-height: 1.8;
    margin-top: ${(props) => props.top || 'clamp(20px, 7.5%, 45px)'};
`
// export const Button = styled.button`
//     background-color: ${(props) => props.back || };
//     color: ${(props) => props.color || "white"};
//     padding: 10px 40px;
//     width: ${(props) => props.width || 'auto'};
//     border-radius: 5px;
//     border: none;
// `
export const Container = styled.div`
    background-image: ${(props) => props.image || 'none'};
    height: ${(props) => props.height || 'auto'};
    padding: ${(props) => props.padding || '1rem'};
    background-position: bottom;
`
