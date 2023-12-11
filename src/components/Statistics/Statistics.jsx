import {StatisticItem, StatisticResult} from "./Statistics.stayled"

export const Statistics = ({ good, neutral,bad, total, positivePercentage  }) => {
        return (
            <ul>
                <StatisticItem>Good: {good}</StatisticItem>
                <StatisticItem>Neutral: {neutral}</StatisticItem>
                <StatisticItem>Bad: {bad}</StatisticItem>
                <StatisticResult>Total: {total}</StatisticResult>
                <StatisticResult>Positive feedback: {positivePercentage}%</StatisticResult>
            </ul>
        );
}
