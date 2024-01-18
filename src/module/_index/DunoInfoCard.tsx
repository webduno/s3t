
function DunoInfoCard({ }) {
  return (<>
    <a href="/">
      <h1 className=''>
        <div> duno  </div>
        <div className="tx-sm"> Abraham Duno&apos;s Projects Archive </div>
      </h1>
    </a>
    <div className='flex-wrap gap-1 flex-justify-start tx-smd opaci-50 px-6'>
      <div className="w- pt-8 pb-4">
        General Artist & Software Developer with 7+ years of experience in
        full stack software development and 3d modeling & sculpting.
      </div>
    </div>
    <div className='flex-wrap gap-1 flex-justify-start tx-smd opaci-50'>
      <div className="w-max-200px py-2"> Twitter: </div>
      <a className="tx-bold opaci-chov--50" style={{ color: "#0066aa" }}
        href="https://twitter.com/3duno3" target="_blank"
        >
          @3duno3
      </a>
    </div>
    <div className='flex-wrap gap-1 flex-justify-start tx-smd opaci-50'>
      <div className="w-max-200px py-2"> Blog: </div>
      <a className="tx-bold opaci-chov--50" style={{ color: "#00aa00" }}
        href="https://dev.to/3duno" target="_blank"
        >
          Abraham Duno
      </a>
    </div>
    <div className='flex-wrap gap-1 flex-justify-start tx-smd opaci-50'>
      <div className="w-max-200px py-2"> Github: </div>
      <a className="tx-bold opaci-chov--50" style={{ color: "#333333" }}
        href="https://github.com/3dunoabraham" target="_blank"
        >
          3dunoabraham
      </a>
    </div>
    <div className='flex-wrap gap-1 flex-justify-start tx-smd opaci-50'>
      <div className="w-max-200px py-2"> Artstation: </div>
      <a className="tx-bold opaci-chov--50" style={{ color: "#bb7700" }}
        href="https://www.artstation.com/dunoabraham" target="_blank"
        >
          dunoabraham
      </a>
    </div>
    <div className='flex-wrap gap-1 flex-justify-start tx-smd opaci-50'>
      <div className="w-max-200px py-2"> CV: </div>
      <a className="tx-bold opaci-chov--50" style={{ color: "#ff0000" }}
        href="/cv.pdf" target="_blank"
        >
          cv.pdf
      </a>
    </div>
  </>)
}

export default DunoInfoCard