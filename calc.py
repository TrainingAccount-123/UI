h = 668
w = 1272
while True:
    ch = int(input("1 for w, 2 for h: "))
    a = int(input("number : "))
    if ch == 2:
        a = a*100
        a = a/h
        print(a)
    else:
        a = a*100
        a = a/w
        print(a)