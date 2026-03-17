def count_code(str):
  target = 'coe'
  cnt = 0
  for i in range(len(str) - 3):
    if str[i:i+2] + str[i+3] == target:
      cnt += 1
  return cnt
