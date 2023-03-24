const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];


const getPositiveIncomeAmount = (data) => {
    let a =  data.filter( item => item.amount > 0);
       let result = a.reduce((sum, current) => {
        return sum + current.amount;
    }, 0);
    return result;
};


const getTotalIncomeAmount = (data) => {
    if (data.some(i => i.amount < 0)) {
        let result = data.reduce((sum, current) => {
        return sum + current.amount;
    }, 0);
        return result;
    } else {
       return getPositiveIncomeAmount(data);
    }
};


console.log(getTotalIncomeAmount(funds));
/* 

const getTotalIncomeAmount = (data) => {
   
        let result = data.reduce((sum, current) => {
        return sum + current.amount;
    }, 0);
        return result;
    };

console.log(getTotalIncomeAmount(funds)); */