def sum67(nums):
  chart = True
  sm = 0
  for i in nums:
    if i == 6:
      chart = False
    if chart:
      sm += i
    elif i == 7:
      chart = True
    else:
      continue
  return sm