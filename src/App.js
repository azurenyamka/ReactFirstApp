// import logo from './logo.svg';
import './App.css';

function App() {
  const users = [
    {name:"John", age:15, imageURL:"https://home.adelphi.edu/~ji21632/rachel.png"},
    {name:"Boldo", age:15, imageURL:"https://wl-brightside.cf.tsp.li/resize/728x/jpg/5b0/657/93924d52a5a9a3247ee914db2a.jpg"},
    {name:"Chimgee", age:20, imageURL:"https://static.wikia.nocookie.net/friends/images/9/9a/Screen_Shot_2015-04-10_at_14.06.47.png/revision/latest?cb=20150410130719"},
    {name:"Dorjo", age:25, imageURL:"https://static.wikia.nocookie.net/friends/images/0/0b/RossGeller.jpg/revision/latest/smart/width/250/height/250?cb=20180424154547"},
    {name:"Bataa", age:30, imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcTAlxDKb-pblIlAdLwiK_hVwg5oLRrixsQ&usqp=CAU"},
  ];
  let sum = 0;
  sum = sum + users[1].age;
  sum = sum + users[2].age;
  sum = sum + users[3].age;
  sum = sum + users[4].age;
  sum = sum + users[0].age;
  sum = sum / 5 ;


  return (
    <div className="App">
      <div className="container">
        <div className="card card-1">
          <h3>Name :{users[0].name}</h3>
          <p>Age :{users[0].age}</p>
          <img src={users[0].imageURL}></img>
        </div>
        <div className="card card-2">
          <h3>Name :{users[1].name}</h3>
          <p>Age :{users[1].age}</p>
          <img src={users[1].imageURL}></img>
        </div>
        <div className="card card-3">
          <h3>Name :{users[2].name}</h3>
          <p>Age :{users[2].age}</p>
          <img src={users[2].imageURL}></img>
        </div>
        <div className="card card-4">
          <h3>Name :{users[3].name}</h3>
          <p>Age :{users[3].age}</p>
          <img src={users[3].imageURL}></img>
        </div>
        <div className="card card-5">
          <h3>Name :{users[4].name}</h3>
          <p>Age :{users[4].age}</p>
          <img src={users[4].imageURL}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
