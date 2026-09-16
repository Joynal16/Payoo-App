
document.getElementById('add-money-btn')
.addEventListener('click', function(){
    const addBank = getInputFromUser('add-money-bank')
    if(addBank == 'Select a Bank'){
        alert('Please select a bank')
        return
    }
    const bankAccountNumber = getInputFromUser('add-money-Number')
    if(bankAccountNumber.length != 11){
        alert('Wrong Account Number')
        return
    }
    const accountAmount = getInputFromUser('add-money-Amount')
    const addNewMoney = getBalance() + Number(accountAmount)
    const accountPin = getInputFromUser('add-money-Pin')
    if(accountPin == '1234'){
        alert(`Money Added Successfully from ${addBank} at ${new Date()} `)

        setBalance(addNewMoney)
        const historyParent = document.getElementById('history-container')
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
        <div class="transaction-card p-5 bg-gray-200 rounded-xl">
          Money Added Successfully from ${addBank} , acc-no ${bankAccountNumber}
          at ${new Date()}
        </div>
        ` 
        historyParent.appendChild(newDiv)
    }else{
        alert('Wrong Pin')
        return
    }
})