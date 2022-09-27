import logo from './logo.svg';
import './App.css';
function Nav() {
  return 
  <nav class="navbar">
    <div class="navbar_logo">
        <i class="fa-solid fa-washing-machine"></i>
        <a href="">Laundry Service</a>    
    </div>
    <ul class="navbar_menu">
        <li><a href="https://ko.reactjs.org/tutorial/tutorial.html">kim's laundry service</a></li>
        <li><a href="https://ko.reactjs.org/tutorial/tutorial.html">이용방법</a></li>
        <li><a href="https://ko.reactjs.org/tutorial/tutorial.html">이벤트/공지</a></li>
        <li><a href="https://ko.reactjs.org/tutorial/tutorial.html">회사 소개</a></li>
    </ul>
    <div class="navbar_links">

    </div>
  </nav>

}
function App() {
  return (
    <nav class="navbar">
    <div class="navbar_logo">
        <i class="fa-solid fa-washing-machine"></i>
        <a href="https://ko.reactjs.org/tutorial/tutorial.html">Laundry Service</a>    
    </div>
    <ul class="navbar_menu">
        <li><a href="https://ko.reactjs.org/tutorial/tutorial.html">kim's laundry service</a></li>
        <li><a href="https://ko.reactjs.org/tutorial/tutorial.html">이용방법</a></li>
        <li><a href="https://ko.reactjs.org/tutorial/tutorial.html">이벤트/공지</a></li>
        <li><a href="https://ko.reactjs.org/tutorial/tutorial.html">회사 소개</a></li>
    </ul>
    <div class="navbar_links">

    </div>
  </nav>
  );

  
}

export default App;
