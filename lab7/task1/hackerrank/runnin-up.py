if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().strip().split()))
    arr.sort()

    max = arr[0]
    smax = arr[0]

    for i in arr:
        if max < i:
            smax = max
            max = i

    print(smax)


