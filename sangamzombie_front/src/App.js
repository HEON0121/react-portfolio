import logo from './logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoap } from "@fortawesome/free-solid-svg-icons";
import './App.css';

// function Header() {
//   return
//   <header>
//     <div class="navbar_logo">
//       <i class="fa-solid fa-washing-machine"></i>
//       <a href="https://ko.reactjs.org/tutorial/tutorial.html">Laundry Service</a>    
//     </div>
//   </header>
// };

// function Nav() {
//   return <nav class="navbar">
//   {/* <div class="navbar_logo">
//       <i class="fa-solid fa-washing-machine"></i>
//       <a href="https://ko.reactjs.org/tutorial/tutorial.html">Laundry Service</a>    
//   </div>  */}
//   <div>

//   </div>
//   <ul class="navbar_menu">
//       <li><a href="https://ko.reactjs.org/tutorial/tutorial.html">kim's laundry service</a></li>
//       <li><a href="https://ko.reactjs.org/tutorial/tutorial.html">상품</a></li>
//       <li><a href="https://ko.reactjs.org/tutorial/tutorial.html">이벤트/공지</a></li>
//       <li><a href="https://ko.reactjs.org/tutorial/tutorial.html">My Page</a></li>
//   </ul> 
//   <div class="navbar_links">

//   </div>
// </nav>
  
// };


// function daemoonIcon(){
//   return <FontAwesomeIcon icon="faSoap" />
// };
function Header(props) {
  return <header>
    <h1><a href="/" onClick={function(e){
      e.preventDefault();
      props.onChangedMode(e.target.id);
    }}>{props.title}</a></h1>
  </header>
}
function Nav(props) {
  const lis = []
  for(let i=0; i<props.topics.length; i++) {
    let topic = props.topics[i];
    lis.push(<li key={topic.id}>
      <a href={'/read/' + topic.id} onClick={e=>{
        e.preventDefault();
        props.onChangedMode(e.target.id);
      }}>{topic.title}</a>
      </li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Article() {
  return <article>
    <h2>Welcome</h2>
    Hej!
  </article>
}

function App() {
  const topics = [
    {id : 1, title:'home', body : 'home page'},
    {id : 2, title:'goods', body : 'goods page'},
    {id : 3, title:'settings', body : 'my page'}
  ]
  const mode = 'read';
  let content = 'read';
  if(mode === 'read') {
    content = <Article title = 'read' body = 'READ'></Article>
  }else{
    content = <Article title = 'Hello' body = 'Hej!'></Article>
  }
  return (
  <div>
    <Header title="Laundry" onChangedMode={(id)=>{ 
      alert(id);
      console.log('===============');
      console.log(id);
      console.log('===============');
    }}></Header>
    <Nav topics = {topics} onChangedMode={(id)=>{
      alert(id);
    }}></Nav>
    {content}
  </div>  
    
    //<daemoonIcon></daemoonIcon>
    // <Header></Header>
    
  );   
}

export default App;
