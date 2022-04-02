const button = document.querySelector('#mainButton');

const inp = document.querySelector("input");

const ul = document.querySelector('ul');

button.addEventListener('click', () => {

   
    const li = document.createElement("li");
    li.innerText = inp.value;
    li.style.padding="5px";
    li.style.color="white";
    li.setAttribute( 'class' , 'li');
    ul.appendChild(li);

    const radio = document.createElement("input");
    radio.setAttribute( 'type' , 'radio');
    
    radio.style.marginRight="10px";
    li.insertAdjacentElement( 'afterbegin',radio); 
    radio.addEventListener( 'click' , ()  => {
        li.style.textDecoration='line-through'
    })
   
    const btn = document.createElement("button");
    btn.innerText="delete";
    btn.style.marginLeft='10px';
    btn.setAttribute( 'class' , 'button' );
    li.insertAdjacentElement( 'beforeend' , btn );
    btn.addEventListener( 'click' , () => {
        li.remove()
    })

    inp.value = " ";
   
})

 button.addEventListener( 'mouseover', () => {
       button.innerText=" click to save "
 })

 button.addEventListener( 'mouseout', () => {
     button.innerText='Add Task'
 })

                                                                      


