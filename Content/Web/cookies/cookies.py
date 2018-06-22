import requests, sys

site = sys.argv[1]

session = requests.Session()

response = session.get(site)

d = session.cookies.get_dict()
for i in d:
    print(i, d[i], '\n')