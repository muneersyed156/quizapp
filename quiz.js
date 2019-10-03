var a=document.getElementsByTagName("input")
var r=document.getElementById("score-count")
var c=0
for(var i=0;i<a.length;i++){
    a[i].id=a[i].name+a[i].value
    a[i].addEventListener("change",changed)
}
var ans=[]
var answered=[]
$.get("http://5d76bf96515d1a0014085cf9.mockapi.io/quiz",function(data,status){
    for(var i=0;i<data.length;i++){
        ans.push(data[i].answer)
        answered.push(false)
    }
})

function changed(){
    var k=this.name
    k=k.split('')
    k.reverse()
    k.pop()
    k=parseInt(k[0])
       var qno=k
       var qval=parseInt(this.value)
       console.log(qno)
       console.log(qval)
       console.log(ans)
       if(ans[qno-1]==qval && answered[qno-1]==false){
           c+=1
           r.innerHTML=c
           var m=document.getElementById(this.id)
       var tm=m.parentNode
       var tp=tm.parentNode
       tp.classList.add("correct")
       }
       else if(ans[qno-1]!=qval && answered[qno-1]==false){
        var m=document.getElementById(this.id)
        var tm=m.parentNode
        var tp=tm.parentNode
        tp.classList.add("incorrect")
        var w=this.id
        w=w.split('')
        w=w[0]+w[1]+(ans[parseInt(w[1])-1]).toString()
       console.log(w)
       var m=document.getElementById(w)
       var tm=m.parentNode
       var tp=tm.parentNode
       tp.classList.add("correct")
       }
       answered[qno-1]=true
       console.log(answered)
}