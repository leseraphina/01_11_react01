function Hn(){
  return (
    <h2>
      <span>Main</span>
      <b>title</b>
      </h2>
  );
}
function Content(){
  return (
    <>
    <p>콘텐츠 내용</p>
    <ul>
      <li>list 01</li>
      <li>list 02</li>
      <li>list 03</li>
    </ul>
    </>
  );
}


function Main(){
  return (
    <>
     <Hn />
    <Content />
    </>
  );
}

export default Main;