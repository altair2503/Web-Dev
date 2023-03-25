ls = list(map(int, input().strip().split()))


def xor(a, b):
    return a != b


print(1 if xor(ls[0], ls[1]) else 0)