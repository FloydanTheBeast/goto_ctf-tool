import requests, sys
from bs4 import BeautifulSoup


site = sys.argv[1]
sitetxt = "robots.txt"
site_0 = ''
slcounter = 0

for i in site:
    if i == '/' and slcounter == 2:
        break
    elif i == '/':
        slcounter += 1
    site_0 += i

adress = site_0 + '/' + sitetxt

response = requests.get(adress)

soup = BeautifulSoup(response.text, 'html.parser')
print(soup.get_text())

