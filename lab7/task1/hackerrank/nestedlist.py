if __name__ == '__main__':
    arr = []
    lowest = 9999999999999999
    for _ in range(int(input())):
        name = input()
        score = float(input())
        arr.append([name, score])
        if lowest > score: lowest = score

    arr.sort(key=lambda x: x[1])
    ans = []

    for i in arr:
        if i[1] != lowest:
            for j in arr:
                if j[1] == i[1]:
                    ans.append(j)
            break

    ans.sort()
    for i in ans:
        print(i[0])