# -*- coding: utf-8 -*-
'''
Week-02
Function moo
@Sofia Faria
'''

##Functions, parameters
def moo(n):
	return 'moo' * n

# moo(0)
# moo(1)
# moo(2)

# for i in range(3):
# 	print(moo(i))

#recursive (it's more difficult because works differently that our brains.)
def ask_recursively(question):
	print(question)
	reply = input('> ').lower()
	if reply == 'yes':
		return True
	elif reply == 'no':
		return False
	else: 
		print('Please answer "yes" or "no".')
		ask_recursively(question)

ask_recursively('Do you wet the bed?')  #We kinda create our own loop, even tough it's not infinitely



# !!Testing see wk2-day1.py


##Reading and writing files

filename = 'Alice\'s_Adventures_in_Wonderland.txt'
file= open(filename,'r')
# for line in file:
# 	print(line)			#if we keep this the file was already read, so the cursor is in the end and the following code won't work

raw = file.read()
print('From zero to sixty-five: ' + raw[:65])  #goes to the 65 character(index 64)
print('Again: ' + raw[0:65])
print('From sixty-five to five hundred: ' + raw[65:500])

print('The length of this book is: ' + str(len(raw)))

print(raw[173378:])

#Calculate a table for each letter in the alphabet from a-z, and count how many times each letter appears in Alice's_Adventures_in_Wonderland.txt (fancy word for counting stuff is 'frequency distribution'- because you're counting the frequency of something)
# For example:
# a: 34560
# b: 5027
# ...
# z: 893


