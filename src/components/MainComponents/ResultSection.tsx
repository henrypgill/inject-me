interface ResultSectionProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    result: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    queryHistory: any[];
}

export function ResultSection({
    result,
    queryHistory,
}: ResultSectionProps): JSX.Element {
    return (
        <div className="result-and-history-container">
            <div className="result-container">
                <code>{JSON.stringify(result)}</code>
            </div>
            <div className="history-container">
                {queryHistory.map((query, i = 0) => {
                    i++;
                    return <code key={i}>{query}</code>;
                })}
            </div>
        </div>
    );
}
