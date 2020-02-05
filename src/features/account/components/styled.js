import styled from 'styled-components';
import { AccountCircle } from '@material-ui/icons';

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
    padding: 2.5rem;
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
    color: ${props => props.color}
`;

const OperationBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 3rem;
`;

export {
    Box,
    Header,
    Container,
    HolderInfo,
    BalanceBox,
    AccountIcon,
    OperationBox,
    BodyContainer
}
