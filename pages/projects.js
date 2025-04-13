import Layout from '../components/Layout';

export default function Projects() {
  return (
    <Layout title="BrahmandX | Projects">
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-6 animate-fade-in-up">Our Projects</h1>
        <ul className="space-y-6 text-gray-700 dark:text-gray-300">
          <li>
            <strong>AI Self-Driving System:</strong> Building edge AI for bikes, scooters, cars, and drones.
          </li>
          <li>
            <strong>BrahmandX Racing:</strong> Our motorsports division targeting F1, MotoGP & Rally Tech.
          </li>
          <li>
            <strong>Space Exploration Program:</strong> Autonomous lunar/Mars robotics & quantum space labs.
          </li>
          <li>
            <strong>Quantum AI Cyber Defense:</strong> Next-gen cyber security with post-quantum AI encryption.
          </li>
          <li>
            <strong>Health & Robotics Ecosystem:</strong> Smart health tracking, drone fleets, and space robotics.
          </li>
        </ul>
      </div>
    </Layout>
  );
}