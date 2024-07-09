import React from "react";
import HomeCards from "@/components/HomeCards";
import { BackgroundBeams } from "@/components/BackgroundBeams";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Todo List",
      link: "todo-list",
      description:
        "Simple Todo list application where users can add, edit, and delete tasks",
    },
    {
      id: 2,
      title: "Weather App",
      link: "weather-app",
      description:
        "Develop a weather application that fetches weather data from an API and displays it to the user",
    },
    {
      id: 3,
      title: "Pagination Component",
      link: "pagination-component",
      description:
        "Design a pagination component that handles navigation between pages of data",
    },
    {
      id: 4,
      title: "Login Form",
      link: "login-form",
      description:
        "Build a login form with validation for email and password fields",
    },
    {
      id: 5,
      title: "Countdown Timer",
      link: "countdown-timer",
      description:
        "Develop a countdown timer component that starts from a specified time and decrements until it reaches zero",
    },
    {
      id: 6,
      title: "Modal Component",
      link: "modal-component",
      description:
        "Design a modal component that can be toggled open and closed",
    },
    {
      id: 7,
      title: "Drag and Drop",
      link: "drag-and-drop",
      description:
        "Develop a feature that allows users to drag and drop items within a list",
    },
    {
      id: 8,
      title: "Chat Application",
      link: "chat-application",
      description:
        "Develop a real-time chat application using WebSockets or a library like Socket.io",
    },
    {
      id: 9,
      title: "Dropdown Component",
      link: "dropdown-component",
      description:
        "Design a dropdown component with options that can be selected by the user",
    },
    {
      id: 10,
      title: "Form Validation",
      link: "form-validation",
      description:
        "Develop a form with validation for various fields such as email, password, and phone number",
    },
    {
      id: 11,
      title: "Carousel Component",
      link: "carousel-component",
      description:
        "Design a carousel component that displays a slideshow of images or content",
    },
    {
      id: 12,
      title: "Responsive Layout",
      link: "responsive-layout",
      description:
        "Develop a responsive layout that adjusts based on the screen size and orientation",
    },
    {
      id: 13,
      title: "Redux Store",
      link: "redux-store",
      description:
        "Set up a Redux store and integrate it with a React application to manage state",
    },
    {
      id: 14,
      title: "Infinite Scroll Component",
      link: "infinite-scroll-component",
      description:
        "Develop a component that loads more data as the user scrolls down the page",
    },
    {
      id: 15,
      title: "Quiz Application",
      link: "quiz-application",
      description:
        "Develop a quiz application where users can answer multiple-choice questions and see their score at the end",
    },
  ];

  return (
    <div className="bg-neutral-950 min-h-screen flex justify-center items-center py-10">
      <div className="flex flex-col gap-9 w-full max-w-7xl px-4">
        <section className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {projects.map(({ id, title, link, description }) => (
              <HomeCards
                key={id}
                title={title}
                project_link={link}
                description={description}
              />
            ))}
          </div>
        </section>
      </div>
      <BackgroundBeams />
    </div>
  );
}
