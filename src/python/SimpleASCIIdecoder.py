import sys

st = sys.argv[1:len(sys.argv) - 1]
s = ""
for i in st:
    s += str(i)+' '
s = s[:-1]
print(s,end=" = ")
# 1 - from str to ascii
if int(sys.argv[len(sys.argv) - 1]) == 1:
    for i in range(len(s)):
        print(ord(s[i]), end=" ")
else:
    nm = s.split()
    for numbers in nm:
        print(chr(int(numbers)), end="")
