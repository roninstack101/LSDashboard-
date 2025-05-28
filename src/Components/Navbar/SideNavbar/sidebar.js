import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faSignOutAlt,
  faHouse,
  faInfoCircle,
  faFileInvoiceDollar,
  faFileAlt,
  faFileSignature,
  faFile,
  faCogs,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // Track opened submenu
  const location = useLocation();

  const toggleSidebar = (closeOnly = false) => {
    setIsOpen((prev) => !prev);

    if (!closeOnly) {
      setActiveMenu(null); // Sirf jab manually toggle karte hain (menu icon se)
    }
  };

  const toggleSubMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };
  const handleSubmenuLinkClick = () => {
    setIsOpen(false); // Just close sidebar
    // Don't reset activeMenu
  };
  return (
    <div className="layout-container">
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="company-logo">
          <div className="company-image">
            <img src="/image/LARVASOFT-TECH-LLP.jpeg" alt="Company Logo" />
          </div>
          <h2>Larvasoft Tech LLP</h2>
        </div>

        <ul className="menu">
          <li>
            <Link
              to="/"
              onClick={toggleSidebar}
              className={location.pathname === "/" ? "active" : ""}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/super-stocking"
              onClick={toggleSidebar}
              className={
                location.pathname === "/super-stocking" ? "active" : ""
              }
            >
              Superstocking
            </Link>
          </li>
          <li>
            <Link
              to="/dealer"
              onClick={toggleSidebar}
              className={location.pathname === "/dealer" ? "active" : ""}
            >
              Dealer
            </Link>
          </li>
          <li>
            <Link
              to="/retailer"
              onClick={toggleSidebar}
              className={location.pathname === "/retailer" ? "active" : ""}
            >
              Retailer
            </Link>
          </li>
          <li>
            <Link
              to="/analytics"
              onClick={toggleSidebar}
              className={location.pathname === "/analytics" ? "active" : ""}
            >
              Analytics
            </Link>
          </li>
          <li>
            <Link
              to="/ffqs"
              onClick={toggleSidebar}
              className={location.pathname === "/ffqs" ? "active" : ""}
            >
              FFQS
            </Link>
          </li>
          <li>
            <Link
              to="/billgenerator"
              onClick={toggleSidebar}
              className={location.pathname === "/billgenerator" ? "active" : ""}
            >
              Bill Generator
            </Link>
          </li>
          <li>
            <Link
              to="/transactionhistory"
              onClick={toggleSidebar}
              className={
                location.pathname === "/transactionhistory" ? "active" : ""
              }
            >
              Transaction History
            </Link>
          </li>
          <li>
            <Link
              to="/loans"
              onClick={toggleSidebar}
              className={location.pathname === "/loans" ? "active" : ""}
            >
              Loans
            </Link>
          </li>

          {/* INVOICE BILL  */}
          <li>
            <div
              className={`menu-item ${
                activeMenu === "invoice" ? "active" : ""
              }`}
              onClick={() => toggleSubMenu("invoice")}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <FontAwesomeIcon
                  icon={faFileInvoiceDollar}
                  style={{ marginRight: "8px" }}
                />
                Invoice
              </div>
              <span className="icon-space">
                <FontAwesomeIcon
                  icon={activeMenu === "invoice" ? faChevronUp : faChevronDown}
                />
              </span>
            </div>
            {activeMenu === "invoice" && (
              <ul className="submenu">
                <li>
                  <Link
                    to="/gst"
                    onClick={handleSubmenuLinkClick}
                    className={location.pathname === "/gst" ? "active" : ""}
                  >
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      style={{ marginRight: "8px" }}
                    />
                    GST
                  </Link>
                </li>
                <li>
                  <Link
                    to="/lut"
                    onClick={handleSubmenuLinkClick}
                    className={location.pathname === "/lut" ? "active" : ""}
                  >
                    <FontAwesomeIcon
                      icon={faFileSignature}
                      style={{ marginRight: "8px" }}
                    />
                    LUT
                  </Link>
                </li>
                <li>
                  <Link
                    to="/no-gst"
                    onClick={handleSubmenuLinkClick}
                    className={location.pathname === "/no-gst" ? "active" : ""}
                  >
                    <FontAwesomeIcon
                      icon={faFile}
                      style={{ marginRight: "8px" }}
                    />
                    NO-GST
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/services"
              onClick={toggleSidebar}
              className={location.pathname === "/services" ? "active" : ""}
            >
              <FontAwesomeIcon icon={faCogs} style={{ marginRight: "8px" }} />
              Services
            </Link>
          </li>
        </ul>

        <div className="logout-section">
          <Link to="/logout" className="logout-link" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
            Logout
          </Link>
        </div>
      </div>

      <button
        className={`toggle-btn ${isOpen ? "shifted" : ""}`}
        onClick={toggleSidebar}
      >
        {isOpen ? "✖" : "☰"}
      </button>
    </div>
  );
};

export default Sidebar;
