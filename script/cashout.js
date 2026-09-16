

document.getElementById('cashout-btn')
.addEventListener('click', function(){
    const cashOutNumber = getInputFromUser('agent-Number')
    if(cashOutNumber.length!= 11){
        alert('Invalid Number')
        return
    }
    const cashOutAmount = getInputFromUser('cashout-Amount')
    const currentBalance = getBalance()
    const newBalance = currentBalance - Number(cashOutAmount)
    if(newBalance < 0){
        alert('Invalid Balance')
        return
    }
    const cashOutPin = getInputFromUser('cashout-Pin')
    if(cashOutPin === '1234'){
        alert('Cash out Successfully')
        setBalance(newBalance)
        const historyParent = document.getElementById('history-container')
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
        <div class="transaction-card p-5 bg-gray-200 rounded-xl">
          cash out Successfully from ${cashOutNumber} , Total Money - ${cashOutAmount}
          at ${new Date()}
        </div>
        ` 
        historyParent.appendChild(newDiv)
    }else{
        alert('Invalid CashOut Pin Number')
        return
    }
})
