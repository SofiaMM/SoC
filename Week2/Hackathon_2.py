# -*- coding: utf-8 -*-

'''
Hackathon 2 
@Sofia Faria
'''
import random

#Boggle

def create_board():
	row_b = 4
	col_b = 4
	board=[]
	for i in range(row_b):
		row = []
		for j in range(col_b):
			row.append(0)
		board.append(row)

	for i in range(row_b):
		for j in range(col_b):
			if i == 0:
				if j==0:
					board[i][j] = random.choice(['A','A','E','E','G','N'])
				elif j == 1:
					board[i][j] = random.choice(['E','L','R','T','T','Y'])
				elif j == 2:
					board[i][j] = random.choice(['A','O','O','T','T','W'])
				elif j == 3:
					board[i][j] = random.choice(['A','B','B','J','O','O'])
			elif i == 1:
				if j==0:
					board[i][j] = random.choice(['E','H','R','T','V','W'])
				elif j == 1:
					board[i][j] = random.choice(['C','I','M','O','T','U'])
				elif j == 2:
					board[i][j] = random.choice(['D','I','S','T','T','Y'])
				elif j == 3:
					board[i][j] = random.choice(['E','I','O','S','S','T'])
			elif i == 2:
				if j==0:
					board[i][j] = random.choice(['D','E','L','R','V','Y'])
				elif j == 1:
					board[i][j] = random.choice(['A','C','H','O','P','S'])
				elif j == 2:
					board[i][j] = random.choice(['H','I','M','N','Q','U'])
				elif j == 3:
					board[i][j] = random.choice(['E','E','I','N','S','U'])
			elif i == 3:
				if j==0:
					board[i][j] = random.choice(['E','E','G','H','N','W'])
				elif j == 1:
					board[i][j] = random.choice(['A','F','F','K','P','S'])
				elif j == 2:
					board[i][j] = random.choice(['H','L','N','N','R','Z'])
				elif j == 3:
					board[i][j] = random.choice(['D','E','I','L','R','X'])

	return board


def dictionary(filename="dictionary.txt"):
	file = open(filename,"r")
	words = file.readlines()
	file.close()
	
	return words


def solution (board, dictionary):
	sol = {}
	word = []
	for w in dictionary:
		for l in w:
			word.append(l)
		while len(word)>0:
			for i in range(len(board)):
				for j in range(len(board[i])):
					if board[i][j] == word[0]:
						word = del(word[0])
						




if __name__ == '__main__':
	board = create_board()
	dictionary = dictionary()
	solution(board, dictionary)
