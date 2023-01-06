
                    // problem1
A=[100,180,260,310,40,535,695]
let num=0
let ind1 = 0
let ind2 = 0
for (let i = 0; i <A.length; i++) {
    for (let k = 1; k < A.length; k++) {
        let h=A[i]-A[k]
        if (h>num){
            num=h
            ind1 = i
            ind2 = k
        }    
    }
}
console.log(ind2,ind1);