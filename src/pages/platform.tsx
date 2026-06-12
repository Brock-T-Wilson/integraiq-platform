import React from 'react';
import Layout from '@theme/Layout';
import './platform.css';

export default function Platform() {
  return (
    <Layout title="Platform Overview" description="Platform Overview">
      <main className="platformPage">
        <section className="platformHero">
          <h1>Platform Overview</h1>
          <p>
            IntegrAIQ is designed as a connected operational intelligence
            platform where each module owns its information while remaining
            accessible through the Intelligence Hub.
          </p>
        </section>

        <section className="platformContent">
          <section className="architecture">
            <h2>Platform Architecture</h2>

            <div className="architectureDiagram">
              <div className="hubCard">
                <h3>Intelligence Hub</h3>
                <p>
                  The central navigation layer that provides access to all
                  operational functions within IntegrAIQ.
                </p>
              </div>

              <div className="architectureConnector"></div>
              <div className="architectureBranch"></div>

              <div className="architectureGrid">
                <div className="moduleBox">
                  <h3>Documentation</h3>
                  <p>Controlled documents, procedures, forms, and work instructions.</p>
                </div>

                <div className="moduleBox">
                  <h3>Quality</h3>
                  <p>Quality alerts, audits, corrective actions, and compliance activities.</p>
                </div>

                <div className="moduleBox">
                  <h3>Safety</h3>
                  <p>Incidents, observations, investigations, and preventive actions.</p>
                </div>

                <div className="moduleBox">
                  <h3>Training</h3>
                  <p>Onboarding, qualifications, learning paths, and competency development.</p>
                </div>

                <div className="moduleBox">
                  <h3>Alerts</h3>
                  <p>Communication, notifications, and operational updates.</p>
                </div>

                <div className="moduleBox">
                  <h3>Workforce</h3>
                  <p>Organizational structure, reporting relationships, and accountability.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="platformSection">
            <h2>Information Ownership</h2>

            <div className="ownerGrid">
              <div className="ownerCard">
                <h3>Single Owner</h3>
                <p>
                  Every record has a primary home where it is maintained,
                  updated, and controlled.
                </p>
              </div>

              <div className="ownerCard">
                <h3>Connected Reference</h3>
                <p>
                  Records can be referenced across modules without duplicating
                  or moving the original information.
                </p>
              </div>

              <div className="ownerCard">
                <h3>Controlled Access</h3>
                <p>
                  Information remains organized, traceable, and accountable
                  across operational functions.
                </p>
              </div>
            </div>
          </section>

          <section className="platformSection">
            <h2>Connected Information Workflow</h2>

            <div className="workflowPanel">
              <div className="workflowFlow">
                <div className="workflowStep">
                  <h3>Safety Event</h3>
                  <p>Issue identified in the Safety module.</p>
                </div>

                <div className="workflowStep">
                  <h3>Investigation</h3>
                  <p>Evidence and details remain under Safety.</p>
                </div>

                <div className="workflowStep">
                  <h3>Alert</h3>
                  <p>Relevant teams are notified through Alerts.</p>
                </div>

                <div className="workflowStep">
                  <h3>Training</h3>
                  <p>Required learning can be assigned if needed.</p>
                </div>

                <div className="workflowStep">
                  <h3>Documentation</h3>
                  <p>Procedures may be reviewed or updated.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="truthPanel">
            <h2>Single Source of Truth</h2>
            <p>
              IntegrAIQ is designed around a simple principle: information
              should have one owner while remaining accessible throughout the
              organization. This approach strengthens accountability, improves
              operational transparency, and keeps information easier to manage.
            </p>
          </section>
        </section>
      </main>
    </Layout>
  );
}