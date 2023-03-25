def mutate_string(string, position, character):
    a = string[:position]
    b = string[position+1:]
    return a + character + b

if __name__ == '__main__':