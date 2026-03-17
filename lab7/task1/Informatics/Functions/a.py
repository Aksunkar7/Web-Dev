def minn(a, b, c, d):
    if a < b and a < c and a < d:
        return a
    elif b < a and b < c and b < d:
        return b
    elif c < b and c < a and c < d:
        return c
    else: return d
a , b , c , d = map(int , input().split())
print(min(a, b, c, d))