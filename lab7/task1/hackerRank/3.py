# 3
# Krishna 67 68 69
# Arjun 70 98 63
# Malika 52 56 60
# Malika
dct = {}
for _ in range( int(input()) ):
    inp = list(input().split())
    name, scores = inp[0], list(map(float, inp[1::]))
    dct[name] = scores
    
needed_name = input()
print(f'{sum(dct[needed_name]) / 3:.2f}')

