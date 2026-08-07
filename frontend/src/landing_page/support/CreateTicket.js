import React from "react";

const ticketData = [
  {
    title: "Account Opening",
    icon: "fa-solid fa-circle-plus",
    links: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
  },
  {
    title: "Your Zerodha Account",
    icon: "fa-regular fa-circle-user",
    links: [
      "Your Profile",
      "Account modification",
      "Client Master Report (CMR) and Depository Participant (DP)",
      "Nomination",
      "Transfer and conversion of securities",
    ],
  },
  {
    title: "Kite",
    icon: "fa-regular fa-compass",
    links: [
      "IPO",
      "Trading FAQs",
      "Margin Trading Facility (MTF) and Margins",
      "Charts and orders",
      "Alerts and Nudges",
      "General",
    ],
  },
  {
    title: "Funds",
    icon: "fa-solid fa-indian-rupee-sign",
    links: [
      "Add money",
      "Withdraw money",
      "Add bank accounts",
      "eMandates",
    ],
  },
  {
    title: "Console",
    icon: "fa-regular fa-circle-dot",
    links: [
      "Portfolio",
      "Corporate actions",
      "Funds statement",
      "Reports",
      "Profile",
      "Segments",
    ],
  },
  {
    title: "Coin",
    icon: "fa-regular fa-clock",
    links: [
      "Mutual funds",
      "National Pension Scheme (NPS)",
      "Fixed Deposit (FD)",
      "Features on Coin",
      "Payments and Orders",
      "General",
    ],
  },
];
function CreateTicket() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">
        To create a ticket, select a relevant topic
      </h2>

      <div className="accordion" id="ticketAccordion">
        {ticketData.map((item, index) => (
          <div className="accordion-item mb-3 shadow-sm" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${
                  index !== 0 ? "collapsed" : ""
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
              >
                <i className={`${item.icon} text-primary me-3 fs-4`}></i>
                <strong>{item.title}</strong>
              </button>
            </h2>

            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${
                index === 0 ? "show" : ""
              }`}
              data-bs-parent="#ticketAccordion"
            >
              <div className="accordion-body">
                <ul className="mb-0">
                  {item.links.map((link, i) => (
                    <li key={i} className="mb-3">
                      <a
                        href="/"
                        className="text-decoration-none text-primary"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;