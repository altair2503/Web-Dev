def combo_string(a, b):
  return "{}{}{}".format((a if len(a) < len(b) else b),(a if len(a) > len(b) else b),(a if len(a) < len(b) else b))
