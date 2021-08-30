import Image from "next/image";

import React from "react";

const ImageAbstract = ({ containerClass, objectFit, layout, src, alt }) => {
  return (
    <div className={`relative ${containerClass} `}>
      <Image
        src={src}
        layout={layout ? layout : "fill"}
        objectFit={objectFit ? objectFit : "contain"}
        alt={alt}
      />
    </div>
  );
};

export default ImageAbstract;
