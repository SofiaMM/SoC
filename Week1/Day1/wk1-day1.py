# -*- coding: utf-8 -*-
'''
Week 01 - Day 01
Exercises 
@Sofia Faria
'''
from datetime import datetime
from datetime import date


def hoursinyears(years):
	hours = years*365*24
	return hours

def minutesindecades(decades):
	minutes = decades*10*365*24*60
	return minutes

def ageinseconds(age):
	seconds = age*365*24*60*60
	return seconds

def andreea_age(seconds):
	years = seconds/(365*24*60*60)
	return years

def findage(birth):
	today = datetime.now()
	age = today.year - birth.year - ((today.month, today.day, today.hour, today.minute) < (birth.month, birth.day, birth.hour, birth.minute)) # se for true subtrai por 1, se for falso subtrai por 0
	return age
	
# How many days does it take for a 32-bit system to timeout, if it has a bug with integer overflow?
# How about a 64-bit system?






'''
All the letter after a "%" represent a format for something :

%d is the day number
%m is the month number
%b is the month abbreviation
%y is the year last two digits
%Y is the all year
%H  Hour (24-hour clock) as a decimal number [00,23]    
%I  Hour (12-hour clock) as a decimal number [01,12]
%M  Minute as a decimal number [00,59]   
%p  Locale’s equivalent of either AM or PM

'''



if __name__ == '__main__':
	print(hoursinyears(1))
	print(minutesindecades(1))
	print(ageinseconds(21))
	print(andreea_age(48618000))
	datetime_object = datetime.strptime('Oct 1 1996  7:25PM', '%b %d %Y %I:%M%p')   
	print(findage(datetime_object))
	# today = date.today()
	# print(1 - ((today.month, today.day) > (datetime_object.month, datetime_object.day)))
	# print(datetime.now())
