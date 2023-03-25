def max_end3(nums):
  if nums[0] > nums[2]:
    arr = []
    arr.append(nums[0])
    arr.append(nums[0])
    arr.append(nums[0])
    return arr
  else:
    arr = []
    arr.append(nums[2])
    arr.append(nums[2])
    arr.append(nums[2])
    return arr
