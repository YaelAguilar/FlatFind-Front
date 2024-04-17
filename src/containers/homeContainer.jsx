import Header from '../components/organisms/Header';
import HeroSection from '../components/organisms/HeroSection';

function HomeContainer() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex justify-center">
        <HeroSection></HeroSection>
      </main>
    </div>
  );
}

export default HomeContainer;
