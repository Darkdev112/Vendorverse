export interface orderRetailerData{
    _id : string,
    product_name : string,
    product_quantity : number,
    status : "new" | "rejected" | "pending" | "completed",
    has_paid : boolean,
    delivery : Record<"status","new" | "dispatch" | "completed">,
    from : string,
    fromSelect : string,
    for : string,
    forSelect : string,
    createdAt : string,
    updatedAt : string,
}

// const orderData : orderRetailerData[]= [
//     {
//         _id: "661fc858f4a5db81b3821635",
//         product_name: "Item1",
//         product_quantity: 3,
//         status: "new",
//         has_paid: false,
//         delivery: {
//           status: "new"
//         },
//         from: "65352f3278998e2f73d1b0f1",
//         fromSelect: "WorkspaceD",
//         for: "653531a678998e2f73d1b130",
//         forSelect: "WorkspaceR",
//         createdAt: new Date("2024-04-17T13:02:16.989Z"),
//         updatedAt: new Date("2024-04-17T13:02:16.989Z")
//     },
//     {
//         _id: "661fc858f4a5db81b3821636",
//         product_name: "Item2",
//         product_quantity: 4,
//         status: "new",
//         has_paid: false,
//         delivery: {
//           status: "new"
//         },
//         from: "65352f3278998e2f73d1b900",
//         fromSelect: "WorkspaceD",
//         for: "653531a678998e2f73d1b130",
//         forSelect: "WorkspaceR",
//         createdAt: new Date("2024-04-18T13:02:16.989Z"),
//         updatedAt: new Date("2024-04-18T13:02:16.989Z")
//     },
//     {
//         _id: "661fc858f4a5db81b3821637",
//         product_name: "Item3",
//         product_quantity: 5,
//         status: "new",
//         has_paid: false,
//         delivery: {
//           status: "new"
//         },
//         from: "65352f3278998e2f73d1b0f1",
//         fromSelect: "WorkspaceD",
//         for: "653531a678998e2f73d1b130",
//         forSelect: "WorkspaceR",
//         createdAt: new Date("2024-04-19T13:02:16.989Z"),
//         updatedAt: new Date("2024-04-19T13:02:16.989Z")
//     },
//     {
//         _id: "661fc858f4a5db81b3821638",
//         product_name: "Item4",
//         product_quantity: 6,
//         status: "rejected",
//         has_paid: false,
//         delivery: {
//           status: "new"
//         },
//         from: "65352f3278998e2f73d1b0f1",
//         fromSelect: "WorkspaceD",
//         for: "653531a678998e2f73d1b130",
//         forSelect: "WorkspaceR",
//         createdAt: new Date("2024-04-20T13:02:16.989Z"),
//         updatedAt: new Date("2024-04-20T13:02:16.989Z")
//     },
//     {
//         _id: "661fc858f4a5db81b3821639",
//         product_name: "Item5",
//         product_quantity: 4,
//         status: "new",
//         has_paid: false,
//         delivery: {
//           status: "new"
//         },
//         from: "65352f3278998e2f73d1b0f1",
//         fromSelect: "WorkspaceD",
//         for: "653531a678998e2f73d1b130",
//         forSelect: "WorkspaceR",
//         createdAt: new Date("2024-04-21T13:02:16.989Z"),
//         updatedAt: new Date("2024-04-21T13:02:16.989Z")
//     },
//     {
//         _id: "661fc858f4a5db81b3821630",
//         product_name: "Item6",
//         product_quantity: 10,
//         status: "completed",
//         has_paid: false,
//         delivery: {
//           status: "new"
//         },
//         from: "65352f3278998e2f73d1b0f1",
//         fromSelect: "WorkspaceD",
//         for: "653531a678998e2f73d1b130",
//         forSelect: "WorkspaceR",
//         createdAt: new Date("2024-04-22T13:02:16.989Z"),
//         updatedAt: new Date("2024-04-22T13:02:16.989Z")
//     },
//     {
//         _id: "661fc858f4a5db81b3821611",
//         product_name: "Call1",
//         product_quantity: 8,
//         status: "pending",
//         has_paid: false,
//         delivery: {
//           status: "new"
//         },
//         from: "65352f3278998e2f73d1b0f1",
//         fromSelect: "WorkspaceD",
//         for: "653531a678998e2f73d1b130",
//         forSelect: "WorkspaceR",
//         createdAt: new Date("2024-04-22T13:01:16.989Z"),
//         updatedAt: new Date("2024-04-22T13:01:16.989Z")
//     },
// ]

// orderData.reverse();

// export default orderData