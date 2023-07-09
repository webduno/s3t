import SSSDemo from '@/module/landing/SSSDemo';
import SSSLandingFrontCard from '@/module/sss/SSSLandingFrontCard';

export default async function Page() {  
  return (<>
    <main className='flex-col pos-rel  ' style={{background:"linear-gradient(0deg,white, #FFfcfa)"}} >
      <div className=' pos-rel w-100 Q_xs_px-4 px-8 mt-5'>
        <div className='flex'>
          <div className=' w-300px Q_lg_x'></div>
          <div className=' pos-fix w-300px Q_lg_x'>
            <SSSLandingFrontCard />
          </div>
          <div className='w-100'>
            <div className='  Q_xs_lg'>
              <SSSLandingFrontCard />
            </div>
            {/* @ts-expect-error */}
            <SSSDemo />
            <hr className='my-4' />
          </div>
        </div>
      </div>
    </main>
  </>)
}