if __name__ == '__main__':
    s = input()
    is_any_alnum = False
    is_any_alpha = False
    is_any_digit = False
    is_any_lowercase = False
    is_any_uppercase = False
    for l in s:
        if l.isalpha():
            is_any_alpha = True  
        if l.isdigit():
            is_any_digit = True 
        if l.islower():
            is_any_lowercase = True
        if l.isupper():
            is_any_uppercase = True
    if is_any_alpha or is_any_digit: 
        is_any_alnum = True  
    print(is_any_alnum)
    print(is_any_alpha)
    print(is_any_digit)
    print(is_any_lowercase)
    print(is_any_uppercase)