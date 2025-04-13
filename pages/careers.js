import Layout from '../components/Layout';

export default function Careers() {
  return (
    <Layout title="BrahmandX | Careers">
      <div className="max-w-3xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-6 animate-fade-in-up">Join the Mission</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          At BrahmandX, we are building a future for Earth and beyond. If you’re a bold thinker, innovator, 
          or problem-solver—there’s a place for you here.
        </p>

        <div className="space-y-4">
          <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">Frontend Developer (Next.js + Tailwind)</h2>
            <p className="text-gray-600 dark:text-gray-300">Remote | 0-2 years experience</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">AI Engineer – Autonomous Systems</h2>
            <p className="text-gray-600 dark:text-gray-300">Noida / Remote | 2+ years experience</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">Content Strategist / Space Blogger</h2>
            <p className="text-gray-600 dark:text-gray-300">Freelance | Passionate about space & AI</p>
          </div>
        </div>

        <p className="mt-10 text-md text-gray-700 dark:text-gray-400">
          Send your resume or portfolio to <strong>careers@brahmandx.com</strong>
        </p>
      </div>
    </Layout>
  );
}