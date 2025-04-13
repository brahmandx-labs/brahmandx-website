import Layout from '../components/Layout';
export default function Home() {
  return (
    <Layout title="BrahmandX | Home">
      <div className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Welcome to BrahmandX
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Building the future of autonomous mobility, space-tech, AI innovations, and beyond.
          Join us on a journey to reshape the universe, one innovation at a time.
        </p>
      </div>
    </Layout>
  );
}