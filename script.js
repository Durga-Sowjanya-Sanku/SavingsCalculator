feather.replace();

const goalAmountInput = document.getElementById('goal-amount');
const currentSavingsInput = document.getElementById('current-savings');
const monthlyContributionInput = document.getElementById(
    'monthly-contribution'
);

const calculateBtn = document.getElementById('calculate-btn');
const progressBar = document.getElementById('progress-bar');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', ()=>{
    const goalAmount = parseFloat(goalAmountInput.value);
    const currentSavings= parseFloat(currentSavingsInput.value);
    const monthlyContribution =  parseFloat(monthlyContributionInput.value);

    if(isNaN(goalAmount) || isNaN(monthlyContribution) || isNaN(currentSavings)) {
        result.textContent = "Please Enter Valid Numbers";
        result.classList.add("show");
        return ;
    }

    const remainingAmount = goalAmount-currentSavings;
    const monthsToGoal = Math.ceil(remainingAmount/monthlyContribution);
    const progressPercentage = (currentSavings/goalAmount)*100;

    progressBar.style.width = `${progressPercentage}%`;

    result.classList.remove("show");
    setTimeout(()=> {
        if(currentSavings>=goalAmount) {
            result.innerHTML = `Congratulations! Your savings have reached your goal!`;
        
        }
        else {
            result.innerHTML = `You will reach your goal in ${monthsToGoal} months`;
            result.classList.add("show");
        }
    }, 100);
});




