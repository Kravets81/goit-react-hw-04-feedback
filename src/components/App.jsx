import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export function App() {
  const options = ['good', 'neutral', 'bad'];
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const total = goodFeedback + neutralFeedback + badFeedback;

  const handleLeaveFedback = e => {
    e.preventDefault();

    const key = e.target.name;

    switch (key) {
      case 'good':
        setGoodFeedback(goodFeedback + 1);
        break;

      case 'neutral':
        setNeutralFeedback(neutralFeedback + 1);
        break;

      case 'bad':
        setBadFeedback(badFeedback + 1);
        break;

      default:
        alert('Unknown feedback option selected');
        break;
    }
  };

  return (
    <div className="wrapper">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleLeaveFedback}
        />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={goodFeedback}
            total={total}
            neutral={neutralFeedback}
            bad={badFeedback}
            positivePercentage={
              total ? Math.ceil((goodFeedback / total) * 100) : 0
            }
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
