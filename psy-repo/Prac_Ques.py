# -------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Q1.Given two numbers A and B. Print "Yes" if A is greater than or equal to B. Otherwise print "No".

A = int(input("A = "))
B = int(input("B = "))

if (A > B):
    print(" 'YES' A is Greater than B")
elif (A == B):
    print("'YES'A is Equal to B")
else:
    print("NO")

# -------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Q2.Given two numbers A and B. Print "Multiples" if A is multiple of B or vice versa. Otherwise print "No Multiples".

A = int(input("A = "))
B = int(input("B = "))

if (A % B == 0) or (B % A == 0):
    print("Multiples")

else:
    print("No Multiples")

#  -------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Q3.Given two numbers N and M. Print the summation of their last digits.

A = int(input("A = "))
B = int(input("B = "))

A = A % 10
B = B % 10
Sum = A + B
print(f"The Summation of the Last digits {A} & {B} = {Sum}")

#  -------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Q4.Given two person names.Each person has {"the first name" + "the second name"} Determine whether they are brothers or not.
# Note: The two persons are brothers if they share the same second name.

f1 = input("Enter the First Name of 1st person: ")
s1 = input("Enter the Last Name of 1st person: ")
f2 = input("Enter the First Name of 2nd person: ")
s2 = input("Enter the Last Name of 2nd person: ")

if(s1.lower() == s2.lower()):
    print(f"{f1} {s1} and {f2} {s2} are BROTHERS")
else:
    print(f"{f1} {s1} and {f2} {s2} are NOT BROTHERS")

#  -------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Q5.Given a comparison symbol S between two numbers A and B. Determine whether it is Right or Wrong. The comparison is as follows: A < B, A > B, A = B. 
#    Where A, B are two integer numbers and S refers to the sign between them

A = int(input("A = "))
B = int(input("B = "))
s=  input("Comparison Symbol: ").strip()

if s == "<":
    if(A<B):
        print(f"({A} {s} {B})--> RIGHT")
    else:
        print(f"({A} {s} {B})--> WRONG")
elif s == ">":
    if(A>B):
        print(f"({A} {s} {B})--> RIGHT")
    else:
        print(f"({A} {s} {B})--> WRONG")
elif s == "=":
    if(A==B):
        print(f"({A} {s} {B})--> RIGHT")
    else:
        print(f"({A} {s} {B})--> WRONG")

else:
    print("Invalid Symbol")
    
#  -------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Q6.Given 3 numbers A, B and C, Print the minimum and the maximum numbers.Print the minimum number followed by a single space then print the maximum number.

A = int(input("A = "))
B = int(input("B = "))
C = int(input("C = "))

Minimum  = min(A,B,C)
Maximum  = max(A,B,C)

print(Minimum, Maximum)    

#  -------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Q7. Memo and Momo are playing a game. Memo will choose a positive number a, and Momo will choose a positive number b.
# Your task is to tell them who will win according to the following rules:
# If both a and b are divisible by k, both of them win and you should print "Both".
# If a is divisible by k but b isn't, Memo wins and you should print "Memo".
# If b is divisible by k but a isn't, Momo wins and you should print "Momo".
# If both a and b are not divisible by k , no one wins and you should print "No One". 

A = int(input("A = "))
B = int(input("B = "))
k = int(input("k = "))

if( A % k == 0) and (B % k == 0):
    print("Both Wins")

elif( A % k == 0) and (B % k != 0):
        print("Memo Wins")
elif( B % k == 0) and (A % k != 0):
        print("Momo Wins")

else:
    print("No One")
