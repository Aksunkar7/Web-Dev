def count_substring(string, sub_string):
    len_s = len(string)
    len_s_s = len(sub_string)
    cnt = 0
    for i in range(len_s - len_s_s + 1):
        if string[i: i+len_s_s] == sub_string:
            cnt += 1
    return cnt

if __name__ == '__main__':
    string = input().strip()
    sub_string = input().strip()
    
    count = count_substring(string, sub_string)
    print(count)