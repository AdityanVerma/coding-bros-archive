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
