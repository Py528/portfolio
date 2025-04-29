import React from "react";
import "./button96.css";

export default function Button96({ children = "Button 96" }) {
  return (
    <button className="button96 relative overflow-hidden w-fit h-2 border-1">
      {children}
      <svg className="star-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <polygon className="fil0" points="256,0 317,196 512,196 355,316 416,512 256,392 96,512 157,316 0,196 195,196 " />
      </svg>
      <svg className="star-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <polygon className="fil0" points="256,0 317,196 512,196 355,316 416,512 256,392 96,512 157,316 0,196 195,196 " />
      </svg>
      <svg className="star-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <polygon className="fil0" points="256,0 317,196 512,196 355,316 416,512 256,392 96,512 157,316 0,196 195,196 " />
      </svg>
      <svg className="star-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <polygon className="fil0" points="256,0 317,196 512,196 355,316 416,512 256,392 96,512 157,316 0,196 195,196 " />
      </svg>
      <svg className="star-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <polygon className="fil0" points="256,0 317,196 512,196 355,316 416,512 256,392 96,512 157,316 0,196 195,196 " />
      </svg>
      <svg className="star-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <polygon className="fil0" points="256,0 317,196 512,196 355,316 416,512 256,392 96,512 157,316 0,196 195,196 " />
      </svg>
    </button>
  );
}
