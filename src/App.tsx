import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Signin from './pages/Signin';
import Add from './pages/Add';
import NotFound from './pages/NotFound';
import Error from './pages/Error';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/add' element={<Add />} />
          <Route path='/book/:id' element={<Home />} />
          <Route path='/edit/:id' element={<Home />} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
    
  );
}

export default App;
