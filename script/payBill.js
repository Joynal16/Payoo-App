document.getElementById('bill-btn')
.addEventListener('click', function(){
    const payBills =  getInputFromUser('pay-bank')
    if(payBills == 'Select a Bank'){
        alert('Please enter a bank')
        return
    }

    const payNumber = getInputFromUser('biller-Number')
    if(payNumber.length!=11){
        alert('wrong number')
        return
    }

    const payAmount = getInputFromUser('biller-Amount')
    const totalBill = getBalance()
    const cutMoney = totalBill - Number(payAmount)
    if(cutMoney < 0){
      alert('invalid')
      return
    }

    const payPin = getInputFromUser('biller-Pin')
    if(payPin =='1234'){
        alert('Payment Bill successfully')
        setBalance(cutMoney)
        const historyParent = document.getElementById('history-container')
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
        <div class="transaction-card p-5 bg-gray-200 rounded-xl">
          Payment Successfully from ${payBills} , Total Money - ${payAmount}
          at ${new Date()}
        </div>
        ` 
        historyParent.appendChild(newDiv)
    }else{
        alert('wrong pin')
        return
    }
})