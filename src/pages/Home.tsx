import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero';
import Nexus from '@/components/Nexus';
import MeetJohn from '@/components/MeetJohn';
import Specialties from '@/components/Specialties';
import Experience from '@/components/Experience';
// import About from '@/components/About';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Nexus />
      <MeetJohn />
      <Specialties />
      <Experience />
    </>
  );
}

export default Home;
