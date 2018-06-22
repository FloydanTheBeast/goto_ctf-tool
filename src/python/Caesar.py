import sys

# полчуение сообщения
st = sys.argv[1:len(sys.argv) - 1]
lang = str(sys.argv[len(sys.argv) - 1]).lower()
s = ""
for i in st:
    s += str(i) + ' '
def_lang = s
s = s.lower()

# выбор языка
if lang == "ru":
    dct = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
    rots = 33
else:
    dct = "abcdefghijklmnopqrstuvwxyz"
    rots = 26

# перебор
for rot in range(rots):
    print("ROT" + str(rot) + " ", end="")
    for i in range(len(s)):
        if s[i] != ' ':
            if def_lang[i].isupper():
                print(dct[(dct.find(s[i]) + rot) % rots].upper(), sep="", end="")
            else:
                print(dct[(dct.find(s[i]) + rot) % rots], sep="", end="")
        else:
            print(" ", end="")
    print()
