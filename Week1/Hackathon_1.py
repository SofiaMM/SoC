# -*- coding: utf-8 -*-
'''
Hackathon 1 
@Sofia Faria
'''

import random

def createWorld(lin, col):
	world = []
	for i in range(lin):
		l = []
		for j in range(col):
			l.append(random.choice(['o','X']))
		world.append(l)
	return world

def continentSize(xtiles,world):
	#find the land neighbors of each land tile
	nb_dic = {}
	for x in xtiles:
		nb_dic[x] = []
		i,j = x
		for xt in range((xtiles.index(x))+1,len(xtiles)):
		# for xt in range(len(xtiles)):	
			# print(xtiles[xt])
			if (xtiles[xt][0] == i+1 and (xtiles[xt][1] == j-1 or xtiles[xt][1] == j or xtiles[xt][1] == j+1)) or (xtiles[xt][0] == i-1 and (xtiles[xt][1] == j-1 or xtiles[xt][1] == j or xtiles[xt][1] == j+1)) or (xtiles[xt][0] == i and (xtiles[xt][1] == j-1 or xtiles[xt][1] == j+1)):
				nb_dic[x].append(xtiles[xt])
    
    #count and identify the continents
    
	cont_count = 0
	cont=[]
	c = []

	for t in nb_dic:
		if t not in c:
			c.append(t)
	for ind	in range(len(c)):
		if nb_dic[c[ind]] != []:
			for jnd in range(len(nb_dic[c[ind]])):
				if nb_dic[c[ind]][jnd] not in c:
					c.append(nb_dic[c[ind]][jnd])
		elif nb_dic[c[ind]] == []:
			cont.extend([c])
			cont_count += 1
			#arranjar maneira de c voltar ao que era ou entao mudar para uma nova coordenada

	# return nb_dic,cont,cont_count

def xtile_coord(world):
	xtiles = []
	for i in range(len(world)):
		for j in range(len(world[i])):
			if world[i][j] == 'X':
				loc = (i,j)
				xtiles.append(loc)
	return xtiles



if __name__ == '__main__':
	# world= createWorld(11,11)
	world= createWorld(5,5)
	print('World:\n',world)
	xtiles = xtile_coord(world)
	# print(xtiles)
	print(continentSize(xtiles,world))
