import React from "react";

const heroSkeleton: React.FC = () => {
 return  <div className="iso-fruits-Hero">

        <div className="card" aria-hidden="true">
        <div className="card-body">
            <p className="card-text placeholder-glow">
             <div className="SkeletonImage placeholder-glow"></div>
            <span className="placeholder w-100 placeholder-lg"></span> 
            </p>
        </div>
        </div>
  </div>
}
export default heroSkeleton;
