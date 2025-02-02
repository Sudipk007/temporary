
const {readFile,writeFile}= require('fs');
let first;
function Do(){
    readFile('./content/first.txt','utf8',(error,result)=>{
        if(error){
            console.log(error)
            return
        }
       first= result;
       

       
        
        
        readFile('./content/second.txt','utf8',(error,result)=>{
            if(error){
                console.log(error)
                return
            }
           const second = result;
            
        })
       
    })
    

}
console.log(first);

const reee= Do();


readFile('./content/first.txt','utf8',(error,result)=>{
    
    const res = result;
    const hello ='helllooo baby';
   writeFile('./content/newR.txt',`${hello}  ${reee}     ${res}`,(result,error)=>{
    if(error){
       
        return
    }
   
    console.log(result);
   });
})