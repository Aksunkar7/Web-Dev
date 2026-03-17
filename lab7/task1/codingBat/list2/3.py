def big_diff(nums):
  if len(nums) == 1:
    return 0
  return max(nums) - min(nums)
