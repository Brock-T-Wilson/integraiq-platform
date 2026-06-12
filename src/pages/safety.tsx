import React from 'react';
import Layout from '@theme/Layout';
import './safety.css';

export default function Safety() {
  return (
    <Layout title="Safety Management" description="Safety Management">
      <main className="safetyPage">
        <section className="safetyHero">
          <p className="safetyEyebrow">IntegrAIQ Module</p>

          <h1>Safety Management</h1>

          <p>
            Track shop-floor hazards, incident alerts, investigations, and
            corrective actions while connecting safety activity to alerts,
            training, documentation, and workforce accountability.
          </p>
        </section>

        <section className="safetyShell">
          <section className="safetyActivity">
            <h2>Recent Safety Activity</h2>

            <div className="safetyActivityGrid">
              <div className="safetyCard red">
                <span>Incident Alert</span>
                <h3>INC-014</h3>
                <p>Operator reported hand injury near press station.</p>
                <div className="safetyMeta">Press Area • 10:08 AM</div>
              </div>

              <div className="safetyCard orange">
                <span>Hazard Found</span>
                <h3>HAZ-041</h3>
                <p>Forklift travel path blocked by staged material.</p>
                <div className="safetyMeta">Warehouse A • 9:31 AM</div>
              </div>

              <div className="safetyCard yellow">
                <span>Near Miss</span>
                <h3>NM-022</h3>
                <p>Pallet jack nearly contacted pedestrian walkway.</p>
                <div className="safetyMeta">Shipping • 8:46 AM</div>
              </div>

              <div className="safetyCard red">
                <span>Corrective Action</span>
                <h3>SA-033</h3>
                <p>Machine guard repair still awaiting completion.</p>
                <div className="safetyMeta">Line 2 • Yesterday</div>
              </div>

              <div className="safetyCard green">
                <span>Resolved</span>
                <h3>HAZ-036</h3>
                <p>Damaged ladder removed and replacement verified.</p>
                <div className="safetyMeta">Maintenance • Yesterday</div>
              </div>
            </div>
          </section>

          <section className="safetyIntake">
            <div>
              <h2>Safety Alert Intake</h2>

              <p>
                Operators can submit safety hazards and incident alerts from the
                platform, email, or mobile app with pictures, descriptions,
                timestamps, locations, severity levels, and immediate action
                taken.
              </p>
            </div>

            <div className="safetyIntakeGrid">
              <div className="safetyIntakeItem">Photo Evidence</div>
              <div className="safetyIntakeItem">Hazard Details</div>
              <div className="safetyIntakeItem">Time & Date</div>
              <div className="safetyIntakeItem">Area / Location</div>
              <div className="safetyIntakeItem">Severity Level</div>
              <div className="safetyIntakeItem">Immediate Action</div>
            </div>
          </section>

          <div className="safetyActions">
            <button>Report Hazard</button>
            <button>Create Incident Alert</button>
            <button>Open Investigation</button>
            <button>Assign Corrective Action</button>
            <button>Schedule Safety Review</button>
          </div>

          <section className="safetyMetrics">
            <h2>Safety Metrics</h2>

            <div className="safetyMetricsGrid">
              <div className="safetyMetricCard">
                <span>Open Hazards</span>
                <h3>9</h3>
              </div>

              <div className="safetyMetricCard">
                <span>Incident Alerts</span>
                <h3>3</h3>
              </div>

              <div className="safetyMetricCard">
                <span>Active Investigations</span>
                <h3>4</h3>
              </div>

              <div className="safetyMetricCard">
                <span>Corrective Actions</span>
                <h3>6</h3>
              </div>

              <div className="safetyMetricCard">
                <span>Safety Observations</span>
                <h3>14</h3>
              </div>

              <div className="safetyMetricCard">
                <span>Resolved Items</span>
                <h3>11</h3>
              </div>
            </div>
          </section>

          <section className="safetyCategories">
            <h2>Safety Categories</h2>

            <div className="safetyCategoryGrid">
              <div>Hazard Reports</div>
              <div>Incident Alerts</div>
              <div>Near Misses</div>
              <div>Investigations</div>
              <div>Corrective Actions</div>
              <div>PPE Concerns</div>
              <div>Equipment Safety</div>
              <div>Environmental Safety</div>
              <div>Training Follow-Up</div>
              <div>Safety Audits</div>
            </div>
          </section>

          <section className="safetyWorkspace">
            <div className="safetyPanel">
              <h2>Safety Records</h2>

              <div className="safetyTableContainer">
                <table className="safetyTable">
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
                      <td>INC-014</td>
                      <td>Hand injury near press station</td>
                      <td>Press Area</td>
                      <td>Safety Manager</td>
                      <td>06/18/2026</td>
                      <td>
                        <span className="sStatus redStatus">
                          Immediate Action
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>HAZ-041</td>
                      <td>Forklift travel path obstruction</td>
                      <td>Warehouse A</td>
                      <td>Warehouse Supervisor</td>
                      <td>06/20/2026</td>
                      <td>
                        <span className="sStatus orangeStatus">
                          Correction Assigned
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>NM-022</td>
                      <td>Pedestrian walkway near miss</td>
                      <td>Shipping</td>
                      <td>Operations Supervisor</td>
                      <td>06/25/2026</td>
                      <td>
                        <span className="sStatus yellowStatus">
                          Evaluation Required
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>HAZ-036</td>
                      <td>Damaged ladder removed from service</td>
                      <td>Maintenance</td>
                      <td>Maintenance Lead</td>
                      <td>Completed</td>
                      <td>
                        <span className="sStatus greenStatus">
                          Verified Corrected
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>HAZ-052</td>
                      <td>Missing floor marking near conveyor</td>
                      <td>Packaging</td>
                      <td>Operations Manager</td>
                      <td>06/22/2026</td>
                      <td>
                        <span className="sStatus orangeStatus">
                          Correction Assigned
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>INC-018</td>
                      <td>Slip incident near wash station</td>
                      <td>Sanitation</td>
                      <td>Safety Manager</td>
                      <td>06/17/2026</td>
                      <td>
                        <span className="sStatus redStatus">
                          Immediate Action
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>NM-027</td>
                      <td>Forklift horn not heard at intersection</td>
                      <td>Warehouse B</td>
                      <td>Warehouse Supervisor</td>
                      <td>06/24/2026</td>
                      <td>
                        <span className="sStatus yellowStatus">
                          Evaluation Required
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>HAZ-061</td>
                      <td>Loose handrail identified</td>
                      <td>Receiving</td>
                      <td>Maintenance Lead</td>
                      <td>06/19/2026</td>
                      <td>
                        <span className="sStatus orangeStatus">
                          Correction Assigned
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>OBS-044</td>
                      <td>Improper lifting technique observed</td>
                      <td>Assembly</td>
                      <td>Training Coordinator</td>
                      <td>06/27/2026</td>
                      <td>
                        <span className="sStatus yellowStatus">
                          Training Follow-Up
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>HAZ-066</td>
                      <td>Blocked emergency exit route</td>
                      <td>Warehouse A</td>
                      <td>Safety Manager</td>
                      <td>06/16/2026</td>
                      <td>
                        <span className="sStatus redStatus">
                          Immediate Action
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <aside className="safetyPanel">
              <h2>Connected Actions</h2>

              <div className="safetyConnectedList">
                <div>Incident alert routed to Safety Manager</div>
                <div>Training follow-up assigned for forklift traffic zones</div>
                <div>Machine guard repair linked to Maintenance</div>
                <div>PPE reminder alert ready for distribution</div>
                <div>Updated walkway procedure linked to Documentation</div>
              </div>
            </aside>
          </section>

          <section className="safetyWorkflow">
            <h2>Safety Workflow</h2>

            <div className="safetyWorkflowFlow">
              <div>Hazard / Incident Identified</div>
              <span>→</span>
              <div>Immediate Control</div>
              <span>→</span>
              <div>Alert Created</div>
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