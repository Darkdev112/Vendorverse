export default function manageOrder({params} : {params : {oid : string}}) {
    const {oid} = params
    return (
        <div>
            <p>{`Manage Order ${oid}`}</p>
        </div>
    )
}