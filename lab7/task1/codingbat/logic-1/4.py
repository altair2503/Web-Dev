def caught_speeding(speed, is_birthday):
  if speed <= (60 + (5 if is_birthday else 0)):
    return 0
  elif speed <= (80 + (5 if is_birthday else 0)):
    return 1
  else:
    return 2
