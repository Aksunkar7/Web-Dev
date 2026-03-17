n = int(input())
res = 1
cnt = 0
if res >= n:
    print(0)
    exit()
while True:
    res *= 2
    cnt += 1
    if res >= n:
        print(cnt)
        break