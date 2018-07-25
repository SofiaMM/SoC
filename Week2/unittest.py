# -*- coding: utf-8 -*-

'''
Week-02
Day-01
@Sofia Faria
'''

import unittest
from day1 import moo

# moo(3)

# https://docs.python.org/3/library/unittest.html

class TestMoo(unittest.TestCase):

	def test0(self):
		self.assertEqual(moo(0), '') #compares output to what it's desire, in this case ''
	def test1(self):
		self.assertEqual(moo(1), 'moo')
	def test2(self):
		self.assertEqual(moo(2), 'moomoo')
	def test3(self):
		self.assertEqual(moo(3), 'moomoomoo')
		
unittest.main() #calls the whole thing


#[Homework] Fazer o testing dos chapters do 'Learn python the hard way'!!