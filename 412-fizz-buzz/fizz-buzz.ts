function fizzBuzz(n: number): string[] {
    let answer: string[] = []
    for(let i = 1; i <= n; i++)
    {
        answer[i-1] = "";
        if(i % 3 == 0)
        {
            answer[i-1] += "Fizz";
        }
        if(i % 5 == 0)
        {
            answer[i-1] += "Buzz";
        }
        if(answer[i-1] == "")
        {
            answer[i-1] += i;
        } 
    }
    return answer;
};