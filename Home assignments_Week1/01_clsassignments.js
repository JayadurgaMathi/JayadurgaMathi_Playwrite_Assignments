function posorneg(number)
{
    if (number > 0)
    {
        return "Positive Number";
    }
    else if (number < 0)
    {
        return "Negative Number";
    }
    else
    {
        return "Neutral Number";
    }
}

let number = 0;

console.log(posorneg(number));