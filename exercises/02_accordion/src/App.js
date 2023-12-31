import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
      <AccordionX data={faqs} />
      <AccordionX2 data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          key={index}
          num={index + 1}
          title={faq.title}
          text={faq.text}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`item ${isOpen ? "open" : ""}`}
    >
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

function AccordionX({ data }) {
  const [currentItem, setCurrentItem] = useState(null);

  function selectItem(num) {
    setCurrentItem(num !== currentItem ? num : null);
  }

  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItemX
          key={index}
          num={index + 1}
          title={faq.title}
          text={faq.text}
          selectItem={selectItem}
          currentItem={currentItem}
        />
      ))}
    </div>
  );
}

function AccordionItemX({ num, title, text, selectItem, currentItem }) {
  return (
    <div
      onClick={() => selectItem(num)}
      className={`item ${currentItem === num ? "open" : ""}`}
    >
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{currentItem === num ? "-" : "+"}</p>
      <div
        className="content-box"
        style={currentItem === num ? {} : { display: "none" }}
      >
        {text}
      </div>
    </div>
  );
}

function AccordionX2({ data }) {
  const [currOpen, setCurrOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItemX2
          key={index}
          num={index + 1}
          title={faq.title}
          currOpen={currOpen}
          onOpen={setCurrOpen}
        >
          {faq.text}
        </AccordionItemX2>
      ))}
      <AccordionItemX2
        currOpen={currOpen}
        onOpen={setCurrOpen}
        title="Test 1"
        num={22}
        key="test 1"
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusuable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItemX2>
    </div>
  );
}

function AccordionItemX2({ num, title, currOpen, onOpen, children }) {
  const isOpen = num === currOpen;

  return (
    <div
      onClick={() => onOpen(isOpen ? null : num)}
      className={`item ${isOpen ? "open" : ""}`}
    >
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
