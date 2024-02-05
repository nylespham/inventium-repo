import RecordHistory from "../../components/tables/RecordHistory"

export default function Import(){
    return (
        <RecordHistory 
        title="Today's Inventory Imports"
        headers={["Test", "Dump", "Test", "Test", "Test"]}
        data={[1000,2656,34545,4353,5535]}
        />
    )
}