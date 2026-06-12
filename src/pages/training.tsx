import React from 'react';
import Layout from '@theme/Layout';
import './training.css';

export default function Training() {
  return (
    <Layout title="Training Management" description="Training Management">
      <main className="trainingPage">
        <section className="trainingHero">
          <p className="trainingEyebrow">IntegrAIQ Module</p>
          <h1>Training Management</h1>
          <p>
            Assign training, track completion, verify competency, and connect
            workforce readiness to documentation, safety, quality, and
            operational performance.
          </p>
        </section>

        <section className="trainingShell">
          <section className="trainingActivity">
            <h2>Recent Training Activity</h2>

            <div className="trainingActivityGrid">
              <div className="trainingCard green">
                <span>Completed</span>
                <h3>TRN-221</h3>
                <p>Packaging work instruction completed.</p>
                <div className="trainingMeta">Packaging • 9:20 AM</div>
              </div>

              <div className="trainingCard red">
                <span>Overdue</span>
                <h3>TRN-205</h3>
                <p>Forklift refresher training is past due.</p>
                <div className="trainingMeta">Warehouse • 8:55 AM</div>
              </div>

              <div className="trainingCard orange">
                <span>Assigned</span>
                <h3>TRN-224</h3>
                <p>New hire onboarding assigned to operator.</p>
                <div className="trainingMeta">Assembly • Yesterday</div>
              </div>

              <div className="trainingCard yellow">
                <span>Verification Needed</span>
                <h3>TRN-230</h3>
                <p>Machine setup competency requires supervisor sign-off.</p>
                <div className="trainingMeta">Line 2 • Yesterday</div>
              </div>

              <div className="trainingCard green">
                <span>Verified</span>
                <h3>COMP-112</h3>
                <p>Packaging operator competency verified.</p>
                <div className="trainingMeta">Packaging • Yesterday</div>
              </div>
            </div>
          </section>

          <section className="trainingIntake">
            <div>
              <h2>Training Assignment Intake</h2>
              <p>
                Training can be assigned from updated documents, safety events,
                quality issues, onboarding plans, equipment changes, or
                supervisor requests.
              </p>
            </div>

            <div className="trainingIntakeGrid">
              <div className="trainingIntakeItem">Employee</div>
              <div className="trainingIntakeItem">Training Program</div>
              <div className="trainingIntakeItem">Due Date</div>
              <div className="trainingIntakeItem">Trainer</div>
              <div className="trainingIntakeItem">Department</div>
              <div className="trainingIntakeItem">Linked Document</div>
            </div>
          </section>

          <div className="trainingActions">
            <button>Assign Training</button>
            <button>Create Training</button>
            <button>Verify Competency</button>
            <button>Schedule Session</button>
            <button>Generate Record</button>
          </div>

          <section className="trainingMetrics">
            <h2>Training Metrics</h2>

            <div className="trainingMetricsGrid">
              <div className="trainingMetricCard">
                <span>Assigned Training</span>
                <h3>18</h3>
              </div>

              <div className="trainingMetricCard">
                <span>Overdue Training</span>
                <h3>5</h3>
              </div>

              <div className="trainingMetricCard">
                <span>Completed Training</span>
                <h3>42</h3>
              </div>

              <div className="trainingMetricCard">
                <span>Competency Checks</span>
                <h3>9</h3>
              </div>

              <div className="trainingMetricCard">
                <span>New Hire Training</span>
                <h3>6</h3>
              </div>

              <div className="trainingMetricCard">
                <span>Safety Training</span>
                <h3>11</h3>
              </div>
            </div>
          </section>

          <section className="trainingCategories">
            <h2>Training Categories</h2>

            <div className="trainingCategoryGrid">
              <div>New Hire Onboarding</div>
              <div>Work Instructions</div>
              <div>Safety Training</div>
              <div>Quality Training</div>
              <div>Equipment Training</div>
              <div>Process Certification</div>
              <div>Refresher Training</div>
              <div>Compliance Training</div>
              <div>Cross Training</div>
              <div>Competency Verification</div>
            </div>
          </section>

          <section className="trainingWorkspace">
            <div className="trainingPanel">
              <h2>Training Records</h2>

              <div className="trainingTableContainer">
                <table className="trainingTable">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Training Item</th>
                      <th>Employee</th>
                      <th>Department</th>
                      <th>Due Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>TRN-221</td>
                      <td>Packaging Work Instruction</td>
                      <td>J. Smith</td>
                      <td>Packaging</td>
                      <td>Completed</td>
                      <td>
                        <span className="tStatus greenStatus">
                          Completed
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>TRN-205</td>
                      <td>Forklift Refresher</td>
                      <td>S. Jones</td>
                      <td>Warehouse</td>
                      <td>06/14/2026</td>
                      <td>
                        <span className="tStatus redStatus">
                          Overdue
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>TRN-224</td>
                      <td>New Hire Onboarding</td>
                      <td>M. Carter</td>
                      <td>Assembly</td>
                      <td>06/21/2026</td>
                      <td>
                        <span className="tStatus orangeStatus">
                          Assigned
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>TRN-230</td>
                      <td>Machine Setup Competency</td>
                      <td>A. Rivera</td>
                      <td>Line 2</td>
                      <td>06/19/2026</td>
                      <td>
                        <span className="tStatus yellowStatus">
                          Verification Needed
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>COMP-112</td>
                      <td>Packaging Operator Competency</td>
                      <td>D. Nguyen</td>
                      <td>Packaging</td>
                      <td>Completed</td>
                      <td>
                        <span className="tStatus greenStatus">
                          Competency Verified
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>TRN-238</td>
                      <td>Updated Quality Alert Process</td>
                      <td>L. Morgan</td>
                      <td>Quality</td>
                      <td>06/23/2026</td>
                      <td>
                        <span className="tStatus orangeStatus">
                          In Progress
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>TRN-244</td>
                      <td>Machine Guard Safety Review</td>
                      <td>R. Patel</td>
                      <td>Maintenance</td>
                      <td>06/20/2026</td>
                      <td>
                        <span className="tStatus yellowStatus">
                          Supervisor Review
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>TRN-251</td>
                      <td>First Piece Inspection Process</td>
                      <td>C. Davis</td>
                      <td>Quality Lab</td>
                      <td>06/25/2026</td>
                      <td>
                        <span className="tStatus orangeStatus">
                          Assigned
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>TRN-260</td>
                      <td>Emergency Exit Procedure</td>
                      <td>K. Brooks</td>
                      <td>Warehouse A</td>
                      <td>06/18/2026</td>
                      <td>
                        <span className="tStatus redStatus">
                          Overdue
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>COMP-118</td>
                      <td>Final Inspection Competency</td>
                      <td>N. Wilson</td>
                      <td>Quality</td>
                      <td>Completed</td>
                      <td>
                        <span className="tStatus greenStatus">
                          Competency Verified
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <aside className="trainingPanel">
              <h2>Connected Actions</h2>

              <div className="trainingConnectedList">
                <div>WI-205 revision triggered operator retraining</div>
                <div>Forklift near miss linked to refresher training</div>
                <div>NC-221 linked to inspection process training</div>
                <div>Safety hazard created machine guard review</div>
                <div>New hire onboarding linked to Workforce role</div>
              </div>
            </aside>
          </section>

          <section className="competencyPanel">
            <h2>Competency Tracking</h2>

            <div className="competencyGrid">
              <div>
                <h3>Training Completion</h3>
                <p>Tracks whether assigned learning has been completed.</p>
              </div>

              <div>
                <h3>Supervisor Verification</h3>
                <p>Confirms the employee can perform the task correctly.</p>
              </div>

              <div>
                <h3>Recertification</h3>
                <p>Flags roles or tasks requiring periodic reassessment.</p>
              </div>
            </div>
          </section>

          <section className="trainingWorkflow">
            <h2>Training Workflow</h2>

            <div className="trainingWorkflowFlow">
              <div>Training Assigned</div>
              <span>→</span>
              <div>Training Completed</div>
              <span>→</span>
              <div>Competency Verified</div>
              <span>→</span>
              <div>Certification</div>
              <span>→</span>
              <div>Periodic Review</div>
              <span>→</span>
              <div>Retraining</div>
            </div>
          </section>
        </section>
      </main>
    </Layout>
  );
}