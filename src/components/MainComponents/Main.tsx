import { useEffect, useState } from "react";
import { InputSection } from "./InputSection";
// @ts-ignore
import {
    DbAccount,
    DbItem,
    DbPurchase,
    DbUser,
    DbResult,
} from "../../core/DbTypes";
import { fetchAllData } from "../../core/DbUtils";
import { OriginalDataSection } from "./OriginalDataSection";
import { ResultSection } from "./ResultSection";

export function Main(): JSX.Element {
    const [originalData, setOriginalData] = useState<DbResult>();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [result, setResult] = useState<any>({});
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [queryHistory, setQueryHistory] = useState<any[]>([]);

    async function resetAndGetInitData() {
        const data = await fetchAllData();
        return data;
    }

    useEffect(() => {
        resetAndGetInitData().then((data) => setOriginalData(data));
    }, []);

    function addQuery(query: string) {
        setQueryHistory((prev) => [...prev, query]);
    }

    return (
        <main>
            <section className="input-and-results-container">
                <InputSection
                    addQuery={(q) => addQuery(q)}
                    setOriginalData={(d) => setOriginalData(d)}
                    result={result}
                    setResult={(r) => setResult(r)}
                />
                <ResultSection result={result} queryHistory={queryHistory} />
            </section>
            <section>
                {originalData ? (
                    <OriginalDataSection originalData={originalData} />
                ) : (
                    <h2>loading</h2>
                )}
            </section>
        </main>
    );
}
