def min(a, b, c, d):
    ans = a
    if ans > b:
        ans = b
    if ans > c:
        ans = c
    if ans > d:
        ans = d
    return ans


ls = list(map(int, input().strip().split()))
print(min(ls[0], ls[1], ls[2], ls[3]))