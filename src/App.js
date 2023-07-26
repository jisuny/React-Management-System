import './App.css';
import Customer from './component/Customer';

function App() {

  const customer =[
    {
    'id':1,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '950211',
    'gender': '여',
    'job': '직장인'
    },
    {
      'id':2,
      'image': 'https://placeimg.com/64/64/any',
      'name': '홍홍',
      'birthday': '950211',
      'gender': '나',
      'job': '학생'
    },
    {
      'id':3,
      'image': 'https://placeimg.com/64/64/any',
      'name': '호어이',
      'birthday': '12565',
      'gender': '여',
      'job': '학생'
    }    
  ]

  return (
    <div className="App">
      {
        customer.map(c=> {
          return(
            <Customer 
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
