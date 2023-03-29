import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Nav from './Nav';
import Home from '../pages/home/Home';
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact';
import Gallery from '../pages/gallery/Gallery';
import Plans from '../pages/plans/Plans';
import NotFound from '../pages/notFound/NotFound';
import Trainers from '../pages/trainers/Trainers';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='plans' element={<Plans />} />
        <Route path='trainers' element={<Trainers />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
