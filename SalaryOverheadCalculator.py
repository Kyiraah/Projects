Name = input("What is your name")
hrs = input("Enter Hours")
rate = input("Enter Rate")
h = float(hrs)
r = float(rate)

#Defining standard hours (sh) and time & half Overtime
sh = 40.00
th = 1.5

#defining function
def computepay(h,r):

#if statement to check if payment should include overtime or not
    if h > sh :
     return (((h-sh)*r*th) + (sh*r))
    else: return(sh*r)
 

#Assigning p to defined function     
p = computepay(h,r)

#Printing total pay
print("Pay",p, "to", Name)