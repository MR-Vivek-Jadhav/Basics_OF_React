function costomRender(ReactElement,Container){

    /* const domElement=document.createElement(ReactElement.type)

    domElement.innerHTML=ReactElement.children
    
    domElement.setAttribute('href',ReactElement.props.href)
    
    domElement.setAttribute('target',ReactElement.props.target)
    
    Container.appendChild(domElement) */

    // **************************


    let domElement= document.createElement(ReactElement.type)
    
    domElement.innerHTML=ReactElement.children

    console.log(domElement);
    
    
   for (const prop in ReactElement.props) {
    
    domElement.setAttribute(prop,ReactElement.props[prop])
        
    }
    Container.appendChild(domElement)
   }


    


// let a =document.createElement('a')

// a.innerHTML='njfkfj'

// document.body.appendChild(a)


let mainContainer=document.getElementById('root')

console.log(mainContainer);

ReactElement={
    type : 'a',
    props:{
        href: 'https://google.com',
        target:'_blanck'
    },
    children:"click me to visit google"
}


costomRender(ReactElement,mainContainer)

