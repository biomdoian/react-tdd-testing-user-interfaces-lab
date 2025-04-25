import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm Your Name`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm Ian Biomdo/i,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of myself with alt text", () => {
    render(<App />);
  
    const profileImage = screen.getByRole("img", {
      name: /a picture of/i,
    });
  
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute("src"); 
    expect(profileImage).toHaveAttribute("alt", expect.stringContaining("picture of")); 
  });

  test("displays a second-level heading with the text `About Me`", () => {
    render(<App />);
  
    const aboutMeHeading = screen.getByRole("heading", {
      name: /about me/i,
      level: 2,
    });
  
    expect(aboutMeHeading).toBeInTheDocument();
  });

  test("displays a paragraph for my biography", () => {
    render(<App />);
  
    const biographyParagraph = screen.getByText(/a little bit about me and my journey as a developer./i);
  
    expect(biographyParagraph).toBeInTheDocument();
  });

  test("displays a link to my GitHub profile", () => {
    render(<App />);
  
    const githubLink = screen.getByRole("link", { name: /github/i });
  
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/dashboard"); 
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("displays a link to my LinkedIn profile", () => {
    render(<App />);
  
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/feed/"); 
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
  });