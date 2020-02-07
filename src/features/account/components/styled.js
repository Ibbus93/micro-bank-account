import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 90%;
    width: 100%;
    max-width: 960px;
    background: white;
    border-radius: 20px;
`;

const Box = styled.div`
    padding: 3rem;
    width: 100%;
`;

const BodyContainer = styled.div`
    margin-top: 3rem;
`;

const Header = styled.div`
    height: 5rem;
`;

const AccountIcon = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 4rem;
`;

const HolderInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    font-size: 2rem;
`;

const BalanceBox = styled.div`
    margin-left: auto;
`;

const RecentBalanceBox = styled.div`
    text-align: right;
    margin-top: ${props => props.marginTop || '3rem'};
`;

const Balance = styled.span`
    color: ${props => props.color};
    text-align: ${props => props.align || 'left'};
`;

const OperationContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    border-radius: 20px;
    padding: 1rem 2rem;
    background: lightblue;
    font-size: 20px;
`;

const OperationRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    font-weight: ${props => props.fontWeight || 'normal'};
`;

const OperationElement = styled.div`
    padding: 0.5rem;
    text-align: ${props => props.align || 'left'};
    width: ${props => props.width}
`;

export {
    Box,
    Header,
    Balance,
    Container,
    HolderInfo,
    BalanceBox,
    AccountIcon,
    OperationRow,
    BodyContainer,
    OperationElement,
    RecentBalanceBox,
    OperationContainer,
}
