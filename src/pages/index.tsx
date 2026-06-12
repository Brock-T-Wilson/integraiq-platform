import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './integraiq.css';

const modules = [
  {
    title: 'Documentation',
    description: 'SOPs, work instructions, policies, controlled documents, and version history.',
    link: '/documentation',
  },
  {
    title: 'Quality',
    description: 'Quality alerts, defects, audits, corrective actions, and process issues.',
    link: '/quality',
  },
  {
    title: 'Safety',
    description: 'Incidents, near misses, safety observations, investigations, and prevention.',
    link: '/safety',
  },
  {
    title: 'Training',
    description: 'Onboarding, job qualification, training records, and real-world process learning.',
    link: '/training',
  },
  {
    title: 'Real-Time Alerts',
    description: 'Instant updates to quality, engineering, maintenance, safety, and operations teams.',
    link: '/alerts',
  },
  {
  title: 'Workforce',
  description:
    'Organize employee roles, job titles, reporting structure, departments, responsibilities, and organizational charts.',
  link: '/workforce',
},
];

export default function Home() {
  const logoUrl = useBaseUrl('/img/integraiq-logo.png');

  return (
    <Layout title="IntegrAIQ" description="Operational Intelligence Platform">
      <main className="iqPage">
        <section className="logoHero">
          <img
  className="wideLogo"
  src={logoUrl}
  alt="IntegrAIQ logo"
/>
          <p className="heroModules">
  Documentation • Quality • Safety • Training • Alerts • Workforce Knowledge
</p>

          <p className="heroStatement">
            
          </p>

          <div className="heroButtons">
  <Link className="button button--primary button--lg" to="/about">
    About IntegrAIQ
  </Link>

  <Link className="button button--secondary button--lg" to="/platform">
    Platform Overview
  </Link>
</div>
        </section>

        <section className="hubIntro">
          <p className="eyebrow">Central Workspace</p>
          <h1>AIQ Intelligence Hub</h1>
          <p>
            The Intelligence Hub organizes every job function into connected modules,
            giving teams one place to capture, review, approve, search, and act on
            operational knowledge.
          </p>
        </section>

        <section className="hubPanel">
          <div className="hubCenter">
            <span>Integrating Intelligence</span>
            <p>Documentation, quality, safety, training, alerts, and workforce expertise working together.</p>
          </div>

          <div className="moduleGrid">
            {modules.map((module) => (
              <Link key={module.title} className="moduleCard" to={module.link}>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}