a = int(input())

cnt = 0

for i in range(1, pow(10, 8)):
    if i > a + 1:
        print(cnt)
        break
    if a % i == 0:
        cnt += 1
else:
    print(cnt)
