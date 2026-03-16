import { useState } from "react";
  const sections = [
    {
      id: "html",
      title: "HTML",
      content: "The HyperText Markup...",
    },
    {
      id: "css",
      title: "CSS",
      content: "Cascading Style Sheets...",
    },
    {
      id: "js",
      title: "JavaScript",
      content: "JavaScript, often...",
    },
  ];
export default function Accordion() {
  const [show, setShow] = useState(null);
  const handleClick = (id) => {
    setShow((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {sections.map((element) => {
        return (
          <div key={element.id}>
            <h4 onClick={() => handleClick(element.id)}>
              {" "}
              {element.title} <span className="accordion-icon" />
            </h4>
            {show === element.id && <p>{element.content}</p>}
          </div>
        );
      })}
    </div>
  );
}
