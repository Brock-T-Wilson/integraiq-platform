import React from 'react';
import Layout from '@theme/Layout';
import './ai-integration.css';

export default function AIIntegration() {
  return (
    <Layout title="AI Integration" description="AI Integration">
      <main className="aiPage">
        <section className="aiHero">
          <p className="aiEyebrow">IntegrAIQ Intelligence Layer</p>

          <h1>AI Integration</h1>

          <p>
            Integrating intelligence across documentation, quality, safety,
            training, alerts, and workforce operations.
          </p>
        </section>

        <section className="aiShell">
          <section className="aiIntro">
            <h2>Integrating Intelligence</h2>

            <p>
              AI supports IntegrAIQ by helping teams organize information,
              identify trends, recommend actions, summarize activity, and
              connect operational knowledge across the enterprise.
            </p>
          </section>

          <section className="aiTools">
            <h2>AI Tools Overview</h2>

            <div className="aiToolGrid">
              <div className="aiToolCard">
                <h3>Documentation Assistant</h3>
                <p>
                  Draft SOPs, summarize process recordings, recommend revisions,
                  and identify outdated documents.
                </p>
              </div>

              <div className="aiToolCard">
                <h3>Quality Intelligence</h3>
                <p>
                  Detect recurring defects, review quality trends, and support
                  NC, investigation, and CAPA activity.
                </p>
              </div>

              <div className="aiToolCard">
                <h3>Safety Intelligence</h3>
                <p>
                  Identify hazard patterns, review incident activity, and
                  support corrective action tracking.
                </p>
              </div>

              <div className="aiToolCard">
                <h3>Training Intelligence</h3>
                <p>
                  Recommend training assignments, retraining needs, onboarding
                  plans, and competency follow-up.
                </p>
              </div>

              <div className="aiToolCard">
                <h3>Alert Intelligence</h3>
                <p>
                  Route alerts to the correct owner, detect urgency, escalate
                  unresolved issues, and track response activity.
                </p>
              </div>

              <div className="aiToolCard">
                <h3>Workforce Intelligence</h3>
                <p>
                  Connect roles, responsibilities, certifications, supervisors,
                  and ownership across operational workflows.
                </p>
              </div>
            </div>
          </section>

          <section className="aiSearch">
            <div>
              <h2>AI Search</h2>

              <p>
                Search across documents, investigations, incidents, training
                records, employee records, alerts, and connected operational
                activity.
              </p>
            </div>

            <div className="aiSearchBox">
              <span>Example Search</span>
              <p>
                Show all quality alerts related to packaging seals in the last
                90 days.
              </p>
            </div>
          </section>

          <section className="askIntegrAIQ">
            <h2>Ask IntegrAIQ</h2>

            <div className="askGrid">
              <div>What training is overdue?</div>
              <div>What quality issues are trending?</div>
              <div>Show open corrective actions.</div>
              <div>Which employees need forklift recertification?</div>
              <div>Summarize open safety hazards.</div>
              <div>Which documents require retraining?</div>
            </div>
          </section>

          <section className="aiAssistantDashboard">
            <h2>AI Assistant Dashboard</h2>

            <div className="aiDashboardGrid">
              <div>
                <span>Documents Analyzed</span>
                <h3>1,247</h3>
              </div>

              <div>
                <span>Quality Trends</span>
                <h3>12</h3>
              </div>

              <div>
                <span>Safety Risks</span>
                <h3>3</h3>
              </div>

              <div>
                <span>Training Gaps</span>
                <h3>6</h3>
              </div>

              <div>
                <span>Open Recommendations</span>
                <h3>14</h3>
              </div>
            </div>
          </section>

          <section className="aiCameraIntelligence">
            <h2>AI Camera Intelligence</h2>

            <div className="cameraGrid">
              <div>Process recording</div>
              <div>PPE verification</div>
              <div>Incident review</div>
              <div>Training capture</div>
              <div>Process documentation support</div>
              <div>Quality observation support</div>
            </div>
          </section>

          <section className="futureCapabilities">
            <h2>Future Intelligence Capabilities</h2>

            <div className="futureGrid">
              <div>Predictive maintenance</div>
              <div>Capacity forecasting</div>
              <div>Workforce planning</div>
              <div>Quality risk prediction</div>
              <div>Supplier risk monitoring</div>
              <div>Automated onboarding assistance</div>
            </div>
          </section>

          <section className="aiDataSources">
            <h2>AI Data Sources</h2>

            <div className="dataSourceGrid">
              <div>Documentation</div>
              <div>Quality</div>
              <div>Safety</div>
              <div>Training</div>
              <div>Alerts</div>
              <div>Workforce</div>
              <div>Email</div>
              <div>Mobile App</div>
              <div>AI Cameras</div>
            </div>
          </section>

          <section className="aiGovernance">
            <h2>AI Governance</h2>

            <div className="governanceGrid">
              <div>Human approval required</div>
              <div>Audit trail maintained</div>
              <div>Role-based access</div>
              <div>Data retention controls</div>
              <div>Revision history preserved</div>
              <div>Official records controlled</div>
            </div>
          </section>

          <section className="aiHumanReview">
            <h2>Human Review & Approval</h2>

            <p>
              AI suggestions do not replace operational ownership. Official
              records, investigations, corrective actions, training assignments,
              documentation updates, and employee decisions remain under human
              review and approval.
            </p>
          </section>

          <section className="aiWorkflow">
            <h2>AI Workflow</h2>

            <div className="aiWorkflowFlow">
              <div>Data Captured</div>
              <span>→</span>
              <div>AI Analyzes</div>
              <span>→</span>
              <div>Recommendation Created</div>
              <span>→</span>
              <div>Human Review</div>
              <span>→</span>
              <div>Approved Action</div>
              <span>→</span>
              <div>Record Updated</div>
            </div>
          </section>
        </section>
      </main>
    </Layout>
  );
}