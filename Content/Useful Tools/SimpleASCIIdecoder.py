import sys

s = sys.argv[1]
#1 - from str to ascii
if int(sys.argv[2]) ==1:
    for i in range(len(s)):
        print(ord(s[i]), end=" ")
else:
    nm = s.split()
    for numbers in nm:
        print(chr(int(numbers)), end=" ")