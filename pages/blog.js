import Layout from '../components/Layout';

export default function Blog() {
  return (
    <Layout title="BrahmandX | Blog">
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-6 animate-fade-in-up">Latest Insights from BrahmandX</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Explore our thoughts on AI, autonomous tech, space exploration, and deep future innovations.
        </p>

        <div className="space-y-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">Why We Started BrahmandX</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Learn about the inspiration behind BrahmandX and our mission to revolutionize the world.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">The Future of AI-Assisted Mobility</h2>
            <p className="text-gray-600 dark:text-gray-300">
              A deep dive into the technologies we are building and how they’re transforming mobility in India.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">Mars Colonization & AI Consciousness</h2>
            <p className="text-gray-600 dark:text-gray-300">
              How BrahmandX aims to contribute to interplanetary life and quantum intelligence.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}