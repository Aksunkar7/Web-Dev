a = int(input())
b = int(input())
if a == b:
    print(0)
    exit()
print(a if a > b else b)