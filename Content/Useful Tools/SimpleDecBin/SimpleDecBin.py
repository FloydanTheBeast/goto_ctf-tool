import sys

st = sys.argv[1:len(sys.argv) - 1]
s = ""
for i in st:
    s += str(i)+' '
s = s[:-1]
direction = int(sys.argv[len(sys.argv) - 1])
#1 - dec to bin
if direction == 1:
    dec = s.split(" ")
    for res in dec:
        print(bin(int(res))[2:],end=" ")
else:
    binary = s.split(" ")
    for b in binary:
        print(int(b, 2), end=" ")