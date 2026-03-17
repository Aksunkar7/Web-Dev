n = int(input())
s = set(map(int, input().split()))

for _ in range(int(input())):
    line = input().split()
    command = line[0]
    if command == 'pop':
        s.pop()
    elif command == 'discard':
        s.discard(int(line[1]))
    elif command == 'remove':
        s.remove(int(line[1]))

print(sum(s))