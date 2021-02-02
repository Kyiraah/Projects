name = input ("What is your name")
month = input("Name of month")
hrs = input("Enter Working Hours:")
rate = input("Enter Hourly Rate:")

#Changing strings to float to allow easy calculation
Hours = float(hrs)
Rate = float(rate)

#Calculating Pay
Pay = print(Hours * Rate)

#Declaring amount to be paid to CPA
print("Congrats!", name, "Your", month, "income is GHS", Hours * Rate)