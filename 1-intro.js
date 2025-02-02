let amount= 12
if(amount<10){
    console.log('Hey its small!!!!')
}
else{
    console.log('Its big!!!!!!')
}

console.log(__dirname)
setInterval(()=>{
    console.log(amount)
    amount++;


},1000)