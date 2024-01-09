import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Styles/Compliancestyles.css'
// import Costs from './costs';
// import Sidebar from './Components/SIdebar/Sidebar';
// import Topbar from './Components/topbar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Complaince from './Components/Topmenu/Complaince';
import Costsbud from './Components/Topmenu/Costsbud';
import Service from './Components/Topmenu/Service';
import Application from './Components/Topmenu/Application';
// import Admin from './Components/Topmenu/Admin';
import LineChart from './LineChart';
import BarCh from './barChart';
import App from './App';
import Home from './Home';
import CostOfSaving from './Components/Costs/CostOfSaving';
import Budget from './Components/Costs/Budget';
import BudgetReport from './Components/Costs/BudgetReport';
import Credit from './Components/Costs/Credit';
import Costs from './costs';
import Header2 from './Components/Header2/Header2';
// import Hitrust from './Components/compliance/hitrust';
import Hitrust1 from './Components/compliance/Hitrust1';
import Tags from './Components/compliance/tags/Tags';
import Compliance from './Components/compliance/Compliance';
import OverallStatus from './Components/compliance/HitrustSubComp/OverallStatus';
import BaselineConfig from './Components/compliance/HitrustSubComp/BaselineConfig';
import NetworkComp from './Components/compliance/HitrustSubComp/NetworkComp';
import Sk004 from './Components/compliance/HitrustSubComp/Sk004';
import Sk005 from './Components/compliance/HitrustSubComp/Sk005';
import Sk006 from './Components/compliance/HitrustSubComp/Sk006';
import Sk007 from './Components/compliance/HitrustSubComp/Sk007';
import ResAccess from './Components/compliance/HitrustSubComp/ResAccess';
import AdLdap from './Components/Admin/AdLdap';
import ServicesAdmin from './Components/Admin/ServicesAdmin';
import ComplianceException from './Components/Admin/ComplianceException';
import ComplianceExclusion from './Components/Admin/ComplianceExclusion';
import CIAM from './Components/Admin/CIAM';
import ControlsAndRules from './Components/Admin/ControlsAndRules';
import TagsAdmin from './Components/Admin/TagsAdmin';
import Admin from './Components/Topmenu/Admin';
import Compliance2 from './Components/Compliance2/Compliance2';
import Hitrust2 from './Components/Compliance2/Hitrust2';
import Tags2 from './Components/Compliance2/Tags2';
import Hitrust3 from './Components/Compliance3/Hitrust3';
import Tagg3 from './Components/Compliance3/Tagg3';
import Compliance3 from './Components/Compliance3/Compliance3';

// import { NavLink } from 'react-router-dom';

// import { Box, Card, Typography } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <>



    <BrowserRouter>
      {/* <Topbar/> */}
      <Header2 />
      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route path='compliance' element={<Compliance />} >
          <Route path='hitrust' element={<Hitrust1 />}>
              <Route path="overallStatus" element={<OverallStatus />} />
              <Route path="BaselineConfig" element={< BaselineConfig />} />
              <Route path="NetworkComp" element={< NetworkComp />} />
              <Route path="ResAccess" element={< ResAccess />} />

              <Route path="Sk004" element={< Sk004 />} />
              <Route path="Sk005" element={< Sk005 />} />
              <Route path="Sk006" element={< Sk006 />} />
              <Route path="Sk007" element={< Sk007 />} />
          </Route>
          <Route path='tags' element={<Tags />} />

        </Route>
        <Route exact path='compliance2' element={<Compliance2 />} >


        <Route path='hitrust2' element={<Hitrust2 />}/>
        <Route path='tags2' element={<Tags2 />}/>


        </Route>
        <Route exact path='/compliance3' element={<Compliance3 />} >
        <Route path='hitrust3' element={<Hitrust3 />}/>
        <Route path='tags3' element={<Tagg3 />}/>
        </Route>


        <Route exact path='costs' element={<Costsbud />} >
          <Route path='costOfSavings' element={<CostOfSaving />}>
            {/* <Route exact path='piechart' element={<App />} /> */}
            <Route path='barchart' element={<BarCh />} />
            <Route path='linechart' element={<LineChart />} />
          </Route>
          <Route path='budget' element={<Budget />} />
          <Route path='budgetreport' element={<BudgetReport />} />
          <Route path='costOfService' element={<Costs />}>
            <Route exact path='piechart' element={<App />} />
            <Route path='barchart' element={<BarCh />} />
            <Route path='linechart' element={<LineChart />} />
          </Route>
          <Route path='credit' element={<Credit />} />


        </Route>
        <Route path='service' element={<Service />} />
        <Route path='application' element={<Application />} />
        <Route path='admin'  element={<Admin/>}>
          <Route path='tags' element={<TagsAdmin />} />
          <Route path='AdLdap' element={<AdLdap />} />
          <Route path='service' element={<ServicesAdmin />} />
          <Route path='complianceexception' element={<ComplianceException />} />
          <Route path='complianceexclusion' element={<ComplianceExclusion />} />
          <Route path='controls' element={<ControlsAndRules/>}></Route>
          <Route path='ciam' element={<CIAM />} />
          {/* <Route path='budget' element={<Budget />} /> */}
        </Route>

      </Routes>
    </BrowserRouter>


    {/* <div className='containerz'>
    <Sidebar/>
    <div className='others'>other pages
    <Costs/>
    </div>
   </div> */}

  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
