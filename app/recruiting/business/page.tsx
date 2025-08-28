import React from "react";
import {
  APPLICATIONS_OPEN,
  APPLICATION_FORM_LINK,
  BUSINESS_APPLICATIONS_OPEN,
  BUSINESS_APPLICATION_FORM_LINK,
} from "../constants";

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-charcoal text-softWhite py-12 px-4 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-6 text-ashGold">Business Subteam</h1>
      <div className="max-w-2xl text-center mb-12">
        <p className="mb-6 text-xl">
          The Business team is the engine behind our outreach, branding, and
          operations. We connect with sponsors, design our public image, engage
          our community, and plan events that keep the team thriving. If you
          want to make a real impact on the team's growth and visibility, this
          is the place for you!
        </p>
        <p className="mb-6 text-xl">
          <strong>Sponsorship Outreach</strong>
          <br />
          Our sponsorship team builds and maintains relationships with industry
          partners and donors. You'll help craft proposals, reach out to
          potential sponsors, and ensure our team has the resources to succeed.
        </p>
        <p className="mb-6 text-xl">
          <strong>Graphics Design</strong>
          <br />
          The graphics team shapes our visual identity. You'll design
          promotional materials, event posters, social media graphics, and
          more—helping us stand out and communicate our mission.
        </p>
        <p className="mb-6 text-xl">
          <strong>Social Media Management & Engagement</strong>
          <br />
          Our social media team manages our online presence, creates engaging
          content, and interacts with our audience across platforms. You'll help
          grow our following and keep our supporters up to date.
        </p>
        <p className="mb-6 text-xl">
          <strong>Event Planning</strong>
          <br />
          The event planning team organizes team events, outreach activities,
          and sponsor meetings. You'll coordinate logistics, promote events, and
          ensure everything runs smoothly.
        </p>
      </div>
      <div className="w-full max-w-xl bg-black bg-opacity-60 rounded-lg p-8 mt-4">
        <h2 className="text-3xl font-semibold text-ashGold mb-4">Roles</h2>
        <ul className="list-disc list-inside text-left text-xl text-softWhite">
          <li>Sponsorship Coordinator</li>
          <li>Graphic Designer</li>
          <li>Social Media Manager</li>
          <li>Event Planner</li>
          <li>Marketing & Outreach</li>
        </ul>
      </div>
      <div className="flex justify-center mt-12">
        {APPLICATIONS_OPEN ? (
          <a
            href={APPLICATION_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ashGold text-charcoal font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-400 transition-colors text-xl"
          >
            Apply Now
          </a>
        ) : (
          <button
            disabled
            className="bg-gray-500 text-gray-300 font-bold px-8 py-4 rounded-lg shadow-lg text-xl cursor-not-allowed"
          >
            Applications Opening Soon
          </button>
        )}
      </div>
    </div>
  );
}
