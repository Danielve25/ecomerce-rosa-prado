import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import Layout from './layout/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
