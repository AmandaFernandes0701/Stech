import axios from "axios";
import { useState, useEffect } from "react";

export const useCarouselContent = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = response.data;
        const carouselContent = users.slice(0, 4).map((user, index) => {
          const titles = [
            "Great Place to Work",
            "A Company that Cares",
            "Innovative and Inclusive Workplace",
            "Transformative Work Environment",
          ];
          const subtitles = [
            "Join a company that values you",
            "Empowering Employees and Driving Innovation",
            "Where Creativity and Diversity Thrive",
            "Grow, Innovate, Lead",
          ];
          const texts = [
            [
              "Working at Stech has been an amazing experience.",
              "The team is supportive, and the environment is innovative.",
              "I’ve learned so much and look forward to many more years here.",
            ],
            [
              "At TechCorp, I feel valued as an individual and a team member.",
              "The leadership is always open to new ideas, and the culture is amazing.",
              "It’s inspiring to be part of a company that’s shaping the future.",
            ],
            [
              "Working at GlobalTech has been a dream come true.",
              "I am surrounded by talented people who are passionate about what they do.",
              "The inclusive culture and constant innovation make it an exciting place to work.",
            ],
            [
              "InnovateX has given me the opportunity to grow professionally and personally.",
              "The team is collaborative, and the leadership encourages bold ideas.",
              "It’s a place where creativity is celebrated and real-world solutions are built.",
            ],
          ];
          return {
            title: titles[index],
            subtitle: subtitles[index],
            text: texts[index],
            name: user.name,
            position: user.company.bs,
            image: `https://i.pravatar.cc/150?img=${user.id}`,
          };
        });
        setContent(carouselContent);
      } catch (error) {
        console.error("Error fetching carousel content:", error);
      }
    };

    fetchContent();
  }, []);

  return content;
};
