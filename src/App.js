// import logo from './logo.svg';
// import { Link } from '@mui/material';
// import {  Link } from "react-router-dom";
import './App.css';
// import Cardz from './Card';
// import Card from './Card';
import PieChart from './Piechart';
// import CustomizedTables from './Coustomtable2';
// import LineChart from './LineChart';
// import BarCh from './barChart';
// import BarCh from './barChart';
function App() {
  return (
    <div>
      
      {/* <nav>
        style = {{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem'
        }}
        <Link to='/'>Home</Link>
        <Link to='/barchart'>BarChart</Link> | {''}
        <Link to='/linechart'>LineChart</Link>
      </nav> */}
      
      {/* <ul>
        <li><Link to='/'>Home</Link></li> 
        <li><Link to='/barchart'>barChart</Link></li> 
        <li><Link to='/linechart'>linechart</Link></li> 

      </ul> */}
     {/* <button className='btn btn-success'>click</button> */}
      <PieChart/>
      {/* <Cardz/> */}
     {/* <CustomizedTables/> */}
     
    </div>
  );
}

export default App;
