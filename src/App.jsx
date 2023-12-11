import { Component } from 'react';

import { Container } from './components/Container/Container';
import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { Notification } from './components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handlerClick = (e) => {
    const option = e.target.id;
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
  });
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const positiveFeedback = Math.floor(good / (good + neutral + bad) * 100);
    return positiveFeedback;
  }

  render() {
    return (
      <Container>
      <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handlerClick} />
      </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/> : <Notification message="There is no feedback"/>}
        </Section>
      </Container>
    )
  }
}



