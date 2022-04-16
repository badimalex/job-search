import React, { FC } from 'react';
import Resume, { Level } from '../types/Resume';

type LevelProps = {
  level: keyof typeof Level;
};

// eslint-disable-next-line react/function-component-definition
const LevelDisplay: FC<LevelProps> = ({ level }) => {
  switch (level) {
    case Level.Senior:
      return <p>Im senior 🦍</p>;

    case Level.Middle:
      return <p>Middle man 🦊</p>;

    default:
      return <p>Jun Jun 🐬</p>;
  }
};

enum CardTypes {
  mastercard,
  visa,
}

const cashType = CardTypes.mastercard;

function MasterCardIco() {
  return <span>💳</span>;
}
function VisaCardIco() {
  return <span>💵</span>;
}

function JobItem({
  name, level, tags, experience
}: Resume) {
  return (
    <div>
      <p>{name}</p>
      <LevelDisplay level={level} />

      {cashType === CardTypes.mastercard ? <MasterCardIco /> : <VisaCardIco />}

      <p>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <span>{tag}</span>
            ,
            {' '}
          </React.Fragment>
        ))}
      </p>

      <input disabled value={experience} />
    </div>
  );
}

export default JobItem;
