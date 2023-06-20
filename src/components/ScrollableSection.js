import React, { useState } from 'react';
import luffy from './assets/luffy.png';
import zoro from './assets/zoro.png';
import nami from './assets/nami.png'
import usopp from './assets/usopp.png'
import sanji from './assets/sanji.png'
import chopper from './assets/chopper.png'
import '../styles/ScrollableSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown , faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Video from './Video';

const contentData = [
  {
    content:`Luffy, known as Monkey D. Luffy, is the captain of the Straw Hat Pirates. He is a spirited and adventurous young pirate with a dream to become the Pirate King and find the fabled treasure, the One Piece."
    `,
    image: luffy,
  },
  {
    content: `Zoro, or Roronoa Zoro, is a skilled swordsman and a member of the Straw Hat Pirates.`,
    image: zoro,
  },
  {
    content:`Nami, also known as the "Cat Burglar", She is the crew's navigator and an exceptional thief. Nami is highly skilled in cartography and navigation.`,
    image:nami,
  },
  {
    content:`Usopp, also known as Sogeking, is a sniper and a member of the Straw Hat Pirates. He is a skilled marksman and a proficient liar, often exaggerating stories to boost his image.`,
    image:usopp,
  },
  {
    content:`Sanji, also known as "Black Leg" Sanji, is a member of the Straw Hat Pirates. He is the crew's skilled chef and a formidable fighter. `,
    image:sanji,
  },
  {
    content:`Chopper, also known as Tony Tony Chopper, is a reindeer and a member of the Straw Hat Pirates. He consumed the Human-Human Fruit, which grants him the ability to transform into a human-reindeer hybrid. Chopper is incredibly intelligent and serves as the crew's doctor.`,
    image:chopper
  }
  
];

const ScrollableSection = () => {
  const [sectionIndex, setSectionIndex] = useState(0);

  const handleArrowClick = (direction) => {
    let newIndex;
    if (direction === 'up') {
      newIndex = (sectionIndex - 1 + contentData.length) % contentData.length;
    } else if (direction === 'down') {
      newIndex = (sectionIndex + 1) % contentData.length;
    }
    setSectionIndex(newIndex);
  };
  

  const currentSection = contentData[sectionIndex];

  return (
      <div className="scrollable-content">
        <div className='para'>
        <button onClick={() => handleArrowClick('up')}> <FontAwesomeIcon icon={faChevronUp} /></button>
        <p>{currentSection.content}</p>
        <button onClick={() => handleArrowClick('down')}> <FontAwesomeIcon icon={faChevronDown} /></button>
        </div>
       <div className='image'>
       <img className="display" src={currentSection.image} alt="Displayed Image" />
       </div>
       {/* <div className='video'>
        <Video />
       </div> */}
      </div> 
  );
};

export default ScrollableSection;
