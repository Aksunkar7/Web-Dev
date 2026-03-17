# Enter your code here. Read input from STDIN. Print output to STDOUT

# 9
# 1 2 3 4 5 6 7 8 9
# 9
# 10 1 2 3 11 21 55 6 8
# Sample Output

# 4

n = int(input())
students1 = set(map(int, input().split()))
b = int(input())
students2 = set(map(int, input().split()))

print(len(students1-students2))
print(len(students1.difference(students2)))