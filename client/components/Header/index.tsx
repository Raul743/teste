import React, { useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

// reactstrap
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap"

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown"
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"

import megamenuImg from "../../../assets/images/megamenu-img.png"
import logo from "../../../assets/images/logo-sm-light.png"
import logoLight from "../../../assets/images/logo-light.png"
import logoLightSvg from "../../../assets/images/logo-light.svg"
import logoDark from "../../../assets/images/logo-dark.png"

// import images
import github from "../../../assets/images/brands/github.png"
import bitbucket from "../../../assets/images/brands/bitbucket.png"
import dribbble from "../../../assets/images/brands/dribbble.png"
import dropbox from "../../../assets/images/brands/dropbox.png"
import mail_chimp from "../../../assets/images/brands/mail_chimp.png"
import slack from "../../../assets/images/brands/slack.png"

//i18n
//import { withTranslation } from "react-i18next"

const Header = (props:any) => {
  const [menu, setMenu] = useState(false)
  const [isSearch, setSearch] = useState(false)
  const [socialDrp, setsocialDrp] = useState(false)
/*
  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method / !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        )
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    }
  }
  */
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box" style={{backgroundColor:'#2a3042'}}>
              <a href="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logo} alt="" height="22" />
                </span>
                <span className="logo-lg">
                <img src={logoLight} alt="" height="17" />
                </span>
              </a>

              <a href="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logoLightSvg} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logoLight} alt="" height="19" />
                </span>
              </a>
            </div>

            <button
              type="button"
              className="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
              data-toggle="collapse"
              onClick={() => {
                /*props.toggleLeftmenu(!props.leftMenu)*/
              }}
              data-target="#topnav-menu-content"
            >
              <i className="fa fa-fw fa-bars" />
            </button>

            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="bx bx-search-alt" />
              </div>
            </form>

            <Dropdown
              className="dropdown-mega d-none d-lg-block ms-2"
              isOpen={menu}
              toggle={() => setMenu(!menu)}
            >
              <DropdownToggle
                className="btn header-item waves-effect"
                caret
                tag="button"
              >
                Mega Menu <i className="mdi mdi-chevron-down" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-megamenu">
                <Row>
                  <Col sm={8}>
                    <Row>
                      <Col md={4}>
                        <h5 className="font-size-14 mt-0">
                          UI Components
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <a href="#">Lightbox</a>
                          </li>
                          <li>
                            <a href="#">Range Slider</a>
                          </li>
                          <li>
                            <a href="#">Sweet Alert</a>
                          </li>
                          <li>
                            <a href="#">Rating</a>
                          </li>
                          <li>
                            <a href="#">Forms</a>
                          </li>
                          <li>
                            <a href="#">Tables</a>
                          </li>
                          <li>
                            <a href="#">Charts</a>
                          </li>
                        </ul>
                      </Col>

                      <Col md={4}>
                        <h5 className="font-size-14 mt-0">
                          Applications
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <a href="#">Ecommerce</a>
                          </li>
                          <li>
                            <a href="#">Calendar</a>
                          </li>
                          <li>
                            <a href="#">Email</a>
                          </li>
                          <li>
                            <a href="#">Projects</a>
                          </li>
                          <li>
                            <a href="#">Tasks</a>
                          </li>
                          <li>
                            <a href="#">Contacts</a>
                          </li>
                        </ul>
                      </Col>

                      <Col md={4}>
                        <h5 className="font-size-14 mt-0">
                          Extra Pages
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <a href="#">Light Sidebar</a>
                          </li>
                          <li>
                            <a href="#">Compact Sidebar</a>
                          </li>
                          <li>
                            <a href="#">Horizontal layout</a>
                          </li>
                          <li>
                            <a href="#"> Maintenance</a>
                          </li>
                          <li>
                            <a href="#">Coming Soon</a>
                          </li>
                          <li>
                            <a href="#">Timeline</a>
                          </li>
                          <li>
                            <a href="#">FAQs</a>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={4}>
                    <Row>
                      <Col sm={6}>
                        <h5 className="font-size-14 mt-0">
                          UI Components
                        </h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <a href="#">Lightbox</a>
                          </li>
                          <li>
                            <a href="#">Range Slider</a>
                          </li>
                          <li>
                            <a href="#">Sweet Alert</a>
                          </li>
                          <li>
                            <a href="#">Rating</a>
                          </li>
                          <li>
                            <a href="#">Forms</a>
                          </li>
                          <li>
                            <a href="#">Tables</a>
                          </li>
                          <li>
                            <a href="#">Charts</a>
                          </li>
                        </ul>
                      </Col>

                      <Col sm={5}>
                        <div>
                          <img
                            src={megamenuImg}
                            alt=""
                            className="img-fluid mx-auto d-block"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </DropdownMenu>
            </Dropdown>
          </div>

          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
                onClick={() => setSearch(!isSearch)}
              >
                <i className="mdi mdi-magnify" />
              </button>
              <div
                className={
                  isSearch
                    ? "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 show"
                    : "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                }
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="{props.t('Search') + '...'}"
                        aria-label="Recipient's username"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <LanguageDropdown />

            <Dropdown
              className="d-none d-lg-inline-block ms-1"
              isOpen={socialDrp}
              toggle={() => {
                setsocialDrp(!socialDrp)
              }}
            >
              <DropdownToggle
                className="btn header-item noti-icon waves-effect"
                caret
                tag="button"
              >
                <i className="bx bx-customize" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-lg" right>
                <div className="px-lg-2">
                  <Row className="no-gutters">
                    <Col>
                      <a className="dropdown-icon-item" href="#">
                        <img src={github} alt="Github" />
                        <span>GitHub</span>
                      </a>
                    </Col>
                    <Col>
                      <a className="dropdown-icon-item" href="#">
                        <img src={bitbucket} alt="bitbucket" />
                        <span>Bitbucket</span>
                      </a>
                    </Col>
                    <Col>
                      <a className="dropdown-icon-item" href="#">
                        <img src={dribbble} alt="dribbble" />
                        <span>Dribbble</span>
                      </a>
                    </Col>
                  </Row>
                  <Row className="no-gutters">
                    <Col>
                      <a className="dropdown-icon-item" href="#">
                        <img src={dropbox} alt="dropbox" />
                        <span>Dropbox</span>
                      </a>
                    </Col>
                    <Col>
                      <a className="dropdown-icon-item" href="#">
                        <img src={mail_chimp} alt="mail_chimp" />
                        <span>Mail Chimp</span>
                      </a>
                    </Col>
                    <Col>
                      <a className="dropdown-icon-item" href="#">
                        <img src={slack} alt="slack" />
                        <span>Slack</span>
                      </a>
                    </Col>
                  </Row>
                </div>
              </DropdownMenu>
            </Dropdown>

            <div className="dropdown d-none d-lg-inline-block ms-1">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                onClick={() => {
                  //toggleFullscreen()
                }}
                data-toggle="fullscreen"
              >
                <i className="bx bx-fullscreen" />
              </button>
            </div>

            <NotificationDropdown />

            <ProfileMenu />

            <div className="dropdown d-inline-block">
              <button
                onClick={() => {
                  
                }}
                type="button"
                className="btn header-item noti-icon right-bar-toggle waves-effect"
              >
                <i className="bx bx-cog bx-spin" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}
export default Header;