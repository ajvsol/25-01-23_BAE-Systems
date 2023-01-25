import './App.css'
import { StateContextProvider } from '../context/StateContext';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Advert from '../pages/Advert';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import Navbar from '../components/NavBar'

export default function App() {
  return (
    <div className="App">
<Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="advert" element={<Advert/>}/>
        <Route path ="profile" element={<Profile/>}/>
        <Route path ="search" element={<Search/>}/>
    </Routes>
    </div>
  );
}

{/*<BrowserRouter>
      <Routes></Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>*/}

    
/*
NavBar

HomePage
  HomeContent
AdvertPage - unique for each job
  AdvertBox
SearchPage
  Search
  AdvertCards
ProfilePage
  ProfileCard
  UpcomingJobs
BlogPage
  PostCards
*/