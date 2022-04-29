import React from 'react';

export const ExpenseGlobal = React.createContext({
    income: 0,
    expense: 0,
    transactions: [],
    totalBalance: 0,
});