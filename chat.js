const temp = document.createElement('temp');

temp.innerHTML=
`
<style>
.notif-body{
    /* text-align: center; */
    font-size: var(--medium);
}
.notif-img{
    height:3em;
    width:3em;
    border-radius: 50%;
   }
.notif-pop-up {
    padding: 10px 20px;
    font-family:'Mukta', sans-serif;
    border-bottom: 1px solid lightgray;
}
.notif-img-div, .notif-body{
    display: inline;
}
.notif-body{
    position: relative;
    bottom:15px;
    
}
.notif-body small{
    margin-left: 50px;
   
}
</style>

<div class="notif-pop-up">
    
    <div class="notif-img-div">
     <img class="notif-img" src="dp1.jpg">
     </div>
    
     <div class="notif-body">
         <b>RuPaul</b><br>
         <small><b>Sent a photo </b>&#8226;<span> 2 hour ago </span></small>
     </div>

 </div>

`

class ChatCard extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow({mode: 'open'});
    }

      render(){
        this.shadowRoot.appendChild(temp.cloneNode(true));
         this.shadowRoot.querySelector('img').src= this.getAttribute('image')
        this.shadowRoot.querySelector('.notif-body b').innerText= this.getAttribute('name')
        this.shadowRoot.querySelector('small b').innerText = this.getAttribute('event');
        this.shadowRoot.querySelector('small span').innerText = this.getAttribute('time');
        
      }
      connectedCallback(){
       
        this.render();
      }
     
}

window.customElements.define('chat-card',  ChatCard);

