import BoxContainer from '@/3d/BoxContainer';
import DunoInfoCard from '@/module/_index/DunoInfoCard';
import { Suspense } from 'react';

export default async function Page() {
  return (<>
    <main className='flex-col pos-rel  ' style={{ background: "linear-gradient(0deg,white, #FFfcfa)"}} >
      <div className=' pos-rel w-100 Q_xs_px-4 px-8 mt-5'>
        <div className='flex'>
          <div className=' w-300px Q_lg_x'></div>
          <div className=' pos-fix w-300px Q_lg_x'> <DunoInfoCard /> </div>
          <div className='w-100'>
            <div className='  Q_xs_lg'> <DunoInfoCard /> <br className='my-8' /> </div>
            <div > <h1 className='tx-bold-3 mt-6'>3D Builder Example</h1> </div>
            <hr className='opaci-10 w-100 mb-4 my-2' />
            <Suspense>
              <div className="flex-1 h-max-700px pos-rel  w-95  flex" id="root">
                <BoxContainer />
              </div>
            </Suspense>
            <hr className='my-4' />
          </div>
        </div>
      </div>
    </main>
  </>)
}