import base64
import sys

data = sys.argv[1]
code = sys.argv[2]

binar = bytes(data, 'utf-8')

if code == 'de':
    decoded_data = base64.b64decode(binar)
    print(decoded_data.decode('utf-8'))
else:
    encoded_data = base64.b64encode(binar)
    print(encoded_data.decode('utf-8'))
