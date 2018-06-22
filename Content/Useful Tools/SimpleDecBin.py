s = input()

direction = int(input())
#1 - dec to bin
if direction == 1:
    dec = s.split(" ")
    for res in dec:
        print(bin(int(res))[2:],end=" ")
else:
    binary = s.split(" ")
    for b in binary:
        print(int(b, 2), end=" ")