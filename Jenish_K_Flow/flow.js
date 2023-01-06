
                        // problem2
let array =[1,0,78,2,4,0,0]
let ara=array.sort()
let ar=[]
for (let l = 0; l < ara.length; l++) {
        if(ara[l]!=0){
            ar.push(ara[l])
        }
}

for (let k = 0; k < array.length; k++) {
        if(array[k]==0){
            ar.push(array[k])
        }
    
}
alert(ar)



                            // problem3
let count =0
function loan(){
    var l1=[]
    var l2=[]
var loan = [ [25000, "2022-12-18", 10], [50000, "2022-12-15", 8], [25000, "2022-12-09", 10] ]
var holiday = [Date("2022-12-24"),Date("2022-12-25"),Date("2022-12-30"),Date("2023-01-01")]
for (let i = 0; i < loan.length; i++) {
    l1=loan[i]
    console.log(l1);
    var amount = l1[0]
    var dis = new Date(l1[1])
    console.log(dis);
    var day = l1[2]
    var pay =new Date()
    console.log(dis.toLocaleDateString());
    for(let i = 0; i<50; i++){
    if(dis.toLocaleDateString()!=pay.toLocaleDateString()){
        dis.setDate(dis.getDate() +1);
         if(!((dis.toLocaleDateString()=="12/24/2022"||dis.toLocaleDateString()=="12/25/2022"||dis.toLocaleDateString()=="12/30/2022"||dis.toLocaleDateString()=="01/01/2022"||dis.getDate()==7))){
            da=day
            count+=1
            d = count/day
            console.log(d);
           let final_amount =((amount/100)*(d*2))
            console.log(final_amount);
            l1[0]=amount+final_amount
            console.log(l1);
             }
        }
    }
    }
}
loan()