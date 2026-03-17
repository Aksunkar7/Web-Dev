# cat_dog('1cat1cadodog') → True

def cat_dog(str):
  cnt_d = 0  
  cnt_c = 0  
  for i in range(len(str) - 2):
    if str[i:i+3] == 'cat':
      cnt_c += 1
    elif str[i:i+3] == 'dog':
      cnt_d += 1
    

  return True if cnt_c == cnt_d else False
  