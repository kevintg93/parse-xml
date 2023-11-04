let referenceID = document.getElementById('book id');
let authorHtml = document.getElementById('author');

let file = './user.xml';
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = ()=>{
   if (xhr.readyState == 4){
      if(xhr.status == 200){
         const xmlString = xhr.responseText
         const xmlDocument = new DOMParser().parseFromString(xmlString, "text/xml");
         let books =xmlDocument.querySelectorAll('book');

         referenceID.addEventListener('input',(event)=>{
            let out = event.target
            for (let book of books){ 
               let id = book.querySelector("id")
               if (id.textContent === out.value){
                  authorHtml.innerHTML = book.querySelector('author').textContent;
               }
            }
         })
               } 
               if(xhr.status == 404){
                  console.log('file not found');

               }
            }
         };
xhr.open('get', file, true);
xhr.send();

