"use client"
import Dropdown from "@/dom/atom/common/Dropdown"
import FlexTable from "@/dom/cell/form/FlexTable"
import Link from "next/link"

export function ContextConnectedTable ({ initArray }:any) {
    const buttonActionText = "..."
    const buttonActionClass = "tx-lg pb-3 pt-1 px-2 tx-gray opaci-chov--25"
    const actionCard = (slug:any) => {
        const foundIndex =  initArray.findIndex((item:any)=>(item.slug == slug))+1
    
            return (<>
              <Dropdown buttonTitle={buttonActionText} buttonClass={buttonActionClass}>
                <div className="flex-col flex-align-stretch gap-1 bg-white pa-2 bord-r-8 z-100  ">
                  {!!foundIndex && <>
                    {!initArray[foundIndex-1].url &&<>No Link Found!</>}
                    {!!initArray[foundIndex-1].url &&<>
                      <Link  href={initArray[foundIndex-1].url || ""}
                        className="duno-button-primary clickble nowrap"
                        onClick={()=>{}}
                      >
                        Go to URL
                      </Link>
                      
                    </>}
                  </>}
                </div>
              </Dropdown>
            </>)
          }

          
    return (
        <div>
            <FlexTable theArray={initArray} bools={["isActionable"]} actionCard={actionCard}
                config={{idKey:"slug",mainKey:"slug",idKeyTitle:"Slug",
                    childrenArray: [
                        { key: "title", title: "Title"},
                        { key: "desc", title: "Description", class:"Q_sm_x"},
                        { key: "status", title: "Status", class:"Q_sm_x"},
                    ]
                }}
            />
        </div>
    )
}

export default ContextConnectedTable