import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home/Home.js';
import { SinglePost } from './components/pages/SinglePost/SinglePost.js';
import { PostAdd } from './components/pages/PostAdd/PostAdd.js';
import { PostEdit } from './components/pages/PostEdit/PostEdit.js';
import { About } from './components/pages/About/About.js';
import { NotFound } from './components/pages/NotFound/NotFound.js';
import { Container } from 'react-bootstrap';
import { Header } from './components/views/Header/Header.js';
import { Footer } from './components/views/Footer/Footer.js';

export function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:id' element={<SinglePost />} />
        <Route path='/post/add' element={<PostAdd />} />
        <Route path='/post/edit/:id' element={<PostEdit />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}