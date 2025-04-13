import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout title="BrahmandX | Contact">
      <div className="max-w-xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-6 animate-fade-in-up">Contact Us</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          We'd love to hear from you! Whether it's collaboration, queries, or feedback.
        </p>
        <ul className="space-y-3 text-md text-gray-800 dark:text-gray-300">
          <li>Email: <strong>brahmandxinnovations@gmail.com</strong></li>
          <li>Founder: <strong>Devanand Yadav – devanand@brahmandx.com</strong></li>
          <li>Website: <a className="text-blue-500 hover:underline" href="https://brahmandx.com" target="_blank">brahmandx.com</a></li>
        </ul>
      </div>
    </Layout>
  );
}