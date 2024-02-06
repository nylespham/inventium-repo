import Row from "./Rows";
import TableHeader from "./TableHeader";

export default function RecordHistory(props: any){
    return (
      <>
      <h2>{props.title}</h2>
        <div className="table-responsive small">
            <table className="table table-striped table-sm">
            <thead>
                {props.headers.map((header: any) => (
                    <TableHeader header={header} />
                ))}
            </thead>
            <tbody>
                <tr>
                {props.data.map((d: Number) => (
                    <Row data={d} />
                ))}
                </tr>
            </tbody>
        </table>
    </div>
      </>
    )
}