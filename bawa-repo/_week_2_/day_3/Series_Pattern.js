
// QUES: Given a number N.
// The task is to print a series of asterisk(*) from 1 till N terms with increasing order
// and difference being 1.

function Series_Pattern(n)
{
    for (let i = 1; i <= n; ++i)
	{
		for (let j = 1; j <= (n - (n - i)); ++j)
		{
			process.stdout.write("*"); // Printing without newline
		}
		process.stdout.write(" "); // To get a newline
	}
}

console.log();

Series_Pattern(5);

console.log();
