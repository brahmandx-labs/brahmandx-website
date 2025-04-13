import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="BrahmandX | About">
      <div className="max-w-3xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-6 animate-fade-in-up">About BrahmandX</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          BrahmandX Innovations is a deep-tech company focusing on AI self-driving systems, 
          space exploration, drones, racing technologies, and future AI consciousness research.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Founded by Devanand Yadav with a bold vision to make India a global leader in AI and space-tech, 
          our mission is to create revolutionary products that shape humanity’s interplanetary future.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          We aim to collaborate with global agencies like ISRO, NASA, and SpaceX and pioneer innovations 
          across autonomous mobility, quantum computing, and Mars colonization.
        </p>
      </div>
    </Layout>
  );
}