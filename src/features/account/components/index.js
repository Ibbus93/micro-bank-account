import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 80%;
    width: 100%;
    max-width: 960px;
    background: white;
    border-radius: 20px;
`;

const Box = styled.div`
    flex: 1;
    max-width: 400px;  
    margin: 0px 5px;
`;

export {
    Box,
    Container
};
