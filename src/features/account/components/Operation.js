import React from 'react';
import { OperationBox } from './styled';

const Operation = ({
    date,
    type,
    amount,
    holder,
    description,
}) => (
    <OperationBox>
        <h4>{ date }</h4>
        <h4>{ amount }</h4>
        <h4>{ holder }</h4>
        <h4>{ description }</h4>
    </OperationBox>
);

export default Operation;
