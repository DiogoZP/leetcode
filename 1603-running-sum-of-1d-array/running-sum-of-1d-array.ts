function runningSum(nums: number[]): number[] {
    let result: number[] = [];
    result.push(nums[0])
    for(let i = 1; i < nums.length; i++)
    {
            result.push(result[i-1] + nums[i]);
    }
    return result;
};