"use client";
import ImageI from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

const Magazine = () => {
  const flipBook = useRef(null);
  const { number } = useParams();
  const [pages, setPages] = useState<string[]>([]);

  useEffect(() => {
    const fetchPages = async () => {
      let index = 1;
      const tempPages = [];

      while (true) {
        const imagePath = `/mag-${number}/${index}.jpg`;
        const imageExists = await checkImageExists(imagePath);
        if (!imageExists) break;
        tempPages.push(imagePath);
        index++;
      }

      setPages(tempPages);
    };

    fetchPages();
  }, [number]);

  const checkImageExists = (url: string) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  };

  return (
    <>
      {pages.length > 0 ? (
        <HTMLFlipBook
          width={550}
          height={733}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={900}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          ref={flipBook}
          className={""}
          style={{}}
          startPage={0}
          drawShadow={false}
          flippingTime={1000}
          usePortrait={false}
          startZIndex={0}
          autoSize={false}
          clickEventForward={false}
          useMouseEvents={true}
          swipeDistance={0}
          showPageCorners={false}
          disableFlipByClick={false}
        >
          {pages.map((page, index) => (
            <div className="page-content" key={page}>
              <div className="page-image">
                <ImageI
                  src={page}
                  alt={`Page ${index}`}
                  width={550}
                  height={733}
                />
              </div>
            </div>
          ))}
        </HTMLFlipBook>
      ) : (
        "yükleniyor..."
      )}
    </>
  );
};

export default Magazine;
