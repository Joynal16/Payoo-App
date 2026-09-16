document.getElementById('bonus-btn')
.addEventListener('click', function(){

    const  get_bonus =getInputFromUser('bonus-Number');

    const oldBalance =getBalance();

    const newBalance = oldBalance + Number(get_bonus);

    setBalance(newBalance);
    const historyParent = document.getElementById('history-container')
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
        <div class="transaction-card p-5 bg-gray-200 rounded-xl">
          Bonus received Successfully from ${get_bonus}
          at ${new Date()}
        </div>
        ` 
        historyParent.appendChild(newDiv)
})
    

   
