import React from 'react';
import Layout from '@theme/Layout';
import './about.css';

export default function About() {
  return (
    <Layout title="About IntegrAIQ" description="About IntegrAIQ">
      <main className="aboutPage">

        <section className="aboutHero">
          <h1>About IntegrAIQ</h1>

          <p>
            Operational intelligence designed to organize manufacturing
            knowledge, improve workforce readiness, and connect critical
            processes through one secure platform.
          </p>
        </section>

        <section className="aboutContent">

          <div className="aboutGrid">

            <article className="aboutCard">
              <h2>Our Mission</h2>

              <p>
                IntegrAIQ was created to address operational disorganization
                within manufacturing environments by connecting documentation,
                quality, safety, training, alerts, and workforce management.
              </p>
            </article>

            <article className="aboutCard">
              <h2>The Challenge</h2>

              <p>
                Critical information is often spread across disconnected
                systems, departments, documents, and individual employees,
                making it harder to locate, maintain, and act upon.
              </p>
            </article>

            <article className="aboutCard">
              <h2>The Approach</h2>

              <p>
                IntegrAIQ provides a centralized Intelligence Hub that helps
                users navigate to the correct information while keeping records
                organized in their proper operational locations.
              </p>
            </article>

          </div>

          <article className="aboutWideCard">
            <h2>Workforce Development</h2>

            <p>
              A core objective of IntegrAIQ is improving workforce readiness
              and employee development. By leveraging AI-assisted note taking,
              process documentation, and operational knowledge capture,
              organizations can create stronger onboarding experiences and
              provide employees with clearer guidance during training.
            </p>

            <p>
              The platform helps transform undocumented experience into
              structured organizational knowledge that can be shared,
              maintained, and continuously improved.
            </p>
          </article>

          <section className="builtFor">
            <h2>Built For</h2>

            <div className="builtForGrid">

              <div className="builtForCard">
                <h3>Quality Teams</h3>

                <p>
                  Manage quality events, corrective actions, audits,
                  and compliance activities through a connected
                  operational framework.
                </p>
              </div>

              <div className="builtForCard">
                <h3>Safety Teams</h3>

                <p>
                  Improve visibility into incidents, observations,
                  investigations, and preventive actions.
                </p>
              </div>

              <div className="builtForCard">
                <h3>Operations Leaders</h3>

                <p>
                  Create organizational visibility, improve
                  accountability, and maintain operational
                  alignment across departments.
                </p>
              </div>

              <div className="builtForCard">
                <h3>Training Coordinators</h3>

                <p>
                  Support onboarding, workforce development,
                  knowledge transfer, and employee readiness.
                </p>
              </div>

            </div>
          </section>

          <section className="whyIntegraiq">
            <h2>Why IntegrAIQ?</h2>

            <div className="whyGrid">

              <div className="whyCard">
                <h3>Organize</h3>

                <p>
                  Manufacturing environments generate large volumes
                  of documentation, procedures, records, and operational
                  information. IntegrAIQ helps organize these resources
                  into a structured environment where employees can
                  quickly locate and access the information they need.
                </p>
              </div>

              <div className="whyCard">
                <h3>Connect</h3>

                <p>
                  Documentation, quality, safety, training, alerts,
                  and workforce information should not exist in
                  isolation. IntegrAIQ creates connections between
                  operational functions while maintaining clear
                  ownership and accountability for every record.
                </p>
              </div>

              <div className="whyCard">
                <h3>Preserve</h3>

                <p>
                  Valuable organizational knowledge is often retained
                  by individuals rather than the organization itself.
                  IntegrAIQ helps capture experience, document
                  processes, and preserve expertise so future
                  employees can benefit from the knowledge of those
                  who came before them.
                </p>
              </div>

            </div>

            <div className="whyStatement">
              <h3>The IntegrAIQ Difference</h3>

              <p>
                IntegrAIQ is designed around a simple philosophy:
                information should have a single owner while remaining
                accessible throughout the organization. By connecting
                operational functions through a centralized Intelligence
                Hub, organizations can improve visibility, strengthen
                communication, support workforce development, and create
                a more organized manufacturing environment.
              </p>
            </div>

          </section>

        </section>

      </main>
    </Layout>
  );
}