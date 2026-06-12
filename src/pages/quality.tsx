import React from 'react';
import Layout from '@theme/Layout';
import './quality.css';

export default function Quality() {
  return (
    <Layout title="Quality Management" description="Quality Management">
      <main className="qualityPage">
        <section className="qualityHero">
          <p className="qualityEyebrow">IntegrAIQ Module</p>
          <h1>Quality Management</h1>
          <p>
            Monitor quality activity, route shop-floor alerts, manage
            investigations, and connect quality records to documentation,
            training, alerts, and engineering support.
          </p>
        </section>

        <section className="qualityShell">
          <section className="prioritySection">
            <h2>Recent Activity</h2>

            <div className="priorityGrid">
              <div className="priorityCard red">
                <span>Scrap Event</span>
                <h3>SCR-102</h3>
                <p>Scrap rate exceeded threshold on Line 4.</p>
                <div className="activityMeta">Line 4 • 9:42 AM</div>
              </div>

              <div className="priorityCard red">
                <span>Corrective Action</span>
                <h3>CAPA-033</h3>
                <p>Packaging seal failure corrective action in progress.</p>
                <div className="activityMeta">Packaging • 9:14 AM</div>
              </div>

              <div className="priorityCard orange">
                <span>Investigation</span>
                <h3>INV-022</h3>
                <p>Investigation active for seal variation.</p>
                <div className="activityMeta">Quality Engineering • 8:17 AM</div>
              </div>

              <div className="priorityCard yellow">
                <span>Quality Concern</span>
                <h3>QA-109</h3>
                <p>Customer return trend requires evaluation.</p>
                <div className="activityMeta">Receiving • Yesterday</div>
              </div>

              <div className="priorityCard green">
                <span>Resolved</span>
                <h3>CAPA-027</h3>
                <p>Label application issue verified effective.</p>
                <div className="activityMeta">Assembly • Yesterday</div>
              </div>
            </div>
          </section>

          <section className="alertIntake">
            <div>
              <h2>Quality Alert Intake</h2>
              <p>
                Operators can submit quality alerts from the platform, email,
                or mobile app with pictures, details, timestamps, locations,
                part numbers, and severity levels.
              </p>
            </div>

            <div className="intakeGrid">
              <div className="intakeItem">Photo Evidence</div>
              <div className="intakeItem">Issue Details</div>
              <div className="intakeItem">Time & Date</div>
              <div className="intakeItem">Line / Machine</div>
              <div className="intakeItem">Part Number</div>
              <div className="intakeItem">Severity Level</div>
            </div>
          </section>

          <div className="qualityActions">
            <button>Record Issue</button>
            <button>Open Investigation</button>
            <button>Open NC</button>
            <button>Launch CAPA</button>
            <button>Start Audit</button>
          </div>

          <section className="qualityMetrics">
            <h2>Quality Metrics</h2>

            <div className="metricsGrid">
              <div className="metricCard">
                <span>Open Alerts</span>
                <h3>12</h3>
              </div>

              <div className="metricCard">
                <span>Open NCs</span>
                <h3>8</h3>
              </div>

              <div className="metricCard">
                <span>Active Investigations</span>
                <h3>4</h3>
              </div>

              <div className="metricCard">
                <span>Corrective Actions</span>
                <h3>3</h3>
              </div>

              <div className="metricCard">
                <span>Audit Findings</span>
                <h3>5</h3>
              </div>

              <div className="metricCard">
                <span>Customer Complaints</span>
                <h3>2</h3>
              </div>
            </div>
          </section>

          <section className="qualityCategories">
            <h2>Quality Categories</h2>

            <div className="categoryGrid">
              <div>Quality Alerts</div>
              <div>Nonconformances (NCs)</div>
              <div>Corrective Actions</div>
              <div>Inspections</div>
              <div>Audits</div>
              <div>Customer Complaints</div>
              <div>Quality Engineering</div>
              <div>Supplier Quality</div>
              <div>Continuous Improvement</div>
              <div>Quality Metrics</div>
            </div>
          </section>

          <section className="qualityWorkspace">
            <div className="qualityPanel">
              <h2>Quality Records</h2>

              <div className="qualityTableContainer">
                <table className="qualityTable">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Issue</th>
                      <th>Location</th>
                      <th>Owner</th>
                      <th>Due Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>NC-221</td>
                      <td>Critical dimension out of tolerance</td>
                      <td>Line 4</td>
                      <td>Quality Engineering</td>
                      <td>06/18/2026</td>
                      <td>
                        <span className="qStatus redStatus">
                          Immediate Action
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>INV-023</td>
                      <td>Incoming material variation</td>
                      <td>Receiving</td>
                      <td>Supplier Quality</td>
                      <td>06/20/2026</td>
                      <td>
                        <span className="qStatus orangeStatus">
                          Supplier Investigation
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>AUD-018</td>
                      <td>Internal process audit observation</td>
                      <td>Assembly</td>
                      <td>Quality Manager</td>
                      <td>06/24/2026</td>
                      <td>
                        <span className="qStatus yellowStatus">
                          Evaluation Required
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>CAPA-027</td>
                      <td>Label application error</td>
                      <td>Packaging</td>
                      <td>Quality Engineering</td>
                      <td>Completed</td>
                      <td>
                        <span className="qStatus greenStatus">
                          Verified Effective
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>NC-228</td>
                      <td>Scratched component identified</td>
                      <td>Machine Shop</td>
                      <td>Quality Inspector</td>
                      <td>06/22/2026</td>
                      <td>
                        <span className="qStatus orangeStatus">
                          Investigation Open
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>CAPA-033</td>
                      <td>Packaging seal failure</td>
                      <td>Packaging</td>
                      <td>Quality Manager</td>
                      <td>06/19/2026</td>
                      <td>
                        <span className="qStatus redStatus">
                          Corrective Action
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>NC-233</td>
                      <td>Missing process verification record</td>
                      <td>Assembly</td>
                      <td>Production Supervisor</td>
                      <td>06/23/2026</td>
                      <td>
                        <span className="qStatus yellowStatus">
                          Evaluation Required
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>INV-031</td>
                      <td>Supplier coating variation</td>
                      <td>Receiving</td>
                      <td>Supplier Quality</td>
                      <td>06/25/2026</td>
                      <td>
                        <span className="qStatus orangeStatus">
                          Supplier Investigation
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>AUD-022</td>
                      <td>Control plan revision required</td>
                      <td>Quality Lab</td>
                      <td>Quality Engineering</td>
                      <td>06/28/2026</td>
                      <td>
                        <span className="qStatus yellowStatus">
                          Open Finding
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>CAPA-029</td>
                      <td>Barcode scanning issue resolved</td>
                      <td>Shipping</td>
                      <td>Quality Engineering</td>
                      <td>Completed</td>
                      <td>
                        <span className="qStatus greenStatus">
                          Verified Effective
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <aside className="qualityPanel">
              <h2>Quality Engineering</h2>

              <div className="engineeringList">
                <div>Control Plans</div>
                <div>Process Capability Studies</div>
                <div>Measurement System Analysis</div>
                <div>Risk Assessments</div>
                <div>Validation Activities</div>
                <div>Continuous Improvement Projects</div>
              </div>
            </aside>
          </section>

          <section className="qualityWorkflow">
            <h2>Quality Workflow</h2>

            <div className="workflowFlow">
              <div>Issue Identified</div>
              <span>→</span>
              <div>Alert Created</div>
              <span>→</span>
              <div>Containment</div>
              <span>→</span>
              <div>Investigation</div>
              <span>→</span>
              <div>Corrective Action</div>
              <span>→</span>
              <div>Verification</div>
            </div>
          </section>
        </section>
      </main>
    </Layout>
  );
}