import sys
from textblob import TextBlob

# print("Press 1 for English to French")
# print("Press 2 for English to Spanish")
# print("Press 3 for Englsih to Italian")
# print("Press 4 for English to Russian")
# print("Press 5 for English to Hindi")

def translate(word,num):
	try:
		n = int(num)
	except:
		print("Wrong Input")
		sys.exit()

	codes = {1: "fr", 2: "es", 3: "it", 4: "ru", 5: "hi"}

	eng_code = "en"
	tr_code = codes[n]
	word=str(word)
	word = TextBlob(word)

	try:
		trans = word.translate(from_lang=tr_code, to=eng_code)
		# print("Translated Sentence: ", end="")
		return(trans)
	except:
		# print("Wrong Sentence")
		sys.exit()

# print(translate('Cómo estás',2))