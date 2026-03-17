lst = []
    
for _ in range(int(input())):
    name = input()
    score = float(input())
    lst.append([name, score])
scores = list( set(s[1] for s in lst) )
scores.sort()
second_lowest = scores[1]
    
res = [s[0] for s in lst if second_lowest == s[1]]
        
print(*sorted(res), sep='\n')