import React from 'react';
import Layout from '@theme/Layout';
import './alerts.css';

export default function Alerts() {
  return (
    <Layout title="Alerts Management" description="Alerts Management">
      <main className="alertsPage">
        <section className="alertsHero">
          <p className="alertsEyebrow">IntegrAIQ Module</p>

          <h1>Alerts Management</h1>

          <p>
            Route urgent shop-floor alerts, capture evidence, track response
            ownership, and connect notifications to quality, safety, training,
            documentation, and workforce actions.
          </p>
        </section>

        <section className="alertsShell">
          <section className="activeAlerts">
            <h2>Active Alerts</h2>

            <div className="activeAlertsGrid">
              <div className="alertCard high">
                <span>High</span>
                <h3>ALT-104</h3>
                <p>Dimension out of tolerance. Production hold recommended.</p>

                <div className="photoBox">Photo Attached</div>

                <div className="alertMeta">
                  <div>Location: Machine Shop</div>
                  <div>Recorded: 7:58 AM</div>
                  <div>Source: IntegrAIQ Mobile</div>
                  <div>Owner: Quality Engineering</div>
                </div>
              </div>

              <div className="alertCard high">
                <span>High</span>
                <h3>ALT-102</h3>
                <p>Foreign material concern reported on Packaging Line 2.</p>

                <div className="photoBox">Photo Attached</div>

                <div className="alertMeta">
                  <div>Location: Packaging Line 2</div>
                  <div>Recorded: 9:14 AM</div>
                  <div>Source: Portal Submission</div>
                  <div>Owner: Production Supervisor</div>
                </div>
              </div>

              <div className="alertCard high">
                <span>High</span>
                <h3>ALT-103</h3>
                <p>Damaged pallet creating trip hazard near receiving dock.</p>

                <div className="photoBox">Photo Attached</div>

                <div className="alertMeta">
                  <div>Location: Receiving Dock</div>
                  <div>Recorded: 8:42 AM</div>
                  <div>Source: Email</div>
                  <div>Owner: Safety Manager</div>
                </div>
              </div>
            </div>
          </section>
          <section className="notificationLog">
  <div className="notificationLogHeader">
    <div>
      <h2>Notification Log</h2>
      <p>
        A real-time history of alert submissions, notifications,
        acknowledgements, escalations, and closures.
      </p>
    </div>

    <span>Live Alert Trail</span>
  </div>

  <div className="notificationTimeline">
    <div className="notificationItem highNotification">
      <div className="notificationTime">9:30 AM</div>
      <div>
        <h3>ALT-102 escalated</h3>
        <p>
          No acknowledgement received within response window.
          Operations Manager notified.
        </p>
      </div>
    </div>

    <div className="notificationItem mediumNotification">
      <div className="notificationTime">9:18 AM</div>
      <div>
        <h3>Quality Engineering copied</h3>
        <p>
          Foreign material concern forwarded from Production Supervisor
          to Quality Engineering.
        </p>
      </div>
    </div>

    <div className="notificationItem highNotification">
      <div className="notificationTime">9:15 AM</div>
      <div>
        <h3>Production Supervisor notified</h3>
        <p>
          ALT-102 submitted from Portal Submission for Packaging Line 2.
        </p>
      </div>
    </div>

    <div className="notificationItem highNotification">
      <div className="notificationTime">8:43 AM</div>
      <div>
        <h3>Safety Manager notified</h3>
        <p>
          ALT-103 submitted by email for trip hazard at Receiving Dock.
        </p>
      </div>
    </div>

    <div className="notificationItem resolvedNotification">
      <div className="notificationTime">Yesterday</div>
      <div>
        <h3>ALT-112 closed</h3>
        <p>
          Document revision alert verified and training assignment
          TRN-238 created.
        </p>
      </div>
    </div>
  </div>
</section>

          <section className="alertIntake">
            <div>
              <h2>Alert Intake</h2>

              <p>
                Alerts can be submitted from the portal, email, IntegrAIQ Mobile,
                supervisor entry, AI camera review, or automated system events.
              </p>
            </div>

            <div className="alertIntakeGrid">
              <div>Photo Evidence</div>
              <div>Issue Details</div>
              <div>Time Recorded</div>
              <div>Location</div>
              <div>Source</div>
              <div>Assigned Owner</div>
            </div>
          </section>

          <div className="alertActions">
            <button>Create Alert</button>
            <button>Acknowledge Alert</button>
            <button>Escalate Alert</button>
            <button>Assign Owner</button>
            <button>Close Alert</button>
          </div>

          <section className="alertMetrics">
            <h2>Alert Metrics</h2>

            <div className="alertMetricsGrid">
              <div className="alertMetricCard">
                <span>Open Alerts</span>
                <h3>15</h3>
              </div>

              <div className="alertMetricCard">
                <span>High Alerts</span>
                <h3>2</h3>
              </div>

              <div className="alertMetricCard">
                <span>Escalated Alerts</span>
                <h3>4</h3>
              </div>

              <div className="alertMetricCard">
                <span>Acknowledged</span>
                <h3>9</h3>
              </div>

              <div className="alertMetricCard">
                <span>Resolved Today</span>
                <h3>7</h3>
              </div>

              <div className="alertMetricCard">
                <span>Avg. Response</span>
                <h3>18m</h3>
              </div>
            </div>
          </section>

          <section className="alertCategories">
            <h2>Alert Categories</h2>

            <div className="alertCategoryGrid">
              <div>Quality Alerts</div>
              <div>Safety Alerts</div>
              <div>Training Alerts</div>
              <div>Document Alerts</div>
              <div>Production Alerts</div>
              <div>Maintenance Alerts</div>
              <div>Customer Alerts</div>
              <div>Supplier Alerts</div>
              <div>Environmental Alerts</div>
              <div>Escalations</div>
            </div>
          </section>

          <section className="alertsWorkspace">
            <div className="alertsPanel">
              <h2>Alert Records</h2>

              <div className="alertsTableContainer">
                <table className="alertsTable">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Alert</th>
                      <th>Location</th>
                      <th>Source</th>
                      <th>Owner</th>
                      <th>Time Reported</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>ALT-104</td>
                      <td>Dimension out of tolerance</td>
                      <td>Machine Shop</td>
                      <td>IntegrAIQ Mobile</td>
                      <td>Quality Engineering</td>
                      <td>7:58 AM</td>
                      <td>
                        <span className="aStatus redStatus">High</span>
                      </td>
                    </tr>

                    <tr>
                      <td>ALT-102</td>
                      <td>Foreign material concern</td>
                      <td>Packaging Line 2</td>
                      <td>Portal Submission</td>
                      <td>Production Supervisor</td>
                      <td>9:14 AM</td>
                      <td>
                        <span className="aStatus redStatus">Open</span>
                      </td>
                    </tr>

                    <tr>
                      <td>ALT-103</td>
                      <td>Trip hazard near dock</td>
                      <td>Receiving Dock</td>
                      <td>Email</td>
                      <td>Safety Manager</td>
                      <td>8:42 AM</td>
                      <td>
                        <span className="aStatus orangeStatus">
                          Acknowledged
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>ALT-110</td>
                      <td>Training overdue notification</td>
                      <td>Warehouse</td>
                      <td>Automated System Alert</td>
                      <td>Warehouse Supervisor</td>
                      <td>Yesterday</td>
                      <td>
                        <span className="aStatus yellowStatus">
                          Pending Review
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>ALT-112</td>
                      <td>Document revision released</td>
                      <td>Packaging</td>
                      <td>Automated System Alert</td>
                      <td>Training Coordinator</td>
                      <td>Yesterday</td>
                      <td>
                        <span className="aStatus greenStatus">Resolved</span>
                      </td>
                    </tr>

                    <tr>
                      <td>ALT-118</td>
                      <td>Blocked emergency exit route</td>
                      <td>Warehouse A</td>
                      <td>Supervisor Entry</td>
                      <td>Safety Manager</td>
                      <td>Yesterday</td>
                      <td>
                        <span className="aStatus redStatus">Open</span>
                      </td>
                    </tr>

                    <tr>
                      <td>ALT-121</td>
                      <td>Machine guard inspection reminder</td>
                      <td>Line 2</td>
                      <td>Automated System Alert</td>
                      <td>Maintenance Lead</td>
                      <td>2 days ago</td>
                      <td>
                        <span className="aStatus orangeStatus">
                          Acknowledged
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>ALT-126</td>
                      <td>Supplier material variation</td>
                      <td>Receiving</td>
                      <td>AI Camera Review</td>
                      <td>Supplier Quality</td>
                      <td>2 days ago</td>
                      <td>
                        <span className="aStatus yellowStatus">
                          Under Review
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <aside className="alertsPanel">
              <h2>Connected Actions</h2>

              <div className="alertsConnectedList">
                <div>ALT-104 routed to Quality Engineering</div>
                <div>ALT-103 created Safety record HAZ-041</div>
                <div>ALT-112 triggered training assignment TRN-238</div>
                <div>ALT-118 escalated to Safety Manager</div>
                <div>ALT-126 linked to Supplier Quality investigation</div>
              </div>
            </aside>
          </section>

          <section className="escalationRules">
            <h2>Escalation Rules</h2>

            <div className="escalationGrid">
              <div className="escalationCard highEscalation">
                <h3>High</h3>
                <p>
                  Immediate escalation to the assigned owner, supervisor, and
                  department manager.
                </p>
              </div>

              <div className="escalationCard mediumEscalation">
                <h3>Medium</h3>
                <p>
                  Escalates after 30 minutes if the alert has not been
                  acknowledged.
                </p>
              </div>

              <div className="escalationCard lowEscalation">
                <h3>Low</h3>
                <p>
                  Escalates after 2 hours if no owner is assigned or response is
                  started.
                </p>
              </div>

              <div className="escalationCard resolvedEscalation">
                <h3>Resolved</h3>
                <p>
                  Alert has been addressed, verified, documented, and closed.
                </p>
              </div>
            </div>
          </section>

          <section className="alertWorkflow">
            <h2>Alert Workflow</h2>

            <div className="alertWorkflowFlow">
              <div>Alert Reported</div>
              <span>→</span>
              <div>Assigned</div>
              <span>→</span>
              <div>Acknowledged</div>
              <span>→</span>
              <div>Action Taken</div>
              <span>→</span>
              <div>Verification</div>
              <span>→</span>
              <div>Closed</div>
            </div>
          </section>
        </section>
      </main>
    </Layout>
  );
}