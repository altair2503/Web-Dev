def in1to10(n, outside_mode):
  if outside_mode == False:
    return n >= 1 and n <= 10
  else:
    return n <=1 or n >= 10
