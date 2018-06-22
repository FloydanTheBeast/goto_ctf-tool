import base64
import sys

data = sys.argv[1]
code = sys.argv[2]

binar = bytes(data, 'utf-8')
decoded_data = base64.b64decode(binar)
encoded_data = base64.b64encode(binar)
if code == 'de':
    print(decoded_data.decode('utf-8'))
elif code == 'en':
    print(encoded_data.decode('utf-8'))