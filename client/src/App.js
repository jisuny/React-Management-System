import './App.css';
import Customer from './component/Customer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const customer =[
  {
  'id':1,
  'image': 'http://jsyoon.dothome.co.kr/no_image.jpg',
  'name': '윤지선',
  'birthday': '950211',
  'gender': '여',
  'job': '직장인'
  },
  {
    'id':2,
    'image': 'http://jsyoon.dothome.co.kr/no_image.jpg',
    'name': '김김',
    'birthday': '950211',
    'gender': '남',
    'job': '학생'
  },
  {
    'id':3,
    'image': 'http://jsyoon.dothome.co.kr/no_image.jpg',
    'name': '윤윤',
    'birthday': '961222',
    'gender': '여',
    'job': '학생'
  }    
]

function App() {
  return (
    <Paper className='paper'>
      <Table className='table'>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>프로필 사진</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customer.map(c=> {
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
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
