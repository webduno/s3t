import DunoInfoCard from '@/module/_index/DunoInfoCard';
import DunoProjectsPage from '@/module/_index/DunoProjectsPage';

export default async function Page() {
  return (<>
    <main className='flex-col pos-rel  ' style={{ background: "linear-gradient(0deg,white, #FFfcfa)"}} >
      <div className=' pos-rel w-100 Q_xs_px-4 px-8 mt-5'>
        <div className='flex'>
          <div className=' w-300px Q_lg_x'></div>
          <div className=' pos-fix w-300px Q_lg_x'> <DunoInfoCard /> </div>
          <div className='w-100'>
            <div className='  Q_xs_lg'> <DunoInfoCard /> <br className='my-8' /> </div>
            {/* @ts-expect-error */}
            <DunoProjectsPage />
            <hr className='my-4' />
          </div>
        </div>
      </div>
    </main>
  </>)
}