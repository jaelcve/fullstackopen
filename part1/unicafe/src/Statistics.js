import Statistic from './Statistic'

const Statistics = ({ statsTitle, statsValue}) => {
  
    const {good, neutral, bad} = statsValue;

    const calculateTotal = () => good + neutral + bad;

    const calculateAverage = () => calculateTotal() ? (good - bad) / calculateTotal() : 0;

    const calculatePositive = () => calculateTotal() ? `${good / calculateTotal() * 100} %` : 0;

    if(calculateTotal() === 0) {
        return <div>No feedback given</div>
    }
    return (
        <div>
            <Statistic text={statsTitle.good} value={statsValue.good} />
            <Statistic text={statsTitle.neutral} value={statsValue.neutral} />
            <Statistic text={statsTitle.bad} value={statsValue.bad} />
            <Statistic text={statsTitle.all} value={calculateTotal()} />
            <Statistic text={statsTitle.average} value={calculateAverage()} />
            <Statistic text={statsTitle.positive} value={calculatePositive()} />
        </div>
    )
}

export default Statistics