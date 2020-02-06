import React from 'react';
import { Balance, OperationElement, OperationRow } from './styled';

const Operation = ({
    date,
    type,
    amount,
    holder,
    operation,
    description,
}) => {
    const formatDate = () => {
        const newDate = new Date(date);
        const month = newDate.toLocaleString('default', {month: 'long'}).substr(0, 3);
        const day = newDate.toLocaleString('default', {day: '2-digit'});

        return `${month}, ${day}`
    };

    const formatAmount = () => `${type === 'decrease' ? '-' : ''}${amount.toFixed(2)}`;

    return (
        <OperationRow>
            <OperationElement width="15%">{ formatDate() }</OperationElement>
            <OperationElement width="25%">{ holder }</OperationElement>
            <OperationElement width="25%">{ operation }</OperationElement>
            <OperationElement width="20%">{ description }</OperationElement>
            <OperationElement width="10%" align="right">
                <Balance color={type === 'increase' ? 'green' : 'red'}>{ formatAmount() }</Balance>
            </OperationElement>
        </OperationRow>
    );
};

export default Operation;
