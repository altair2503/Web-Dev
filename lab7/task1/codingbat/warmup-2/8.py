def array123(nums):
    cnt = 0
    for i in nums:
        if i == 1 and cnt == 0:
            cnt += 1
        elif i == 2 and cnt == 1:
            cnt += 1
        elif i == 3 and cnt == 2:
            cnt += 1
            return True
        else:
            cnt = 0

    return False

