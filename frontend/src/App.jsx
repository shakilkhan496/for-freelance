import './styles/App.css'
import './styles/fonts.css'
import Route from './Routes/index';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Route />
    </div>
  )
}

export default App
