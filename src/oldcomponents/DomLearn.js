import './DomLearn.css'
import React, { Component } from 'react'

export default class Test0 extends Component {
    constructor(props){
        super(props)
    }

    state={}

    startAlert=()=>{
        setInterval(()=>{console.log("danger")},3000)
    }

    clearAlert=()=>{
        clearInterval()
    }

    componentWillMount(){
        let arr=[]
        for(let i=0;i<=100;i++){ //should not over 2000 , it will take long
            arr=[...arr,i]
        }
        this.setState({arr})
    }



    componentDidMount(){
        const ele=document.querySelector('#div-1')
        console.log(ele.children)
        
    }

    componentWillUnmount(){
        this.setState({ele:''})

    }

    render() {
        return (
            <React.Fragment>
                <div id="div-1">
                    <div id="div-2">
                        <h1 id="h1-1">Brad Dom 1 <span style={{display:"none"}}> Loveyou</span></h1>
                        <ul>
                            <li className="list-a">a</li>
                            <li className="list-a">b</li>
                            <li className="list-a">c</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


/*
To access document
console.dir(document)
#document <URL>

console.log(document)
<!doctype>...</!doctype>

{console.log(document.URL)}
http://localhost:3000/old

{console.log(document.title)}
{document.title="123"}

{console.log(document.doctype)}
<!doctype html>

{console.log(document.head)}
<head>...</head>

{console.log(document.body)}
<body>...</body>
all element created in react is in <body> 

{console.log(document.all)}
<dom>...</dom>

{console.log(document.all[2])}
<style>...</style>



Sometime render is slow to do thing after render 
must do under
ComponentDidMount (just for the first time after render)

ComponentDidUpdate (just after props/state change after render)

ComponentWillUnmout (please reset your state before leave page)

<h1>ok <span style={{display:"none"}}>123</span></h1>
textContent=ok123
innerText=ok (because dispaly:"none")

<h1 id="h1-1">Brad Dom 1 <span style={{display:"none"}}> Loveyou</span></h1>
        const ele=document.getElementById("h1-1")
        console.log(ele.innerText)
        console.log(ele.textContent)


        how to user setinterval, clearinterval
@componentDidMount
startAlert=()=>{
    setInterval(()=>{console.log("danger")},3000)
}

@componentWillUnmount
clearAlert=()=>{
    clearInterval()
}

html has collection , it is not array,
to change property need to access one by one

<li className="list-a">a</li>
<li className="list-a">b</li>
<li className="list-a">c</li>
const arr=document.getElementByClassName("list-a")
arr[0].textContent="new"
or 
//To change all need to use loop
for(let i=0;i<arr.length;i++){
    arr[i].style.color="red"
}

<li className="list-a">a</li>
<li className="list-a">b</li>
<li className="list-a">c</li>
const ele=document.getElementsByTagName("li")
ele[0].textContent="A"
ele[1].style.color="red"

const ele=document.querySelectorAll('.list-a')
ele[1].style.color="red"

const ele=document.querySelector('#h1-1)
ele.style.color="red"

const ele=document.querySelector('input[type="submit"])

const ele=document.querySelector('li:last-child')

const ele=document.querySelector('li:nth-child(2))

const ele=document.querySelectorAll('li:nth-child(odd))
for(let i=0;i<odd.length;i++){
    odd[i].style.color="red"
}


//Traversing Dom
<div id="div-1">
    <div id="div-2">
        <h1 id="h1-1">Brad Dom 1 <span style={{display:"none"}}> Loveyou</span></h1>
        <ul>
            <li className="list-a">a</li>
            <li className="list-a">b</li>
            <li className="list-a">c</li>
        </ul>
    </div>
</div>

const ele=document.querySelector('ul')
console.log(ele.parentNode)
//<div id="div-2">
console.log(ele.parentNode.parent)
//<div id="div-1">

console.log(ele.childNodes)
NodeList(3) [li.list-a, li.list-a, li.list-a]
0: li.list-a
1: li.list-a
2: li.list-a

querySelectorAll
querySelector
.length

parentNode
parentElement <<
childNodes
children <<
children[1] <<
firstChild
firstElementChild <<
lastChild
lastElementChild <<
nextSibling
nextElementSibling <<
previousSibling
previousElementSibling <<


createElement()
setAttribute() >> or .
createTextNode()
removeChild()

appendChild()
insertBefor()//for sibling
insertAfter()//for sibling

const newDiv=document.createElement('div')
newDiv.className='div-1'
newDiv.id='div-1'
newDiv.setAttribute('title','hello')

container.insertBefore(newDiv,h1)

//Event Listener
const btn=document.querySelector('#div-1').addEventListener('click',()=>{})
const btn=document.querySelector('#div-1').addEventListener('click',funcA)

funcA=(e)=>{

}
e
e.target
e.target.className
e.target.classList >> array
e.type  click
e.altKey  true or false
e.ctrlKey
e.shiftKey

click
dblclick
mousedown
mouseup

mouseenter //enter element
mouseleave

mouseover //enter child of element
mouseout

mousemove

e.offsetX
e.offsetY

keyup
keydown
keypress

focus //click inside input
blur  //out of focus

cut
paste

input //any action happen at input or select to see what action use e.type

change //action of select

submit //action of form

e.type // use to see what kind of action happen


confirm('Are you sure')

rgb(1,1,1)
<div>
    <h3>OK</h3>   innerHTML='<h3>'+OK+'</h3>'
</div>

itemList.addEventListener('click',removeItem)
e.target.classList.contains('delete') // in case that element has multiple className 

li=e.target.parentElement
itemList.removeChild(li)


var items=itemList.getElementByTagName('li')
Array.from(items).forEach(function(i){
    var itemName=item.firstChild.textContent
    if(itemName.toLowerCase().indexOf(text)!=-1){
        item.style.display="block"
    }else{
        time.style.display="none"
    }
})


*/