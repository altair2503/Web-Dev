def rotate_left3(nums):
  arr = nums[1:]
  arr.append(nums[0])
  return arr
