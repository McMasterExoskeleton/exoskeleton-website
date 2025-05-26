import React from "react";

const FacultySupport = [
  {
    name: "Dr. Ratnasingham (Thamas) Tharmarasa",
    link: "https://www.eng.mcmaster.ca/ece/faculty/dr-ratnasingham-thamas-tharmarasa/",
    headshot: "/headshots/Ratnasingham_Tharmarasa_headshot.jpg",
  },
  {
    name: "Dr. Thomas Doyle",
    link: "https://experts.mcmaster.ca/display/doylet",
    headshot: "/headshots/Doyle_headshot.jpg",
  },
  {
    name: "Dr. Shahrukh Athar",
    link: "https://www.eng.mcmaster.ca/ece/faculty/dr-shahrukh-athar/",
    headshot: "/headshots/Shahrukh_Athar_headshot.jpg",
  },
  {
    name: "Dr. Yaser Haddara",
    link: "https://experts.mcmaster.ca/display/yaser",
    headshot: "/headshots/Yaser_Haddara_headshot_cropped2.jpg",
  },
];

function Faculty() {
  return (
    <div className="min-h-screen flex flex-col bg-jet text-softWhite py-12">
      <h1 className="text-5xl font-bold mb-12 text-center">
        Faculty Support
        <span className="block w-64 h-1 bg-ashGold mx-auto mt-2"></span>
      </h1>
      <h3 className="text-xl font-bold mb-12 text-center max-w-1/2 mx-auto">
        We are deeply grateful to the McMaster Faculty members who have
        generously offered their mentorship and support to our team.
      </h3>

      <div className="flex flex-col items-center space-y-8 w-3/4 mx-auto">
        {FacultySupport.map((faculty, index) => (
          <div
            key={index}
            className="bg-charcoal p-6 rounded-lg w-full flex items-center space-x-6"
          >
            <img
              src={faculty.headshot}
              alt={faculty.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-ashGold"
            />
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold">{faculty.name}</h2>
              <a
                href={faculty.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-400 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
