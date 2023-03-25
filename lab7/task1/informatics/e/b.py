def power(a, b):
    if b == 0:
        return 1

    ans = 1
    for i in range(int(b)):
        ans *= a

    return ans


ls = list(map(float, input().strip().split()))

print(power(ls[0], ls[1]))