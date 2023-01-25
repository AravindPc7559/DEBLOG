import React from 'react'

const Loader = () => {
  return (
    <div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className='w-full h-screen' preserveAspectRatio="none" viewBox="0 0 1440 560">
        <g mask="url(&quot;#SvgjsMask1028&quot;)" fill="none">
          <rect width={1440} height={560} x={0} y={0} fill="#0e2a47" />
          <path d="M543.7 557.13 a123.19 123.19 0 1 0 246.38 0 a123.19 123.19 0 1 0 -246.38 0z" fill="rgba(28, 83, 142, 0.4)" className="triangle-float1" />
          <path d="M-122.71 346.39 a153.26 153.26 0 1 0 306.52 0 a153.26 153.26 0 1 0 -306.52 0z" fill="rgba(28, 83, 142, 0.4)" className="triangle-float2" />
          <path d="M1193.46 167.4 a136.9 136.9 0 1 0 273.8 0 a136.9 136.9 0 1 0 -273.8 0z" fill="rgba(28, 83, 142, 0.4)" className="triangle-float1" />
          <path d="M-93.83 395.67 a152.29 152.29 0 1 0 304.58 0 a152.29 152.29 0 1 0 -304.58 0z" fill="rgba(28, 83, 142, 0.4)" className="triangle-float3" />
          <path d="M165.1 364.18 a101.73 101.73 0 1 0 203.46 0 a101.73 101.73 0 1 0 -203.46 0z" fill="rgba(28, 83, 142, 0.4)" className="triangle-float1" />
        </g>
        <defs>
          <mask id="SvgjsMask1028">
            <rect width={1440} height={560} fill="#ffffff" />
          </mask>
          <style dangerouslySetInnerHTML={{__html: "\n            @keyframes float1 {\n                0%{transform: translate(0, 0)}\n                50%{transform: translate(-10px, 0)}\n                100%{transform: translate(0, 0)}\n            }\n\n            .triangle-float1 {\n                animation: float1 5s infinite;\n            }\n\n            @keyframes float2 {\n                0%{transform: translate(0, 0)}\n                50%{transform: translate(-5px, -5px)}\n                100%{transform: translate(0, 0)}\n            }\n\n            .triangle-float2 {\n                animation: float2 4s infinite;\n            }\n\n            @keyframes float3 {\n                0%{transform: translate(0, 0)}\n                50%{transform: translate(0, -10px)}\n                100%{transform: translate(0, 0)}\n            }\n\n            .triangle-float3 {\n                animation: float3 6s infinite;\n            }\n        " }} />
        </defs>
      </svg>

      <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
      <h1>X-Blog</h1>
      </div>
    </div>
  )
}

export default Loader