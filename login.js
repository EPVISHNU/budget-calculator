function register(){
    const customer={
        name:regname.value,
        pass:regpass.value
    }
    if(customer.name==""||customer.pass==""){
        alert('Enter full details.')
    }
    else{
        if(customer.name in localStorage){
            alert('ID already exist.')
        }
        else{
            localStorage.setItem(customer.name,JSON.stringify(customer))
            alert('ID added successfully.')
            window.location='./login.html'
        }
    }
}


function login(){
    // let key= logname.value
    // let cust = JSON.parse(localStorage.getItem(key))
    // console.log(cust);

    // if(cust.pass==logpass.value){
    //     alert(`Welcome ${cust.name}`)
    //     window.location='./index.html'
    // }
    // else{
    //     alert('Password or ID incorrect.')
    // }
    

    if(logname.value in localStorage){
        let cust = JSON.parse(localStorage.getItem(logname.value))
              if(cust.pass == logpass.value){
                sessionStorage.setItem("users",JSON.stringify(cust))
                alert(`Welcome ${logname.value}`)
                window.location='./index.html'

                logname.value=""
                logpass.value=""
              }
              else{
                alert('Wrong password.')
              }
    }
    else{
        alert('ID not found.')
    }
}

var data=0;
var intot=0;
function add(){
    
let tot ={
    mode:inc.value,
    rupee:incamt.value
}

    if(incamt.value ==""||inc==""){
        alert('Enter proper values.')
    }
    else{
        localStorage.setItem(inc.value,tot.rupee)

        alert('Income added successfully.')

        let amount=Number(localStorage.getItem(inc.value,tot.rupee))
        console.log(amount);

      data+=amount;
      result.innerHTML=data  

      

      htmlData=`
    
      
      <li style="background-color:rgb(77, 144, 180) ;" class="list-group-item mb-2 rounded shadow text-light"><h4 id="exname" class="text-light">${inc.value}</h4> <p class="text-light" id="examt">${tot.rupee}</p></li>
      `
       list.innerHTML+=htmlData

          intot+=amount;
          inctot.innerHTML=intot


       inc.value=""
       incamt.value=""

    }
}


var extot=0;
function minus(){
    let tot1={
        modee:exp.value,
        rupee:expamt.value
    }
    if(exp.value=="",expamt.value==""){
        alert('Enter proper values.')

    }
    else{
        localStorage.setItem(tot1.modee,tot1.rupee)


        let amounts=Number(localStorage.getItem(exp.value,tot1.rupee))
        console.log(amounts);

        data-=amounts;
        result.innerHTML=data


        exp.value=""
        expamt.value=""

        htmlData=`
        <li style="background-color:rgb(77, 144, 180) ;" class="list-group-item mb-2 rounded shadow text-light"><h4 id="exname" class="text-light">${tot1.modee}</h4> <p class="text-light" id="examt">${tot1.rupee}</p></li>

        `
       listex.innerHTML+=htmlData


         extot+=amounts;
         exptot.innerHTML=extot

         alert('Expenses added successfully.')


    }
     

}






function logout(){
    sessionStorage.clear()
    window.location='./login.html'}


function clearAll(){
    localStorage.clear()
    data=""
    result.innerHTML="0"
    list.innerHTML=""
    listex.innerHTML=""
    intot=""
    extot=""
    inctot.innerHTML="0"
    exptot.innerHTML="0"
    alert('Budget info cleared.')

}    