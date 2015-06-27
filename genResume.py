from base64 import b64encode

with open("index.pdf", "rb") as asdf:
	print("open(\"resume.pdf\", \"wb\").write(\"" + str(b64encode(asdf.read())) + "\".decode('base64'))")
