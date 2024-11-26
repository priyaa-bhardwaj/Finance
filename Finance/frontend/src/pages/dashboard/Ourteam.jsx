import React from "react";
import "./MeetTheTeam.css";

const teamMembers = [
  {
    name: "Amber Grace W.",
    title: "Chief Executive Officer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dolor et mauris gravida molestie.",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Khaled Steward",
    title: "Chief Operations Officer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dolor et mauris gravida molestie.",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Michael Joseph",
    title: "Vice President of Sales",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dolor et mauris gravida molestie.",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Yoshira Moshibe",
    title: "Human Resource Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dolor et mauris gravida molestie.",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
];

function Ourteam() {
  return (
    <div className="main">
      <h1 className="responsive-heading">Meet the Team</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-title">{member.title}</p>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ourteam;
