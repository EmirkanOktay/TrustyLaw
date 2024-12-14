import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../App';
import AboutUsPage from '../Pages/AboutUsPage';
import ContactPage from '../Pages/ContactPage';
import PraticeAreasPage from '../Pages/PraticeAreasPage';
import FamilyLaw from '../Pages/PraticeAreas/FamilyLaw';
import CriminalLaw from '../Pages/PraticeAreas/CriminalLaw';
import BusinessLaw from '../Pages/PraticeAreas/BusinessLaw';
import BlogPage1 from '../Pages/Blogs/BlogPage1';
import BlogPage2 from '../Pages/Blogs/BlogPage2';
import BlogPage3 from '../Pages/Blogs/BlogPage3';
import NotFound from '../Pages/NotFound';

function Router() {
    return (
        <Routes>

            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Index />} />
            <Route path="About-us" element={<AboutUsPage />} />
            <Route path="Contact" element={<ContactPage />} />
            <Route path="practice-areas" element={<PraticeAreasPage />} />
            <Route path="Pratice-Areas/Family-law" element={<FamilyLaw />} />
            <Route path="Pratice-Areas/Criminal-law" element={<CriminalLaw />} />
            <Route path="Pratice-Areas/Business-Law" element={<BusinessLaw />} />
            <Route path="Blogs/Blog-1" element={<BlogPage1 />} />
            <Route path="Blogs/Blog-2" element={<BlogPage2 />} />
            <Route path="Blogs/Blog-3" element={<BlogPage3 />} />


            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Router;
