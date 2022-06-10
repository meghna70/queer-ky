
const template = document.createElement('template'); 

template.innerHTML=
`  <style>
div.head{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width:50%;
}
div.head {
    align-self:flex-start;
}
div.head .ingo h3{
    padding: 0;
    margin: 1px;
    font-size: 1.5em;
}
.profile-photo{
    left:0;
    height:3em;
    width:3em;
    border-radius: 50%;
    z-index: 0;
 }
 .feed .user{
    display: flex;
    gap:1rem;
}
  .feed{
    background-color: #eeedf1;
    padding: 1em;
    margin: 5%;
    font-size: var(--medium);
    line-height: 1.5;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0,0.25);
   
 }

div.photo{
    border-radius: 1em;
    overflow:hidden;
    margin:0.7rem 0;
    width:90%;
    
}

.photo img{
  width: 100%;
  background-color: #eeedf1;
  aspect-ratio:1;
}

.photo img{
     height: 100%;
     width: 100%;
}
 .action-btn{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:90%;
    background-color: #eeedf1;
    font-size: var(--large);
}
 .feed .action-btn span{
    padding: 0px calc(var(--small)/2);
}

</style>

<div class="feed">
<div class="head">
  
  <div class="user">
    <div >
      <img class="profile-photo" src="dp4.jpg">
    </div>
    <div class="ingo">
      <h3 id="name">Kieran78</h3>
      <small>feeling proud 12 mins ago</small>
    </div>
    <span class="edit"></span>
  </div>

</div>

<div class="photo">
  <img class="post" src="post1.jpg">
</div>

<div class="action-btn">
  <div class="i-btn">
    <span>likee <i class="far fa-heart"></i></span>
    <span> share<i class="far fa-comment"></i></span>
    <span>subs<i class="fas fa-paper-plane"></i></span>
  </div>
  <div class="report">
    <span><i class="fa fa-solid fa-flag"></i></span>
  </div>
</div>

<div>
  <b id="name">Kieran78</b> <span class="caption">“FIGHT BACK TO END GAY OPPRESSION, GAY CAUCUS YAWF” Orlando, Florida, c. 1978. Photo c/o LGBTQ History Museum of Central Florida. </span>
 </div>

</div>`;

class FeedCard extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        
      }

      connectedCallback(){
       
        this.render();
      }
     
      render(){
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('.profile-photo').src= this.getAttribute('image')
        this.shadowRoot.querySelector('.post').src= this.getAttribute('postimg')
        this.shadowRoot.querySelector('#name').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('small').innerText = this.getAttribute('status');
        this.shadowRoot.querySelector('.caption').innerText = this.getAttribute('caption');
     
      }

}

window.customElements.define('feed-card',  FeedCard);
