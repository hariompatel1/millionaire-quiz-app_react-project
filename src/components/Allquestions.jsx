import { useEffect } from "react";



const Allquestions = ({setData}) => {
    const data = [
        {
          id: 1,
          question: "Rolex is a company that specializes in what type of product?",
          answers: [
            {
              text: "Phone",
              correct: false,
            },
            {
              text: "Watches",
              correct: true,
            },
            {
              text: "Food",
              correct: false,
            },
            {
              text: "Cosmetic",
              correct: false,
            },
          ],
        },
        {
          id: 2,
          question: "When did the website `Facebook` launch?",
          answers: [
            {
              text: "2004",
              correct: true,
            },
            {
              text: "2005",
              correct: false,
            },
            {
              text: "2006",
              correct: false,
            },
            {
              text: "2007",
              correct: false,
            },
          ],
        },
        {
          id: 3,
          question: "Who played the character of harry potter in movie?",
          answers: [
            {
              text: "Johnny Deep",
              correct: false,
            },
            {
              text: "Leonardo Di Caprio",
              correct: false,
            },
            {
              text: "Denzel Washington",
              correct: false,
            },
            {
              text: "Daniel Red Cliff",
              correct: true,
            },
          ],
        },
        {
          id: 4,
          question: "Who is the  Prime Minister of India?",
          answers: [
            {
              text: "Yogi Adityanath",
              correct: false,
            },
            {
              text: "Amit shah",
              correct: false,
            },
            {
              text: "Rahul Gandhi",
              correct: false,
            },
            {
              text: "Narendra Modi",
              correct: true,
            },
          ],
        },
        {
          id: 5,
          question: "Who is the Home minister of india",
          answers: [
            {
              text: "Rahul Gandhi",
              correct: false,
            },
            {
              text: "Narendra Modi",
              correct: false,
            },
            {
              text: "Yogi Adityanath",
              correct: false,
            },
            {
              text: "Amit shah",
              correct: true,
            },
          ],
        },
        {
          id: 6,
          question: "Humayun was born in the year ___________.?",
          answers: [
            {
              text: "1608",
              correct: false,
            },
            {
              text: "1508",
              correct: true,
            },
            {
              text: " 1708",
              correct: false,
            },
            {
              text: "1808",
              correct: false,
            },
          ],
        },
        {
          id: 7,
          question: "Who Invented the 3-D printer?",
          answers: [
            {
              text: " Nick Holonyak",
              correct: false,
            },
            {
              text: "Elias Howe",
              correct: false,
            },
            {
              text: "Chuck Hull",
              correct: true,
            },
            {
              text: "Christiaan Huygens",
              correct: false,
            },
          ],
        },
        {
          id: 8,
          question: "The first pico satellite of India is- ?",
          answers: [
            {
              text: "GSAT-4",
              correct: false,
            },
            {
              text: " ANUSAT",
              correct: false,
            },
            {
              text: "INSAT",
              correct: false,
            },
            {
              text: "STUDSAT",
              correct: true,
            },
          ],
        },
        {
          id: 9,
          question: " Which of the following is known as the Diamond City of India?",
          answers: [
            {
              text: "Mumbai",
              correct: false,
            },
            {
              text: "Jaipur",
              correct: false,
            },
            {
              text: "Panna",
              correct: true,
            },
            {
              text: "Surat",
              correct: false,
            },
          ],
        },
        {
          id: 10,
          question: "In which year Forest Conservation Act was passed?",
          answers: [
            {
              text: "1980",
              correct: true,
            },
            {
              text: "1988",
              correct: false,
            },
            {
              text: "1986",
              correct: false,
            },
            {
              text: "1990",
              correct: false,
            },
          ],
        },
        {
          id: 11,
          question: "Which one of the following river flows between Vindhyan and Satpura ranges?",
          answers: [
            {
              text: "Narmada",
              correct: true,
            },
            {
              text: "Mahanadi",
              correct: false,
            },
            {
              text: "Son",
              correct: false,
            },
            {
              text: "Netravati",
              correct: false,
            },
          ],
        },
        {
          id: 12,
          question: "Who among the following wrote Sanskrit grammar?",
          answers: [
            {
              text: "Kalidasa",
              correct: false,
            },
            {
              text: "Charak",
              correct: false,
            },
            {
              text: "Panini",
              correct: true,
            },
            {
              text: "Aryabhatt",
              correct: false,
            },
          ],
        },
        {
          id: 13,
          question: "The metal whose salts are sensitive to light is?",
          answers: [
            {
              text: "Zinc",
              correct: false,
            },
            {
              text: "Silver",
              correct: true,
            },
            {
              text: "Copper",
              correct: false,
            },
            {
              text: "Aluminum",
              correct: false,
            },
          ],
        },
        {
          id: 14,
          question: "MS-Word is an example of ",
          answers: [
            {
              text: "An operating system",
              correct: false,
            },
            {
              text: "A processing device",
              correct: false,
            },
            {
              text: "Application software",
              correct: true,
            },
            {
              text: "An input device",
              correct: false,
            },
          ],
        },
        {
          id: 15,
          question: "Ctrl, Shift and Alt are called .......... keys.",
          answers: [
            {
              text: "modifier",
              correct: true,
            },
            {
              text: "function",
              correct: false,
            },
            {
              text: "alphanumeric",
              correct: false,
            },
            {
              text: "adjustment",
              correct: false,
            },
          ],
        },
      ];

      useEffect(() => {
        setData(data);
      }, [setData]);
  return (
    <>
    </>
  )
}

export default Allquestions