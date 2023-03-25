def sum13(nums):
  sum = 0
  for i in nums:
    if i == 13:
      return sum
    sum += i
  return sum
