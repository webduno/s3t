"use client";
import FlexTable from "@/dom/cell/form/FlexTable"
import ContextConnectedTable from "./ContextConnectedTable"
import Dropdown from "@/dom/atom/common/Dropdown"
import Link from "next/link"
import { useMemo } from "react";

function Component ({initArray}:any) {
    
  const buttonActionText = "..."
  const buttonActionClass = "tx-lg pb-3 pt-1 px-2 tx-gray opaci-chov--25"
  const actionCard = (id:any) => {
    const foundIndex =  initArray.findIndex((item:any)=>(item.id == id))+1

        return (<>
          <Dropdown buttonTitle={buttonActionText} buttonClass={buttonActionClass}>
            <div className="flex-col flex-align-stretch gap-1 bg-white pa-2 bord-r-8 z-100  ">
              {!!foundIndex && <>
                {!!initArray[foundIndex-1].url &&<>
                  <Link  href={initArray[foundIndex-1].docs || ""} className="duno-button-primary clickble nowrap"
                    onClick={()=>{}}
                  >
                    View Details
                  </Link>
                    <Link  href={initArray[foundIndex-1].url || ""} className="duno-button-faded clickble nowrap"
                        target="_blank"
                        // onClick={()=>{s__loading(id)}}
                    >
                        {initArray[foundIndex-1].category == "game" && <>Play Game</>}
                        {initArray[foundIndex-1].category == "art" && <>View Project</>}
                        {initArray[foundIndex-1].category == "code" && <>View Demo</>}
                        
                    </Link>
                </>}
              </>}
            </div>
          </Dropdown>
        </>)
      }

    return (<>
        <FlexTable theArray={initArray} bools={["isActionable", "isIdless" ]} actionCard={actionCard} 
        actionHeader={<div className={buttonActionClass}>{buttonActionText}</div>}
                config={{idKey:"id",mainKey:"id",
                    headerClass:"tx-sm tx-gray tx-bold-3 ",
                    childrenArray: [
                        // { key: "name", title: "Name"},
                        { key: "category", title: "Category", class:"Q_sm_x"},
                        { key: "title", title: "Title"},
                        { key: "desc", title: "Description"},
                    ]
                }}
            />
    </>)
}

 export default Component