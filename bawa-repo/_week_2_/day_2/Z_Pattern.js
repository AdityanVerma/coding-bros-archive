/*
Given 'n', print the symbol 'Z' spanning n rows using '*' symbol. Value of n>2 and n<=20.

Example:
1) Input : n=3
Output:
***
 *
***

2) Input n=4
Output:
****
  *
 *
****

*/

function Z_Pattern(n)
{
    for (let i = 1; i <= n; ++i)
	{
		for (let j = 1; j <= n; ++j)
		{
			if ((n - i + 1) == 1 || (n - i + 1) == n) {
				process.stdout.write(" *"); // Printing without newline
			} else {	
				if (j == (n - i + 1)) {
					process.stdout.write(" *");
				} else {
					process.stdout.write("  ");
				}
			}
		}
		console.log(); // To get a newline
	}
}

console.log();

Z_Pattern(10);

console.log();
