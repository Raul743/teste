import React from "react";
import MetaTags from "react-meta-tags";

import Link from "next/link";
import { Container, Row, Col, Button, Input, Label, Card } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../client/components/Dashboard-default/breadCrumb";

//Import Email Sidebar
import EmailSideBar from "./email-sidebar";

//Import Email Topbar
import EmailToolbar from "./email-toolbar";

const EmailInbox = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Inbox | SNIR - SMS</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Email" breadcrumbItem="Inbox" />

          <Row>
            <Col xs="12">
              {/* Render Email SideBar */}
              <EmailSideBar />
              <div className="email-rightbar mb-3">
                <Card>
                  {/* Render Email Top Tool Bar */}
                  <EmailToolbar />

                  <ul className="message-list">
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <Input type="checkbox" id="chk19" />
                          <Label htmlFor="chk19" className="toggle" />
                        </div>
                        <Link href="#">
                          <a className="title"> Peter, me (3)</a>
                        </Link>
                        <span className="star-toggle far fa-star" />
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link href="#">
                          <a className="subject">
                            Hello –
                            <span className="teaser">
                              Trip home from Colombo has been arranged, then
                              Jenna will come get me from Stockholm. :)
                            </span>
                          </a>
                        </Link>
                        <div className="date">Mar 6</div>
                      </div>
                    </li>

                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <Input type="checkbox" id="chk20" />
                          <Label htmlFor="chk20" className="toggle" />
                        </div>
                        <Link href="#">
                          <a className="title"> me, Susanna (7)</a>
                        </Link>
                        <span className="star-toggle far fa-star" />
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link href="#">
                          <a className="subject">
                            <span className="bg-warning badge me-2">
                              Freelance
                            </span>
                            Since you asked... and i'm inconceivably bored at
                            the train station –
                            <span className="teaser">
                              Alright thanks. I'll have to re-book that somehow,
                              i'll get back to you.
                            </span>
                          </a>
                        </Link>
                        <div className="date">Mar. 6</div>
                      </div>
                    </li>

                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <Input type="checkbox" id="chk6" />
                          <Label htmlFor="chk6" className="toggle" />
                        </div>
                        <Link href="#">
                          <a className="title"> Web Support Dennis</a>
                        </Link>
                        <span className="star-toggle far fa-star" />
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link href="#">
                          <a className="subject">
                            Re: New mail settings –
                            <span className="teaser">
                              Will you answer him asap?
                            </span>
                          </a>
                        </Link>
                        <div className="date">Mar 7</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <Input type="checkbox" id="chk7" />
                          <Label htmlFor="chk7" className="toggle" />
                        </div>
                        <Link href="#">
                          <a className="title"> me, Peter (2)</a>
                        </Link>
                        <span className="star-toggle far fa-star" />
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link href="#">
                          <a className="subject">
                            <span className="bg-info badge me-2">Support</span>
                            Off on Thursday -
                            <span className="teaser">
                              Eff that place, you might as well stay here with
                              us instead! Sent from my iPhone 4 4 mar 2014 at
                              5:55 pm
                            </span>
                          </a>
                        </Link>
                        <div className="date">Mar 4</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <Input type="checkbox" id="chk8" />
                          <Label htmlFor="chk8" className="toggle" />
                        </div>
                        <Link href="#">
                          <a className="title"> Medium</a>
                        </Link>
                        <span className="star-toggle far fa-star" />
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link href="#">
                          <a className="subject">
                            <span className="bg-primary badge me-2">
                              Social
                            </span>
                            This Week's Top Stories –
                            <span className="teaser">
                              Our top pick for you on Medium this week The Man
                              Who Destroyed America’s Ego
                            </span>
                          </a>
                        </Link>
                        <div className="date">Feb 28</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <Input type="checkbox" id="chk9" />
                          <Label htmlFor="chk9" className="toggle" />
                        </div>
                        <Link href="#">
                          <a className="title"> Death to Stock</a>
                        </Link>
                        <span className="star-toggle far fa-star" />
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link href="#">
                          <a className="subject">
                            Montly High-Res Photos –
                            <span className="teaser">
                              To create this month's pack, we hosted a party
                              with local musician Jared Mahone here in Columbus,
                              Ohio.
                            </span>
                          </a>
                        </Link>
                        <div className="date">Feb 28</div>
                      </div>
                    </li>

                    <li className="unread">
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <Input type="checkbox" id="chk3" />
                          <Label htmlFor="chk3" className="toggle" />
                        </div>
                        <Link href="#">
                          <a className="title"> Randy, me (5)</a>
                        </Link>
                        <span className="star-toggle far fa-star" />
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link href="#">
                          <a className="subject">
                            <span className="bg-success badge me-2">
                              Family
                            </span>
                            Last pic over my village –
                            <span className="teaser">
                              Yeah i'd like that! Do you remember the video you
                              showed me of your train ride between Colombo and
                              Kandy? The one with the mountain view? I would
                              love to see that one again!
                            </span>
                          </a>
                        </Link>
                        <div className="date">5:01 am</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <Input type="checkbox" id="chk4" />
                          <Label htmlFor="chk4" className="toggle" />
                        </div>
                        <Link href="#">
                          <a className="title"> Andrew Zimmer</a>
                        </Link>
                        <span className="star-toggle far fa-star" />
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link href="#">
                          <a className="subject">
                            Mochila Beta: Subscription Confirmed –
                            <span className="teaser">
                              You've been confirmed! Welcome to the ruling
                              className of the inbox. For your records, here is
                              a copy of the information you submitted to us...
                            </span>
                          </a>
                        </Link>
                        <div className="date">Mar 8</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <Input type="checkbox" id="chk5" />
                          <Label htmlFor="chk5" className="toggle" />
                        </div>
                        <Link href="#">
                          <a className="title"> Infinity HR</a>
                        </Link>
                        <span className="star-toggle far fa-star" />
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link href="#">
                          <a className="subject">
                            Sveriges Hetaste sommarjobb –
                            <span className="teaser">
                              Hej Nicklas Sandell! Vi vill bjuda in dig till
                              "First tour 2014", ett rekryteringsevent som
                              erbjuder jobb på 16 semesterorter iSverige.
                            </span>
                          </a>
                        </Link>
                        <div className="date">Mar 8</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <Input type="checkbox" id="chk10" />
                          <Label htmlFor="chk10" className="toggle" />
                        </div>
                        <Link href="#">
                          <a className="title"> Revibe</a>
                        </Link>
                        <span className="star-toggle far fa-star" />
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link href="#">
                          <a className="subject">
                            <span className="bg-danger badge me-2">
                              Friends
                            </span>
                            Weekend on Revibe –
                            <span className="teaser">
                              Today's Friday and we thought maybe you want some
                              music inspiration for the weekend. Here are some
                              trending tracks and playlists we think you should
                              give a listen!
                            </span>
                          </a>
                        </Link>
                        <div className="date">Feb 27</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <Input type="checkbox" id="chk11" />
                          <Label htmlFor="chk11" className="toggle" />
                        </div>
                        <Link href="#">
                          <a className="title"> Erik, me (5)</a>
                        </Link>
                        <span className="star-toggle far fa-star" />
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link href="#">
                          <a className="subject">
                            Regarding our meeting –
                            <span className="teaser">
                              That's great, see you on Thursday!
                            </span>
                          </a>
                        </Link>
                        <div className="date">Feb 24</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <Input type="checkbox" id="chk12" />
                          <Label htmlFor="chk12" className="toggle" />
                        </div>
                        <Link href="#">
                          <a className="title"> KanbanFlow</a>
                        </Link>
                        <span className="star-toggle far fa-star" />
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link href="#">
                          <a className="subject">
                            <span className="bg-primary badge me-2">
                              Social
                            </span>
                            Task assigned: Clone ARP's website –
                            <span className="teaser">
                              You have been assigned a task by Alex@Work on the
                              board Web.
                            </span>
                          </a>
                        </Link>
                        <div className="date">Feb 24</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <Input type="checkbox" id="chk13" />
                          <Label htmlFor="chk13" className="toggle" />
                        </div>
                        <Link href="#">
                          <a className="title">Tobias Berggren</a>
                        </Link>
                        <span className="star-toggle far fa-star" />
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link href="#">
                          <a className="subject">
                            Let's go fishing! –
                            <span className="teaser">
                              Hey, You wanna join me and Fred at the lake
                              tomorrow? It'll be awesome.
                            </span>
                          </a>
                        </Link>
                        <div className="date">Feb 23</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <Input type="checkbox" id="chk14" />
                          <Label htmlFor="chk14" className="toggle" />
                        </div>
                        <Link href="#">
                          <a className="title">Charukaw, me (7)</a>
                        </Link>
                        <span className="star-toggle far fa-star" />
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link href="#">
                          <a className="subject">
                            Hey man –
                            <span className="teaser">
                              Nah man sorry i don't. Should i get it?
                            </span>
                          </a>
                        </Link>
                        <div className="date">Feb 23</div>
                      </div>
                    </li>
                    <li className="unread">
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <Input type="checkbox" id="chk15" />
                          <Label htmlFor="chk15" className="toggle" />
                        </div>
                        <Link href="#">
                          <a className="title"> me, Peter (5)</a>
                        </Link>
                        <span className="star-toggle far fa-star" />
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link href="#">
                          <a className="subject">
                            <span className="bg-info badge me-2">Support</span>
                            Home again! –
                            <span className="teaser">
                              That's just perfect! See you tomorrow.
                            </span>
                          </a>
                        </Link>
                        <div className="date">Feb 21</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <Input type="checkbox" id="chk16" />
                          <Label htmlFor="chk16" className="toggle" />
                        </div>
                        <Link href="#">
                          <a className="title">Stack Exchange</a>
                        </Link>
                        <span className="star-toggle far fa-star" />
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link href="#">
                          <a className="subject">
                            1 new items in your Stackexchange inbox –
                            <span className="teaser">
                              The following items were added to your Stack
                              Exchange global inbox since you last checked it.
                            </span>
                          </a>
                        </Link>
                        <div className="date">Feb 21</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <Input type="checkbox" id="chk17" />
                          <Label htmlFor="chk17" className="toggle" />
                        </div>
                        <Link href="#">
                          <a className="title">Google Drive Team</a>
                        </Link>
                        <span className="star-toggle far fa-star" />
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link href="#">
                          <a className="subject">
                            You can now use your storage in Google Drive –
                            <span className="teaser">
                              Hey Nicklas Sandell! Thank you for purchasing
                              extra storage space in Google Drive.
                            </span>
                          </a>
                        </Link>
                        <div className="date">Feb 20</div>
                      </div>
                    </li>
                    <li>
                      <div className="col-mail col-mail-1">
                        <div className="checkbox-wrapper-mail">
                          <Input type="checkbox" id="chk18" />
                          <Label htmlFor="chk18" className="toggle" />
                        </div>
                        <Link href="#">
                          <a className="title"> me, Susanna (11)</a>
                        </Link>
                        <span className="star-toggle far fa-star" />
                      </div>
                      <div className="col-mail col-mail-2">
                        <Link href="#">
                          <a className="subject">
                            Train/Bus –
                            <span className="teaser">
                              Yes ok, great! I'm not stuck in Stockholm anymore,
                              we're making progress.
                            </span>
                          </a>
                        </Link>
                        <div className="date">Feb 19</div>
                      </div>
                    </li>
                  </ul>
                </Card>
                <Row>
                  <Col xs="7">Showing 1 - 20 of 1,524</Col>
                  <Col xs="5">
                    <div className="btn-group float-end">
                      <Button
                        type="button"
                        color="success"
                        size="sm"
                        className="waves-effect"
                      >
                        <i className="fa fa-chevron-left" />
                      </Button>
                      <Button
                        type="button"
                        color="success"
                        size="sm"
                        className="waves-effect"
                      >
                        <i className="fa fa-chevron-right" />
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default EmailInbox;
