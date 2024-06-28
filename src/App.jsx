import { useState } from 'react';
import Card from './components/Card';
import SearchColor from './components/SearchColor';

const App = () => {
  const [color, setColor] = useState('');
  return (
    <div className='App'>
      <Card color={color} />
      <SearchColor color={color} setColor={setColor} />
    </div>
  );
};

export default App;
