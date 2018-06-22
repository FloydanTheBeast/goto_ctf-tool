import sys

# полчуение сообщения
s = sys.argv[1]
lang = sys.argv[2].lower()

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
        if def_lang[i].isupper():
            print(dct[(dct.find(s[i]) + rot) % rots].upper(), sep="", end="")
        else:
            print(dct[(dct.find(s[i]) + rot) % rots], sep="", end="")
    print()
