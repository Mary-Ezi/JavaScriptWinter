

var inputTotal = 0, inpuCount = 0, average, entry;       


// enter scores until 999 is entered
do{
    entry = parseInt(prompt('Enter test score\nOr enter 999 to end entries'));
    inputTotal += entry;
    inpuCount ++;
    average = ((inputTotal - 999) / (inpuCount - 1));
}
while (entry != 999);

alert('Average score is: ' + average);