import reeact from 'react';
import(routes, route) from 'react-route-dom';
import shortner from './backend/shortner';
imprt analytics from './backend/analytics';

const approutes =() =>{
  <routes>
  <route path="/" element={<shortner/>} />
<route path ="/analytics" element={<analytics/>}/>
  </routes>
);
export default approutes;
