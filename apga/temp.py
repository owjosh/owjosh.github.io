#HEADER#
columns = ["Entry Code", "Full Category Path","Trading Name", "Entrant First Name", "Entrant Last Name", "Price", "Average Score", "Judge First Name", "Judge Last Name", "Judge Overall Comments", "Total Score"]
rows = []

def float_or_zero(num):
    try:
        return float(num)
    except:
        return 0
#END HEADER#


#BODY#
total_score = 
row = []
row.append({ApplicationId})
row.append({ApplicationCategoryPath})
row.append({SubmitterProfileForm.tradingName})
row.append({SubmitterProfileForm.firstName})
row.append({SubmitterProfileForm.lastName})
row.append({SubmissionForm.completePriceOfTheHouseOnDisplay})
row.append({AverageScore})
row.append({JudgeProfileForm.firstName})
row.append({JudgeProfileForm.lastName})
row.append({ListOfJudgeTextScores})
row.append(total_score)
rows.append(row)
#END BODY#

#FOOTER#
___columns = columns
___rows = rows
#END FOOTER#