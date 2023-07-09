import Image from 'next/image';
import TechStackTable from './TechStackTable';
import ContextConnectedTable from '../inventory/ContextConnectedTable';
import { getSupabaseClient } from '../../../script/state/repository/supabaseClient';
import { fetchDemoList } from '../../../script/state/repository/demo';
import LatestProjects from '../inventory/LatestProjects';
import { PortfolioHtmlOptions } from './PortItems';

export default async function DunoProjectsPage() {
  const supabaseC = getSupabaseClient()
  const theArray: any = await fetchDemoList(supabaseC)
  const theCodeArray: any = theArray.filter((x: any) => (x.category == "code"))
  const theArtArray: any = theArray.filter((x: any) => (x.category == "art"))
  const theGameArray: any = theArray.filter((x: any) => (x.category == "game"))

  const theLatestArray: any = theArray.filter((x: any) => (!!x.vip))
  const theStandardsArray: any = theArray.filter((x: any) => (x.category == "tech"))

  return (<>
    <main className='flex-col pos-rel  ' >
      <div className=' pos-rel w-100 '>
        <div className='flex pos-rel flex-wrap gap-1 pa-1'>
          {PortfolioHtmlOptions.map((option: any, index: number) =>
            {
              const { href, className, target, alt, src, width, height, additionalClassName } = option;
              return (
                <a href={`${href}`} className={`${className} ${additionalClassName}`} target={`${target}`} key={index}>
                  <Image alt={`${alt}`} src={`${src}`} width={parseInt(`${width}`)}
                    height={parseInt(`${height}`)} /> </a>
              );
            }
          )}
        </div>
        <div className=' flex   '>
          <div className='flex-1 flex-col  flex-1 flex-align-star flex-align-stretch px-8 Q_xs_px-2 pt- '>
            <h1 className='tx-bold mt-8'>Abraham Duno </h1> <br className='mb-8 ' />
            <details open>
              <summary className='opaci-chov--25 flex'>
                <div className='flex gap-2 pb-2'>
                  <div className='pa-2 bord-r-50' style={{ background: "#ffff00" }}></div>
                  <h2 className='tx-bold-'>
                    <div>Latest</div> <div className='tx-bold-3'>Current Projects  </div>
                  </h2>
                </div>
              </summary>
              <div>
                <hr className='mb-4' />
                <div> <LatestProjects initArray={theLatestArray} /> </div>
                <br className='my-8 ' />
              </div>
            </details>
            <hr className='my-8 ' />
            <details>
              <summary className='opaci-chov--25 flex'>
                <div className='flex gap-2 pb-2'>
                  <div className='pa-2 bord-r-50' style={{ background: "#0099FF" }}></div>
                  <h2 className='tx-bold-'><div>Code</div> <div className='tx-bold-3'>Typescript, Threejs, Solidity, ... </div></h2>
                </div>
              </summary>
              <div>
                <hr className='mb-4' />
                <div className='flex-col flex-align-stretch'>
                  {/* @ts-expect-error */}
                  <ContextConnectedTable initArray={theCodeArray} />
                </div>
                <br className='my-8 ' />
              </div>
            </details>
            <br className='my-2 ' />
            <details>
              <summary className='opaci-chov--25 flex'>
                <div className='flex gap-2 pb-2'>
                  <div className='pa-2 bord-r-50' style={{ background: "#70998F" }}></div>
                  <h2 className='tx-bold-'><div>Art</div> <div className='tx-bold-3'>Digital Sculptures, Short Films, ... </div></h2>
                </div>
              </summary>
              <div>
                <hr className='mb-4' />
                {/* @ts-expect-error */}
                <ContextConnectedTable initArray={theArtArray} />
                <br className='my-8 ' />
              </div>
            </details>
            <br className='my-2 ' />
            <details>
              <summary className='opaci-chov--25 flex'>
                <div className='flex gap-2 pb-2'>
                  <div className='pa-2 bord-r-50' style={{ background: "#ff9900" }}></div>
                  <h2 className='tx-bold-'><div>Games</div> <div className='tx-bold-3'>Web-Based, 3D, Blockchain, ... </div></h2>
                </div>
              </summary>
              <div>
                <hr className='mb-4' />
                {/* @ts-expect-error */}
                <ContextConnectedTable initArray={theGameArray} />
                <br className='my-8 ' />
              </div>
            </details>
            <hr className='my-8 ' />
            <h1 className=' tx-bold-3'>TechStack </h1> <br className='mb-8 ' />
            <details>
              <summary className='opaci-chov--25 flex'>
                <div className='flex gap-2 pb-2'>
                  <div className='pa-2 bord-r-50' style={{ background: "#ff00ff" }}></div>
                  <h2 className='tx-bold-'><div>Technologies</div> <div className='tx-bold-3'>Tools, Languages, ... </div></h2>
                </div>
              </summary>
              <div>
                <hr className='mb-4' />
                {/* @ts-expect-error */}
                <div> <TechStackTable initArray={theStandardsArray} /> </div>
                <br className='my-8 ' />
              </div>
            </details>
          </div>
        </div>
      </div>
    </main>
  </>)
}