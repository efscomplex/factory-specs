import React from 'react';
import AppHeader from 'components/core/AppHeader'
import AppMain from 'components/core/AppMain'
import AppFooter from 'components/core/AppFooter'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
   return ( 
      <div className = "App" >
         <AppHeader/>
         <AppMain/>
         <AppFooter/>
      </div>
   );
}

export default App;
