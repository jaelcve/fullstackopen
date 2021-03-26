const Vote = ({ vote }) => {
    if (vote === undefined) {
        return (
            <div>
                has no votes
            </div>
        )
    } else if (vote === 1) {
        return (
            <div>
                has {vote} vote
            </div>
        )
    } else {
        return (
            <div>
                has {vote} votes
            </div>
        )
    }
}

export default Vote