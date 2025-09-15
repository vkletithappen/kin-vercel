import ServicesMenu from './components/ServicesMenu';
import TabsCollection from "./components/Tabs";
import SpecialTabsCollection from "./components/SpecialTabs";
import SliderCollection from "./components/Slider";
import ReviewsSlider from './components/ReviewsSlider';
import DialogCollection from './components/Dialog';
import SearchForm from './components/SearchForm';
import Burger from './components/Burger';
import { reviews } from "./data/reviews";
import './components/map'
import './components/btnToTop'
import "@/scss/main.scss";


new ServicesMenu();
new Burger();
new SearchForm();
new TabsCollection();
new SpecialTabsCollection();
new SliderCollection();
new ReviewsSlider('[data-js-reviews-container]', reviews);
new DialogCollection();