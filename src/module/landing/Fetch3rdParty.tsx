"use client";

import { useEffect, useState } from "react";
import ReposService from '@/../script/state/service/Repos'
import { fetchUnitForeigns } from "../../../script/state/repository/inventory/fetchHelper";
import { fetchRepos } from "../../../script/state/repository/repos";
import FlexTable from "@/dom/cell/form/FlexTable";


function Component({ personal_token }:any) {
    const [theArray, s__theArray] = useState()
    useEffect(() => {
        async function getForeigns() {
          const q__foreigns = await fetchRepos("abrahamduno",{
            headers: {Authorization: `Token ${personal_token}`,}
        })
          s__theArray(q__foreigns)
        }

        getForeigns()
      }, []);

    return (
        <div>
            {/* {JSON.stringify(theArray)} */}
            
            <FlexTable theArray={theArray}
                config={{idKey:"id",mainKey:"id",
                    childrenArray: [
                        { key: "name", title: "Name"}
                    ]
                }}
            />
        </div>
    )
}

export default Component