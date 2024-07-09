import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './router/home'
import Kons from'./router/hududiy/kons'
import Farmon from'./router/hududiy/farmon'
import Hujjat from'./router/hududiy/hujjat'
import Xayat from'./router/hududiy/xayat'
import Vazir from'./router/hududiy/vazir'
import Qonun from'./router/hududiy/qonun'

import Lokal from './router/malumot/lokal'
import Maktab from './router/malumot/maktab'
import Pedagog from './router/malumot/pedagog'
import Asosiy from './router/Asosiy';
import Dastur from './router/jarayon/dastur'
import Festival from './router/jarayon/festival'
import Galary from './router/galary';
import Aloqa from './router/Aloqa';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/kons' element={<Kons/>}/>
        <Route path='/farmon' element={<Farmon/>}/>
        <Route path='/hujjat' element={<Hujjat/>}/>
        <Route path='/xayat' element={<Xayat/>}/>
        <Route path='/vazir' element={<Vazir/>}/>
        <Route path='/qonun' element={<Qonun/>}/>

        <Route path='/lokal' element={<Lokal/>}/>
        <Route path='/maktab' element={<Maktab/>}/>
        <Route path='/pedagog' element={<Pedagog/>}/>
        <Route path='/asosiy' element={<Asosiy/>}/>

        <Route path='/dastur' element={<Dastur/>}/>
        <Route path='/festival' element={<Festival/>}/>

        <Route path='/galary' element={<Galary/>}/>
        <Route path='/aloqa' element={<Aloqa/>}/>
      </Routes>
    </div>
  );
}

export default App;
