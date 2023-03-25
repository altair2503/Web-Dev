def array_front9(nums):
  for i in range(0, len(nums)):
    if i < 4 and nums[i] == 9:
      return True;
    elif i == 4:
      return False
    
    return False