function maximumWealth(accounts: number[][]): number {
    let result: number = 0;
    accounts.map((account) => {
        let total: number = 0;
        account.map((value) => {
            total += value;
        });
        if(result < total)
            result = total;
    });
    return result;
};