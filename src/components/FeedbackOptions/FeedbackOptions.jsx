
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
            <div>
                {options.map(item => {
                    return (<button key={item} onClick={onLeaveFeedback} id={item} type='button'>{item}</button>)
                })}
            </div>
        );
}

