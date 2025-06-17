//main html me root wale div ko target kiya hai
const mainContainer = document.querySelector('#root')

//creating a react element--eod react me har element ese hi tarverse kiya jata hai aur customize kiya jata hai
const reactElement ={
      type : 'a',
      props : {
            href : 'https://google.com',
            target : '_blank'
      },
      children : 'click on me to visit google'
}

//to inject the reactElement we use DOM method, create a DOM element via function and set its attributes
function customRender(reactElement,mainContainer){
      /*
      const domElement = document.createElement(reactElement.type)
      domElement.innerHTML = reactElement.children
      domElement.setAttribute('href',reactElement.props.href)
      domElement.setAttribute('target',reactElement.props.target )
      mainContainer.appendChild(domElement)
      */

      //better verison--modular 
      const domElement = document.createElement(reactElement.type)
      domElement.innerHTML = reactElement.children
      for (const prop in reactElement.props) {
            if (prop === 'children')  continue;
            domElement.setAttribute(prop,reactElement.props[prop])
      }
      mainContainer.appendChild(domElement)
}

customRender(reactElement,mainContainer)
