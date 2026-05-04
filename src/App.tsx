/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './lib/ThemeContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import PortfolioProject from './pages/PortfolioProject';
import Exhibitions from './pages/Exhibitions';
import ExhibitionSection from './pages/ExhibitionSection';
import JeddahBiennale from './pages/JeddahBiennale';
import Awards from './pages/Awards';
import PhDThesis from './pages/PhDThesis';
import ArtBook from './pages/ArtBook';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="portfolio/:projectId" element={<PortfolioProject />} />
            <Route path="exhibitions" element={<Exhibitions />} />
            <Route path="exhibitions/:exhibitionId" element={<ExhibitionSection />} />
            <Route path="jeddah-biennale" element={<JeddahBiennale />} />
            <Route path="awards" element={<Awards />} />
            <Route path="phd-thesis" element={<PhDThesis />} />
            <Route path="art-book" element={<ArtBook />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
