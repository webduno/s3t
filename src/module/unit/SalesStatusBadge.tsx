function Component ({
    value, reference, date = "",
}:any) {
    switch (value)
    {
        case 1: return (
            <span className="duno-badge-success pa-1 tx-sm ">
                Available
            </span>
        )
        case 2: return (
            <div className="nowrap flex">
                <span className="duno-badge-secondary pa-1 tx-sm flex">
                    Sold
                    {!date && <div  className="">, Jan 1 2023</div>}
                    {!!date && <div  className="">, {date}</div>}
                </span>
            </div>
        )
        case 3: return (
            <div className="nowrap flex">
                <span className="duno-badge-tertiary pa-1 tx-sm flex">
                    Rented
                    {!date && <div  className="">, Jan 1 2023</div>}
                    {!!date && <div  className="">, {date}</div>}
                </span>
            </div>
        )
        case 4: return <span className="duno-badge-error pa-1 tx-sm ">Not Available</span>
    }
    return <span className="duno-bg-faded px-4 pa-1 tx-sm ">?</span>
}

export default Component