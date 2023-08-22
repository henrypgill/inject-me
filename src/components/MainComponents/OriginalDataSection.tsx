import { DbResult } from "../../core/DbTypes";
import { OriginalTable } from "./OriginalDataTable";

interface OriginalDataSectionProps {
    originalData: DbResult;
}

/*
<h2>Users</h2>
<h2>Items</h2>
<h2>Accounts</h2>
<h2>Purchases</h2>
*/

export function OriginalDataSection({
    originalData,
}: OriginalDataSectionProps) {
    return (
        <div className="original-data-container">
            {originalData.users && (
                <div className="original-data-table-container">
                    <OriginalTable rows={originalData.users} />
                </div>
            )}
            {originalData.items && (
                <div className="original-data-table-container">
                    <OriginalTable rows={originalData.items} />
                </div>
            )}
            {originalData.accounts && (
                <div className="original-data-table-container">
                    <OriginalTable rows={originalData.accounts} />
                </div>
            )}
            {originalData.purchases && (
                <div className="original-data-table-container">
                    <OriginalTable rows={originalData.purchases} />
                </div>
            )}
        </div>
    );
}
