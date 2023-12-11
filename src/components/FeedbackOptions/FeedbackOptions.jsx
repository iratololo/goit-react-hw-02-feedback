import { FeedbackOption, FeedbackRow } from "./FeedbackOptions.stayled"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
            <FeedbackRow>
                {options.map(item => {
                    return (<FeedbackOption key={item} onClick={onLeaveFeedback} id={item} type='button'>{item}</FeedbackOption>)
                })}
            </FeedbackRow>
        );
}

