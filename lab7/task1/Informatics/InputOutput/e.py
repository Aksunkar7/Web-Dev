length = 109 
v = int(input())
t = int(input())
if v > 0:
    print(v * t % length)
else:
    v = -v
    print(length - v * t % length)