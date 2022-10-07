import logo from './logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoap } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import {useState} from 'react';


function Header(props) {
  const daemoon = props.daemoon;
  return <header>
    <h1><a id = {daemoon.id} href="/" onClick={function(e){
      e.preventDefault();
      props.onChangedMode(e.target.id);
    }}>{daemoon.title}</a></h1>
  </header>
}
function Nav(props) {
  const lis = []
  for(let i=0; i<props.topics.length; i++) {
    let topic = props.topics[i];
    lis.push(<li key={topic.id}>
      <a id = {topic.id} title={topic.title} href={'/read/' + topic.id} onClick={e=>{
        e.preventDefault();
        props.onChangedMode(e.target.title); // target 은 이벤트를 유발시킨 '태그' 임
      }}>{topic.title}</a>
      </li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const daemoon = {id : 1, title : "Kim's Laundry Service", body : 'daemoon page'};
  const topics = [
    {id : 1, title:'home', body : 'home page'},
    {id : 2, title:'goods', body : 'goods page'},
    {id : 3, title:'settings', body : 'my page'}
  ]
  
  let content = 'read';
  if(mode === 'READ') {
    content = <Article title = 'read' body = 'READ'></Article>
  }else if(mode === 'WELCOME'){
    content = <Article title = 'Hello' body = 'Hej!'></Article>
  }
  return (
  <div>
    <Header daemoon = {daemoon} onChangedMode={(id)=>{ 
      // alert(daemoon.title);
      // console.log('===============');
      // console.log(daemoon);
      // console.log('===============');
      setMode(
        'WELCOME'
      );
    }}></Header>
    <Nav topics = {topics} onChangedMode={(title)=>{
      //alert(title);
      setMode(
        'READ'
      );
    }}></Nav>
    {content}
  </div>  
    
    //<daemoonIcon></daemoonIcon>
    // <Header></Header>
    
  );   
}

export default App;
