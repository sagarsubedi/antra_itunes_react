import React from 'react'

function Card(props) {
  return (
<div className="w-[400px] break-words bg-white mb-6 shadow-lg rounded-xl mt-16">
    <div className="px-6">
        <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
                <div className="relative">
              <img
                src={props.imageURL}
                crossOrigin="anonymous"
                className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                alt="artist_image"
              />
                </div>
            </div>
            <div className="w-full text-center mt-20">
              <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                <div className="p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">{ props.trackCount}</span>
                  <span className="text-sm text-slate-400">Tracks</span>
                </div>
                  
                <div className="p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">${ props.collectionPrice}</span>
                <span className="text-sm text-slate-400">{ props.currency}</span>
                </div>

                <div className="p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">{ props.releaseDate.substring(0,4)}</span>
                  <span className="text-sm text-slate-400">Released</span>
                </div>
              </div>
            </div>
        </div>
        <div className="text-center mt-2 mb-5">
          <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">{ props.collectionName}</h3>
            <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
            <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>{ props.artistName}
            </div>
        </div>
    </div>
</div>
  )
}

export default Card