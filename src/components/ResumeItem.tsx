import React, { FC } from "react";
import Resume, { Level } from "../types/Resume";

type LevelProps = {
  level: keyof typeof Level;
};

const LevelDisplay: FC<LevelProps> = ({ level }) => {
  switch (level) {
    case Level.Senior:
      return <p>I'm senior 🦍</p>;

    case Level.Middle:
      return <p>Middle man 🦊</p>;

    default:
      return <p>Jun Jun 🐬</p>;
  }
};

enum CardTypes {
  mastercard,
  visa
}

const cashType = CardTypes.mastercard;

const MasterCardIco = () => <span>💳</span>;
const VisaCardIco = () => <span>💵</span>;

const JobItem: FC<Resume> = ({ name, level, tags, experience }) => {
  return (
    <div>
      <p>{name}</p>
      <LevelDisplay level={level} />

      {cashType === CardTypes.mastercard ? <MasterCardIco /> : <VisaCardIco />}

      <p>
        {tags.map(tag => (
          <React.Fragment key={tag}>
            <span>{tag}</span>,{" "}
          </React.Fragment>
        ))}
      </p>

      <input disabled value={experience} />
    </div>
  );
};

export default JobItem;
