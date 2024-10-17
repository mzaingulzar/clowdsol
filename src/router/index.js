// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import WebSoft from '@/views/WebSoft.vue';
import ContactUs from '@/views/ContactUs.vue';
import Careers from '@/views/CareersPage.vue';
import MobileApp from '@/views/MobileApp.vue';
import QualityAssurance from '@/views/QualityAssurance.vue';
import AboutUs from '@/views/AboutUs.vue';
import SEO from '@/views/SeO.vue';
import TC from '@/views/TechC.vue';
import BS from '@/views/BrandingService.vue';
import GraphicServices from '@/views/GraphicServices.vue';
import UiUx from '@/views/UiUx.vue';
import VideoEditing from '@/views/VideoEditing.vue';
import ThreeD from '@/views/ThreeD.vue';
import AnnimationServices from '@/views/AnnimationServices.vue';
import OurPortfolio from '@/views/OurPortfolio.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/web-and-software-developement',
    name: 'WebSoft',
    component: WebSoft,
  },
  {
    path: '/contact-us',
    name: 'Contact',
    component: ContactUs,
  },
  {
    path: '/careers',
    name: 'Careers',
    component: Careers,
  },
  {
    path: '/mobile-app',
    name: 'MobileApp',
    component: MobileApp,
  },
  {
    path: '/quality-assurance',
    name: 'QualityAssurance',
    component: QualityAssurance,
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs,
  },
  {
    path: '/seo',
    name: 'SeO',
    component: SEO,
  },
  {
    path: '/technology-consultancy',
    name: 'TC',
    component: TC,
  },
  {
    path: '/branding-service',
    name: 'BS',
    component: BS,
  },
  {
    path: '/graphic-service',
    name: 'GraphicServices',
    component: GraphicServices,
  },
  {
    path: '/uiux',
    name: 'UIUX',
    component: UiUx,
  },
  {
    path: '/VideoEditing',
    name: 'VideoEditing',
    component: VideoEditing,
  },
  {
    path: '/ThreeD',
    name: 'ThreeD',
    component: ThreeD,
  },
  {
    path: '/AnnimationServices',
    name: 'AnnimationServices',
    component: AnnimationServices,
  },
  {
    path: '/OurPortfolio',
    name: 'OurPortfolio',
    component: OurPortfolio,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
