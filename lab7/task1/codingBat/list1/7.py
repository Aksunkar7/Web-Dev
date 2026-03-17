def max_end3(nums):
  return [nums[-1]] * len(nums) if nums[-1] > nums[0] else [nums[0]] * len(nums)
