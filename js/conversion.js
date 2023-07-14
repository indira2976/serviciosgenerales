dolarCont=document.querySelector('#dolar')
euroCont=document.querySelector('#euro')
librasCont=document.querySelector('#libras')

function traer(){
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(res=>res.json())
    .then(data=>{
        dolarCont.innerHTML=`${data.bpi.USD.rate}`
        euroCont.innerHTML=`${data.bpi.EUR.rate}`
        librasCont.innerHTML=`${data.bpi.GBP.rate}`
        
    }

       )

}

