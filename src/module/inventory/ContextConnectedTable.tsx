import FlexTable from "@/dom/cell/form/FlexTable"

async function Component ({ initArray }:any) {
    return (
        <div>
            <FlexTable theArray={initArray}
                config={{idKey:"id",mainKey:"id",
                    childrenArray: [
                        { key: "name", title: "Name"},
                        { key: "title", title: "Title"},
                    ]
                }}
            />
        </div>
    )
}

export default Component