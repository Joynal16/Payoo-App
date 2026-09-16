document.getElementById('transfer-btn')
.addEventListener('click', function(){


    const userAcc = getInputFromUser('transfer-Number')
    if(userAcc.length!=11){
        alert('Number is Invalid')
        return
    }
    const userAmount = getInputFromUser('transfer-Amount')
    
    
    const totalTransferMoney = getBalance()
    const newTotalMoney = totalTransferMoney - Number(userAmount)

    const userPinNum = getInputFromUser('transfer-Pin')
    if(userPinNum == '1234'){
        alert('Money transferred successfully')
        setBalance(newTotalMoney)
        const historyParent = document.getElementById('history-container')
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
        <div class="transaction-card p-5 bg-gray-200 rounded-xl">
          Transfer Successfully from- ${userAcc} , Total Money - ${userAmount}
          at ${new Date()}
        </div>
        ` 
        historyParent.appendChild(newDiv)
    }else{
        alert('invalid user pin')
        return
    }
})