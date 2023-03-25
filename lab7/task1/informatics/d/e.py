a = int(input())
arr = list(map(int, input().strip().split()))

arr = [i for i in range(len(arr)-1) if (arr[i] > 0 and arr[i+1] > 0) or (arr[i] < 0 and arr[i+1] < 0) ]

print("YES" if len(arr) != 0 else "NO")
