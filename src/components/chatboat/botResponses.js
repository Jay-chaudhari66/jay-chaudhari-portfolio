import { portfolio } from "../../data/portfolio";

const getSkills = () =>
  portfolio.skills.categories
    .flatMap((category) =>
      category.skills.map((skill) => skill.name)
    )
    .join(", ");

const getProjects = () =>
  portfolio.projects.items
    .map((project) => `• ${project.title}`)
    .join("\n");

const response = (text, card = null) => ({
  text,
  card,
});

const botResponses = (message) => {
  const text = message.toLowerCase().trim();

  // About
  if (
    text.includes("about") ||
    text.includes("yourself") ||
    text.includes("who are you")
  ) {
    return response(portfolio.about.intro);
  }

  // Skills
  if (
    text.includes("skill") ||
    text.includes("technology") ||
    text.includes("stack")
  ) {
    return response(
      `💻 My Technical Skills\n\n${getSkills()}`
    );
  }

  // Projects
  if (
    text.includes("project") ||
    text.includes("portfolio")
  ) {
    return response(
      `🚀 Here are some of my featured projects:\n\n${getProjects()}`
    );
  }

  // Resume
  if (
    text.includes("resume") ||
    text.includes("cv")
  ) {
    return response(
      "You can download my latest resume below.",
      {
        icon: "resume",
        title: "Resume",
        description: "Latest Resume",
        buttonText: "Download Resume",
        href: portfolio.contact.resume,
      }
    );
  }

  // GitHub
  if (text.includes("github")) {
    return response(
      "Explore all of my repositories below.",
      {
        icon: "github",
        title: "GitHub",
        description: "Open my GitHub profile",
        buttonText: "Open GitHub",
        href: portfolio.social.github,
      }
    );
  }

  // LinkedIn
  if (text.includes("linkedin")) {
    return response(
      "Let's connect on LinkedIn.",
      {
        icon: "linkedin",
        title: "LinkedIn",
        description: "Professional Profile",
        buttonText: "Open LinkedIn",
        href: portfolio.social.linkedin,
      }
    );
  }

  // Contact
  if (
    text.includes("contact") ||
    text.includes("email")
  ) {
    return response(
      "Feel free to reach out anytime.",
      {
        icon: "contact",
        title: "Contact Me",
        description: portfolio.contact.email,
        buttonText: "Send Email",
        href: `mailto:${portfolio.contact.email}`,
      }
    );
  }

  // Internship
  if (
    text.includes("internship") ||
    text.includes("available")
  ) {
    return response(
      "✅ Yes! I'm currently available for internships, freelance work, and exciting development opportunities."
    );
  }

  // Education
  if (
    text.includes("education") ||
    text.includes("college") ||
    text.includes("study")
  ) {
    return response(
      portfolio.education.timeline[0].description
    );
  }

  // Default
  return response(
`🤔 Sorry, I couldn't understand that.

Try asking:

• Tell me about yourself
• Skills
• Projects
• Resume
• GitHub
• LinkedIn
• Contact
• Internship`
  );
};

export default botResponses;