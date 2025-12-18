/*
Geek is very fond of patterns. Once, his teacher gave him a star pattern to solve. 
He gave Geek an integer n and asked him to build a pattern.

Help Geek to build a star pattern.

   *  
  * * 
 * * *
  * * 
   *  

*/

function daimond(N)
{
	for (let i = 0; i < N; i++) {
		for (let j = N - i; j > 1; j--) {
			process.stdout.write(" ");
		}
		for (let j = 0; j <= i; j++) {
			process.stdout.write("* ");
		}
		console.log();
	}

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < i; j++) {
			process.stdout.write(" ");
		}
		for (let j = N - i; j > 0; j--) {
			process.stdout.write("* ");
		}
		console.log();
	}
}

console.log();

daimond(4);

console.log();