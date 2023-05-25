import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portofolio from './pages/Portofolio';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

const page = () => {
  return (
    <>
      <Container>
        <Navbar />
        <main className='flex flex-col mt-10 gap-10'>
          <Home />
          <About />
          <Portofolio />
          <Experience />
          <Contact />
        </main>
      </Container>
    </>
  );
};

export default page;
