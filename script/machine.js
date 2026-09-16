function getInputFromUser (id){
    const input = document.getElementById(id)
    const value = input.value 
    console.log(id, value);
    return value 
}
function getBalance(){
    const amountInput = document.getElementById('balance')
    const amountGet = amountInput.innerText
    console.log('current Balance',Number(amountGet));
    return Number(amountGet)
}
function setBalance(value){
    const amountInput = document.getElementById('balance')
    amountInput.innerText=value
}
function showOnly(id){
    const addSection = document.getElementById('Add-money')
    const cashSection = document.getElementById('Cashout')
    const transferSection = document.getElementById('transferMoney')
    const transactionSection = document.getElementById('history')
    const paySection = document.getElementById('paybill')
    const getSection = document.getElementById('getBonus')

    addSection.classList.add('hidden')
    cashSection.classList.add('hidden')
    transferSection.classList.add('hidden')
    transactionSection.classList.add('hidden')
    paySection.classList.add('hidden')
    getSection.classList.add('hidden')
    
    const selected = document.getElementById(id)
    selected.classList.remove('hidden')

}