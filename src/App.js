import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path='/form' element={<AddPostForm />} />
        <Route path='/' element={<PostsList />} />
      </Routes>
    </main>
  );
}

export default App;
