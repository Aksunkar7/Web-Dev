def end_other(a, b):
  a = a.lower()
  b = b.lower()
  return True if a.endswith(b) or b.endswith(a) else False
