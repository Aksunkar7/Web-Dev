n = int(input())
lst = list(map(int, input().split()))

cnt = 0

for i in range(n-1):
    if lst[i] < 0 and lst[i + 1] < 0 or lst[i] > 0 and lst[i + 1] > 0:
        print("YES")
        exit()
print('NO')   