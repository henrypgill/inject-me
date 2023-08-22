import { DbAccount, DbItem, DbPurchase, DbUser } from "../../core/DbTypes";

type Row = DbAccount | DbUser | DbItem | DbPurchase;

interface OriginalTableProps {
    rows: Row[];
}

export function OriginalTable({ rows }: OriginalTableProps) {
    const keys = Object.keys(rows[0]);

    const tableRows = rows.map((row) => {
        return (
            <tr key={row[keys[0] as keyof typeof row]}>
                {keys.map((key) => (
                    <td key={key}>{row[key as keyof typeof row]}</td>
                ))}
            </tr>
        );
    });

    return (
        <section>
            <table>
                <thead>
                    <tr>
                        {keys.map((key) => (
                            <th key={key}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </table>
        </section>
    );
}
