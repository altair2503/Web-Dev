def date_fashion(you, date):
  if you < 2 and date < 2:
    return 0
  elif you > 8 or date > 8:
    return 2
  else:
    return 1
