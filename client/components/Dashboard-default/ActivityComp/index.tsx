import React from "react";

// import { Container } from './styles';
import { Card, CardBody, CardTitle, Media } from "reactstrap";
import Link from "next/link";
const ActivityComp: React.FC = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="mb-5">Activity</CardTitle>
        <ul className="verti-timeline list-unstyled">
          <li className="event-list">
            <div className="event-timeline-dot">
              <i className="bx bx-right-arrow-circle font-size-18" />
            </div>
            <Media>
              <div className="me-3">
                <h5 className="font-size-14">
                  22 Nov{" "}
                  <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" />
                </h5>
              </div>
              <Media body>
                <div>Responded to need “Volunteer Activities</div>
              </Media>
            </Media>
          </li>

          <li className="event-list">
            <div className="event-timeline-dot">
              <i className="bx bx-right-arrow-circle font-size-18" />
            </div>
            <Media>
              <div className="me-3">
                <h5 className="font-size-14">
                  17 Nov{" "}
                  <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" />
                </h5>
              </div>
              <Media body>
                <div id="activitytext">
                  Everyone realizes why a new common language would be
                  desirable...
                  <Link href="#">
                    <a> Read More</a>
                  </Link>
                </div>
              </Media>
            </Media>
          </li>
          <li className="event-list active">
            <div className="event-timeline-dot">
              <i className="bx bxs-right-arrow-circle font-size-18 bx-fade-right" />
            </div>
            <Media>
              <div className="me-3">
                <h5 className="font-size-14">
                  15 Nov{" "}
                  <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" />
                </h5>
              </div>
              <Media body>
                <div>Joined the group “Boardsmanship Forum”</div>
              </Media>
            </Media>
          </li>
          <li className="event-list">
            <div className="event-timeline-dot">
              <i className="bx bx-right-arrow-circle font-size-18" />
            </div>
            <Media>
              <div className="me-3">
                <h5 className="font-size-14">
                  12 Nov{" "}
                  <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" />
                </h5>
              </div>
              <Media body>
                <div>Responded to need “In-Kind Opportunity”</div>
              </Media>
            </Media>
          </li>
        </ul>
        <div className="text-center mt-4">
          <Link href="">
            <a className="btn btn-primary waves-effect waves-light btn-sm">
              {" "}
              View More <i className="mdi mdi-arrow-right ms-1" />
            </a>
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};

export default ActivityComp;
