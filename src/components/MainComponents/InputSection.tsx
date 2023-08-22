import { useState } from "react";
import axios from "axios";
import { DbQueryResponse, DbResult } from "../../core/DbTypes";
import { fetchAllData } from "../../core/DbUtils";

// @ts-ignore
interface InputSectionProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setResult: React.Dispatch<any>;
    setOriginalData: React.Dispatch<React.SetStateAction<DbResult | undefined>>;
    addQuery(query: string): void;
}

// @ts-ignore
export function InputSection({
    setResult,
    setOriginalData,
    addQuery,
}: InputSectionProps): JSX.Element {
    const [freeQuery, setFreeQuery] = useState("SELECT * FROM users;");
    const [interpolatedQuery, setInterpolatedQuery] = useState("");
    const [restrictedQuery, setRestrictedQuery] = useState("");

    async function resetAndLoadDatabase() {
        await axios.get("https://inject-me-server.onrender.com/reset/database");
        const newOriginalData = await fetchAllData();
        setOriginalData(newOriginalData);
    }

    const url = "https://inject-me-server.onrender.com";
    // const url = "http://localhost:4000";

    const handleFreeQueryClick = async () => {
        if (freeQuery.length > 0) {
            const response = await axios
                .get<DbQueryResponse>(url + `/free-query/${freeQuery}`)
                .then((response) => response.data);
            setResult(response.data);
            addQuery(response.query);
        }
    };
    const handleInterpolatedQueryClick = async () => {
        if (interpolatedQuery.length > 0) {
            const response = await axios
                .get<DbQueryResponse>(
                    url + `/interpolated-query/${interpolatedQuery}`
                )
                .then((response) => response.data);
            setResult(response.data);
            addQuery(response.query);
        }
    };
    const handleRestrictedQueryClick = async () => {
        if (restrictedQuery.length > 0) {
            const response = await axios
                .get<DbQueryResponse>(
                    url + `/restricted-query/${restrictedQuery}`
                )
                .then((response) => response.data);
            setResult(response.data);
            addQuery(response.query);
        }
    };
    const handleResetDatabaseClick = async () => resetAndLoadDatabase();

    return (
        <div className="input-section-container">
            <div className="input-container">
                <h3>Free Query</h3>
                <p>
                    Use this box to directly submit sql queries to database with
                    no interference
                </p>
                <input
                    value={freeQuery}
                    onChange={(e) => setFreeQuery(e.target.value)}
                ></input>
                <button onClick={() => handleFreeQueryClick()}>Enter</button>
            </div>
            <div className="input-container">
                <h3>String Interpolated Search</h3>
                <p>
                    The value in this box is used to query the database in some
                    way, but it is interpolated into the query
                </p>
                <input
                    value={interpolatedQuery}
                    onChange={(e) => setInterpolatedQuery(e.target.value)}
                ></input>
                <button onClick={() => handleInterpolatedQueryClick()}>
                    Enter
                </button>
            </div>
            <div className="input-container">
                <h3>Restricted Search</h3>
                <p>Searches in this box use express' built argument parsing</p>
                <input
                    value={restrictedQuery}
                    onChange={(e) => setRestrictedQuery(e.target.value)}
                ></input>
                <button onClick={() => handleRestrictedQueryClick()}>
                    Enter
                </button>
            </div>
            <div className="input-container">
                <h3>Reset Database</h3>
                <p>Searches in this box use express' built argument parsing</p>
                <button onClick={() => handleResetDatabaseClick()}>
                    Reset Database
                </button>
            </div>
        </div>
    );
}
