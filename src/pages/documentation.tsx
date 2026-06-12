import React from 'react';
import Layout from '@theme/Layout';
import './documentation.css';

export default function Documentation() {
  return (
    <Layout title="Documentation Center" description="Documentation Center">
      <main className="documentationPage">
        <section className="documentationHero">
          <p className="docEyebrow">IntegrAIQ Module</p>
          <h1>Documentation Center</h1>
          <p>
            A shop-floor-ready workspace for controlled documents, procedures,
            work instructions, forms, policies, standards, and revision activity.
          </p>
        </section>

        <section className="documentationShell">
          <div className="docActions">
            <button>New Document</button>
            <button>Submit Revision</button>
            <button>Pending Approvals</button>
            <button>Archived Documents</button>
          </div>

          <div className="docSearch">
            <input placeholder="Search documents, SOPs, forms, work instructions, or standards..." />
          </div>

          <section className="docTypes">
            <h2>Document Types</h2>

            <div className="docTypesGrid">
              <div>Policies</div>
              <div>Procedures</div>
              <div>Work Instructions</div>
              <div>Forms & Templates</div>
              <div>Standards</div>
              <div>Specifications</div>
              <div>Engineering Documents</div>
              <div>Quality Documents</div>
              <div>Safety Documents</div>
              <div>Training Documents</div>
              <div>Maintenance Documents</div>
              <div>Customer Documents</div>
            </div>
          </section>

          <section className="docWorkspace">
            <div className="docMainPanel">
              <div className="panelHeader">
                <h2>Document Library</h2>
                <span>Controlled Source</span>
              </div>

              <div className="docTableContainer">
                <table className="docTable">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Document Title</th>
                      <th>Type</th>
                      <th>Owner</th>
                      <th>Revision</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>WI-205</td>
                      <td>Machine Setup Work Instruction</td>
                      <td>Work Instruction</td>
                      <td>Operations</td>
                      <td>Rev. 04</td>
                      <td><span className="status approved">Approved</span></td>
                    </tr>

                    <tr>
                      <td>SOP-102</td>
                      <td>Corrective Action Procedure</td>
                      <td>Procedure</td>
                      <td>Quality</td>
                      <td>Rev. 02</td>
                      <td><span className="status review">In Review</span></td>
                    </tr>

                    <tr>
                      <td>FRM-301</td>
                      <td>First Piece Inspection Form</td>
                      <td>Form Template</td>
                      <td>Quality</td>
                      <td>Rev. 06</td>
                      <td><span className="status approved">Approved</span></td>
                    </tr>

                    <tr>
                      <td>POL-001</td>
                      <td>Document Control Policy</td>
                      <td>Policy</td>
                      <td>Compliance</td>
                      <td>Rev. 03</td>
                      <td><span className="status approved">Approved</span></td>
                    </tr>

                    <tr>
                      <td>STD-110</td>
                      <td>Packaging Standard</td>
                      <td>Standard</td>
                      <td>Engineering</td>
                      <td>Draft</td>
                      <td><span className="status draft">Draft</span></td>
                    </tr>

                    <tr>
                      <td>SOP-118</td>
                      <td>Material Handling Procedure</td>
                      <td>Procedure</td>
                      <td>Operations</td>
                      <td>Rev. 01</td>
                      <td><span className="status approved">Approved</span></td>
                    </tr>

                    <tr>
                      <td>WI-212</td>
                      <td>Packaging Line Changeover</td>
                      <td>Work Instruction</td>
                      <td>Packaging</td>
                      <td>Rev. 05</td>
                      <td><span className="status review">In Review</span></td>
                    </tr>

                    <tr>
                      <td>FRM-420</td>
                      <td>Safety Observation Form</td>
                      <td>Form Template</td>
                      <td>Safety</td>
                      <td>Rev. 02</td>
                      <td><span className="status approved">Approved</span></td>
                    </tr>

                    <tr>
                      <td>SPEC-330</td>
                      <td>Customer Packaging Specification</td>
                      <td>Specification</td>
                      <td>Engineering</td>
                      <td>Rev. 07</td>
                      <td><span className="status approved">Approved</span></td>
                    </tr>

                    <tr>
                      <td>STD-145</td>
                      <td>Equipment Cleaning Standard</td>
                      <td>Standard</td>
                      <td>Maintenance</td>
                      <td>Rev. 02</td>
                      <td><span className="status archived">Archived</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <aside className="docSidePanel">
              <h2>Connected Activity</h2>

              <div className="activityList">
                <div className="activityItem">
                  <strong>Quality Reference</strong>
                  <p>FRM-301 is linked to completed First Piece Inspection records.</p>
                </div>

                <div className="activityItem">
                  <strong>Training Impact</strong>
                  <p>WI-205 revision may require operator retraining.</p>
                </div>

                <div className="activityItem">
                  <strong>Approval Needed</strong>
                  <p>SOP-102 is waiting for Quality Manager review.</p>
                </div>

                <div className="activityItem">
                  <strong>Alert Ready</strong>
                  <p>Packaging Standard draft can generate a release notification.</p>
                </div>
              </div>
            </aside>
          </section>

          <section className="lifecycleSection">
            <h2>Document Lifecycle</h2>

            <div className="lifecycleFlow">
              <div className="lifecycleStep">
                <h3>Draft</h3>
                <p>Document is created and prepared for review.</p>
              </div>

              <div className="lifecycleArrow">→</div>

              <div className="lifecycleStep">
                <h3>Review</h3>
                <p>Subject matter experts verify accuracy.</p>
              </div>

              <div className="lifecycleArrow">→</div>

              <div className="lifecycleStep">
                <h3>Approval</h3>
                <p>Authorized personnel approve release.</p>
              </div>

              <div className="lifecycleArrow">→</div>

              <div className="lifecycleStep">
                <h3>Release</h3>
                <p>Document becomes available for use.</p>
              </div>

              <div className="lifecycleArrow">→</div>

              <div className="lifecycleStep">
                <h3>Revision</h3>
                <p>Updates are controlled and documented.</p>
              </div>

              <div className="lifecycleArrow">→</div>

              <div className="lifecycleStep">
                <h3>Archive</h3>
                <p>Obsolete versions are retained for history.</p>
              </div>
            </div>
          </section>

          <section className="docBottomGrid">
            <div className="docInfoCard">
              <h3>Documentation Owns</h3>
              <p>
                Controlled sources such as policies, procedures, work instructions,
                forms, templates, standards, and specifications.
              </p>
            </div>

            <div className="docInfoCard">
              <h3>Operational Modules Reference</h3>
              <p>
                Quality, Safety, Training, Alerts, and Workforce can reference
                documentation without changing the original controlled record.
              </p>
            </div>

            <div className="docInfoCard">
              <h3>Revision Control</h3>
              <p>
                Updates move through draft, review, approval, release, revision,
                and archive stages to maintain traceability.
              </p>
            </div>
          </section>
        </section>
      </main>
    </Layout>
  );
}