import React from 'react';
import Layout from '@theme/Layout';
import './workforce.css';

export default function Workforce() {
  return (
    <Layout title="Workforce Management" description="Workforce Management">
      <main className="workforcePage">
        <section className="workforceHero">
          <p className="workforceEyebrow">IntegrAIQ Module</p>

          <h1>Workforce Management</h1>

          <p>
            Connect employees, reporting structures, responsibilities,
            company resources, and employee self-service tools into one
            centralized workforce hub.
          </p>
        </section>

        <section className="workforceShell">
          <section className="workforceOverview">
            <h2>Workforce Overview</h2>

            <div className="workforceMetricsGrid">
              <div className="workforceMetricCard">
                <span>Active Employees</span>
                <h3>148</h3>
              </div>

              <div className="workforceMetricCard">
                <span>Departments</span>
                <h3>8</h3>
              </div>

              <div className="workforceMetricCard">
                <span>Training Gaps</span>
                <h3>6</h3>
              </div>

              <div className="workforceMetricCard">
                <span>Certifications Due</span>
                <h3>9</h3>
              </div>

              <div className="workforceMetricCard">
                <span>New Hires</span>
                <h3>3</h3>
              </div>

              <div className="workforceMetricCard">
                <span>Open Reviews</span>
                <h3>4</h3>
              </div>
            </div>
          </section>

          <section className="workforceTopGrid">
            <section className="activeWorkforceItems">
              <h2>Active Workforce Items</h2>

              <div className="activeWorkforceGrid">
                <div className="workforceItem redItem">
                  <span>High</span>
                  <h3>Forklift Certification Expiring</h3>
                  <p>Warehouse operator certification expires within 5 days.</p>
                  <div className="activityMeta">
                    Warehouse • Training Coordinator
                  </div>
                </div>

                <div className="workforceItem orangeItem">
                  <span>Medium</span>
                  <h3>New Hire Onboarding</h3>
                  <p>Two onboarding tasks remain incomplete.</p>
                  <div className="activityMeta">
                    Assembly • Production Supervisor
                  </div>
                </div>

                <div className="workforceItem yellowItem">
                  <span>Low</span>
                  <h3>Role Transfer Review</h3>
                  <p>Employee moved departments and role mapping requires update.</p>
                  <div className="activityMeta">
                    Packaging • HR Coordinator
                  </div>
                </div>
              </div>
            </section>

            <aside className="eventsPanel">
              <h2>Upcoming Events</h2>

              <div className="eventList">
                <div>
                  <span>Jun 19</span>
                  <p>Safety Stand-Down Meeting</p>
                </div>

                <div>
                  <span>Jul 4</span>
                  <p>Independence Day Holiday</p>
                </div>

                <div>
                  <span>Jul 15</span>
                  <p>Quarterly Plant Communication Meeting</p>
                </div>

                <div>
                  <span>Aug 2</span>
                  <p>Annual Summer Picnic</p>
                </div>
              </div>
            </aside>
          </section>

          <section className="workforceMiddleGrid">
            <section className="organizationChart">
  <h2>Workforce Structure & Ownership</h2>

  <div className="leadershipCard">
    <span>Executive Leadership</span>
    <h3>Plant Manager</h3>
    <p>Overall operational ownership and strategic direction.</p>
  </div>

  <div className="departmentGrid">
    <div className="departmentCard">
      <h3>Operations</h3>

      <div className="ownershipRole">
        <strong>Operations Manager</strong>
        <span>Department Leader</span>
      </div>

      <div className="ownershipRole">
        <strong>Production Supervisor</strong>
        <span>Shift Operations</span>
      </div>

      <div className="ownershipRole">
        <strong>Line Lead</strong>
        <span>Work Center Leadership</span>
      </div>

      <div className="ownershipTags">
        <span>Production</span>
        <span>Scheduling</span>
        <span>Escalations</span>
        <span>Performance</span>
      </div>
    </div>

    <div className="departmentCard">
      <h3>Quality</h3>

      <div className="ownershipRole">
        <strong>Quality Manager</strong>
        <span>Department Leader</span>
      </div>

      <div className="ownershipRole">
        <strong>Quality Engineer</strong>
        <span>Technical Ownership</span>
      </div>

      <div className="ownershipRole">
        <strong>Quality Inspector</strong>
        <span>Verification Activities</span>
      </div>

      <div className="ownershipTags">
        <span>Investigations</span>
        <span>CAPA</span>
        <span>Audits</span>
        <span>Quality Alerts</span>
      </div>
    </div>

    <div className="departmentCard">
      <h3>Safety</h3>

      <div className="ownershipRole">
        <strong>Safety Manager</strong>
        <span>Department Leader</span>
      </div>

      <div className="ownershipRole">
        <strong>Safety Coordinator</strong>
        <span>Program Administration</span>
      </div>

      <div className="ownershipRole">
        <strong>Safety Lead</strong>
        <span>Floor Support</span>
      </div>

      <div className="ownershipTags">
        <span>Hazards</span>
        <span>Incidents</span>
        <span>Corrective Actions</span>
        <span>Compliance</span>
      </div>
    </div>

    <div className="departmentCard">
      <h3>Human Resources</h3>

      <div className="ownershipRole">
        <strong>HR Manager</strong>
        <span>Department Leader</span>
      </div>

      <div className="ownershipRole">
        <strong>Training Coordinator</strong>
        <span>Training Administration</span>
      </div>

      <div className="ownershipRole">
        <strong>HR Coordinator</strong>
        <span>Employee Support</span>
      </div>

      <div className="ownershipTags">
        <span>Onboarding</span>
        <span>Training</span>
        <span>Employee Records</span>
        <span>Benefits</span>
      </div>
    </div>
  </div>
</section>

            <section className="employeePortal">
              <div className="portalHeader">
                <div>
                  <h2>Employee Portal Access</h2>

                  <p>
                    Direct employees to everyday work resources while keeping
                    workforce records, responsibilities, and training visibility
                    connected inside IntegrAIQ.
                  </p>
                </div>

                <span>Employee Self-Service</span>
              </div>

              <div className="portalGrid">
                <div className="portalCard">
                  <h3>Paystubs</h3>
                  <p>Access current and previous pay statements.</p>
                  <button>Open Paystubs</button>
                </div>

                <div className="portalCard">
                  <h3>Vacation Requests</h3>
                  <p>Submit PTO, vacation, and time-off requests.</p>
                  <button>Request Time Off</button>
                </div>

                <div className="portalCard">
                  <h3>Schedule</h3>
                  <p>View shift assignment, department, and supervisor.</p>
                  <button>View Schedule</button>
                </div>

                <div className="portalCard">
                  <h3>Benefits</h3>
                  <p>Access benefits, insurance, and HR information.</p>
                  <button>Open Benefits</button>
                </div>
              </div>
            </section>
          </section>
          <section className="jobOpeningsPanel">
  <h2>Current Job Openings</h2>

  <div className="jobOpeningList">
    <div className="jobOpeningCard">
      <h3>Production Operator</h3>
      <p>Assembly Department • 1st Shift</p>
      <span className="greenStatus">Open</span>
    </div>

    <div className="jobOpeningCard">
      <h3>Quality Inspector</h3>
      <p>Quality Department • 2nd Shift</p>
      <span className="yellowStatus">Interviewing</span>
    </div>

    <div className="jobOpeningCard">
      <h3>Maintenance Technician</h3>
      <p>Maintenance Department • 3rd Shift</p>
      <span className="greenStatus">Open</span>
    </div>

    <div className="jobOpeningCard">
      <h3>Training Coordinator</h3>
      <p>Human Resources • 1st Shift</p>
      <span className="yellowStatus">Interviewing</span>
    </div>

    <div className="jobOpeningCard">
      <h3>Process Engineer</h3>
      <p>Engineering Department • 1st Shift</p>
      <span className="greenStatus">Open</span>
    </div>
  </div>
</section>

          <section className="resourcesPanel">
            <h2>Company Resources</h2>

            <div className="resourceGrid">
              <div>
                <h3>Employee Handbook</h3>
                <p>Policies, expectations, conduct, and workplace standards.</p>
              </div>

              <div>
                <h3>Holiday Schedule</h3>
                <p>Company holidays, shutdown days, and paid time off dates.</p>
              </div>

              <div>
                <h3>Company Events</h3>
                <p>Plant meetings, training events, celebrations, and updates.</p>
              </div>

              <div>
                <h3>Announcements</h3>
                <p>Leadership messages, reminders, and workforce notices.</p>
              </div>
            </div>
          </section>

          <section className="roleResponsibilities">
            <h2>Roles & Responsibilities</h2>

            <div className="roleTableContainer">
              <table className="roleTable">
                <thead>
                  <tr>
                    <th>Role</th>
                    <th>Department</th>
                    <th>Reports To</th>
                    <th>Responsibilities</th>
                    <th>Connected Modules</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Production Supervisor</td>
                    <td>Operations</td>
                    <td>Operations Manager</td>
                    <td>
                      Shift performance, operator assignments, production issues,
                      and first-level response.
                    </td>
                    <td>Alerts, Training, Workforce</td>
                  </tr>

                  <tr>
                    <td>Quality Engineer</td>
                    <td>Quality</td>
                    <td>Quality Manager</td>
                    <td>
                      Investigations, NCs, CAPAs, quality alerts, and process
                      improvement.
                    </td>
                    <td>Quality, Documentation, Alerts</td>
                  </tr>

                  <tr>
                    <td>Safety Manager</td>
                    <td>Safety</td>
                    <td>Plant Manager</td>
                    <td>
                      Incident response, hazard review, corrective actions, and
                      safety compliance.
                    </td>
                    <td>Safety, Alerts, Training</td>
                  </tr>

                  <tr>
                    <td>Training Coordinator</td>
                    <td>HR / Training</td>
                    <td>HR Manager</td>
                    <td>
                      Training assignments, certification tracking, onboarding,
                      and retraining.
                    </td>
                    <td>Training, Documentation, Workforce</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="employeeWorkspace">
            <div className="employeePanel">
              <h2>Employee Records</h2>

              <div className="employeeTableContainer">
                <table className="employeeTable">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Role</th>
                      <th>Department</th>
                      <th>Supervisor</th>
                      <th>Shift</th>
                      <th>Training</th>
                      <th>Certification</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Jordan Smith</td>
                      <td>Line Lead</td>
                      <td>Packaging</td>
                      <td>Production Supervisor</td>
                      <td>1st Shift</td>
                      <td>
                        <span className="wfStatus greenStatus">Current</span>
                      </td>
                      <td>
                        <span className="wfStatus yellowStatus">Due Soon</span>
                      </td>
                    </tr>

                    <tr>
                      <td>Morgan Lee</td>
                      <td>Quality Inspector</td>
                      <td>Quality</td>
                      <td>Quality Manager</td>
                      <td>2nd Shift</td>
                      <td>
                        <span className="wfStatus greenStatus">Current</span>
                      </td>
                      <td>
                        <span className="wfStatus greenStatus">Current</span>
                      </td>
                    </tr>

                    <tr>
                      <td>Avery Johnson</td>
                      <td>Operator</td>
                      <td>Assembly</td>
                      <td>Production Supervisor</td>
                      <td>1st Shift</td>
                      <td>
                        <span className="wfStatus orangeStatus">Incomplete</span>
                      </td>
                      <td>
                        <span className="wfStatus redStatus">Expired</span>
                      </td>
                    </tr>

                    <tr>
                      <td>Taylor Brooks</td>
                      <td>Safety Lead</td>
                      <td>Warehouse</td>
                      <td>Safety Manager</td>
                      <td>1st Shift</td>
                      <td>
                        <span className="wfStatus greenStatus">Current</span>
                      </td>
                      <td>
                        <span className="wfStatus greenStatus">Current</span>
                      </td>
                    </tr>

                    <tr>
                      <td>Casey Martin</td>
                      <td>Maintenance Technician</td>
                      <td>Maintenance</td>
                      <td>Maintenance Lead</td>
                      <td>3rd Shift</td>
                      <td>
                        <span className="wfStatus yellowStatus">Review</span>
                      </td>
                      <td>
                        <span className="wfStatus greenStatus">Current</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <aside className="employeePanel">
              <h2>Connected Actions</h2>

              <div className="workforceConnectedList">
                <div>Training gap assigned to Production Supervisor</div>
                <div>Safety alert routed by department ownership</div>
                <div>Document revision triggered role-based retraining</div>
                <div>Quality investigation assigned by role responsibility</div>
                <div>New hire onboarding linked to Training module</div>
              </div>
            </aside>
          </section>

          <section className="workforceWorkflow">
            <h2>Workforce Workflow</h2>

            <div className="workforceWorkflowFlow">
              <div>Role Created</div>
              <span>→</span>
              <div>Employee Assigned</div>
              <span>→</span>
              <div>Training Linked</div>
              <span>→</span>
              <div>Responsibility Mapped</div>
              <span>→</span>
              <div>Supervisor Review</div>
              <span>→</span>
              <div>Record Maintained</div>
            </div>
          </section>
        </section>
      </main>
    </Layout>
  );
}