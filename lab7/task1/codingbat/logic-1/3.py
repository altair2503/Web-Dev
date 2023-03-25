def squirrel_play(temp, is_summer):
  if is_summer == False:
    return temp >= 60 and temp <= 90
  else:
    return temp >= 60 and temp <= 100
