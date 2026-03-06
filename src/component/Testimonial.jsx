import { useState, useEffect, useRef } from "react";
import testimonyImage from "../assets/image/testimony-image.webp";
import testimonyImage2 from "../assets/image/testimony-image-2.webp";
export function Testimonial() {
  const [count, setCount] = useState(0);
  const imageDiv = useRef(null);
  const textDiv = useRef(null);
  const nameDiv = useRef(null);
  const btnDiv = useRef(null);
  const [testimonies, setTestimonies] = useState([
    {
      image: testimonyImage2,
      name: "Sonusi Abiodun",
      role: "Realtor Queen scapes/ properties",
      text: `
        "Working with Bell's visual was great. The designs were intuitive, visually appealing, and easy for users to navigate.
        Creative but Trustworthy
        Bell's visual has a strong eye for detail and design. The final work exceeded expectations and communicated our message clearly."
       `,
    },
    {
      image: testimonyImage,
      name: "Azeezat Adejoke",
      role: "CEO Gleam by zee",
      text: `
       “Bell's visual was a pleasure to work with. The designs were clean, modern, and aligned perfectly with our brand goals. Communication was clear throughout the process, and the final delivery exceeded our expectations.”
       `,
    },
    {
      image: "",
      name: "Dr. Femi Gbagada",
      role: "CEO Royal Global",
      text: `
      “Bell's visual helped us turn our ideas into a clean, user-friendly design. The layout, typography, and overall experience felt intentional and well thought out. We would happily work together again.”
       `,
    },
  ]);

  useEffect(() => {
    imageDiv.current.classList.add("lg:animate-wiggle");
    imageDiv.current.classList.add("animate-show");
    textDiv.current.classList.add("animate-show");
    nameDiv.current.classList.add("animate-show");
    btnDiv.current.classList.add("animate-show");
    setTimeout(() => {
      imageDiv.current.classList.remove("lg:animate-wiggle");
      imageDiv.current.classList.remove("animate-show");
      textDiv.current.classList.remove("animate-show");
      nameDiv.current.classList.remove("animate-show");
      btnDiv.current.classList.remove("animate-show");
    }, 1000);
  }, [count]);



  const first = () => {
    setCount(0);
  };
  const second = () => {
    setCount(1);
  };
  const third = () => {
    setCount(2);
  };
  return (
    <section className="grid gap-5 mt-[5rem] w-[90%] mx-auto lg:grid-cols-2 h-fit lg:flex">
      <img
        src={testimonies[count].image}
        alt="client"
        ref={imageDiv}
        className=" lg:w-1/3 transition ease-in duration-300 w-[100px] h-[100px] rounded-full lg:w-1/3 lg:h-80 lg:rounded-none"
      />

      <div className="grid gap-5 items-start place-content-start lg:w-5/6">
        <svg
          className="h-16 w-16 fill-accent dark:fill-White"
          fill="none"
          version="1.1"
          ref={btnDiv}
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 123.961 123.961"
          xmlSpace="preserve"
          
        >
          <g>
            <path
              d="M49.8,29.032c3.1-1.3,4.4-5,3-8l-4.9-10.3c-1.4-2.899-4.8-4.2-7.8-2.899c-8.5,3.6-15.8,8.3-21.6,14
                        C11.4,28.532,6.6,36.232,4,44.732c-2.6,8.601-4,20.3-4,35.2v30.7c0,3.3,2.7,6,6,6h39.3c3.3,0,6-2.7,6-6v-39.3c0-3.301-2.7-6-6-6
                        H26.5c0.2-10.101,2.6-18.2,7-24.301C37.1,36.133,42.5,32.133,49.8,29.032z"
            />
            <path
              d="M120.4,29.032c3.1-1.3,4.399-5,3-8l-4.9-10.199c-1.4-2.9-4.8-4.2-7.8-2.9c-8.4,3.6-15.601,8.3-21.5,13.9
                        c-7.101,6.8-12,14.5-14.601,23c-2.6,8.399-3.899,20.1-3.899,35.1v30.7c0,3.3,2.7,6,6,6H116c3.3,0,6-2.7,6-6v-39.3
                        c0-3.301-2.7-6-6-6H97.1c0.2-10.101,2.601-18.2,7-24.301C107.7,36.133,113.1,32.133,120.4,29.032z"
            />
          </g>
        </svg>

        <p className="text-lg md:w-5/6 dark:text-White" ref={textDiv}>
          {testimonies[count].text}
        </p>
        <div className="grid gap-2" ref={nameDiv}>
          <h1 className="text-2xl font-bold dark:text-White">{testimonies[count].name}</h1>
          <h4 className="text-lg font-medium dark:text-White">{testimonies[count].role}</h4>
        </div>

        <div className="flex gap-2">
          <button
            className={`px-[3rem] py-2 ${count === 0 ? "bg-accent" : "bg-gray-200"}`}
            onClick={first}
          ></button>
          <button
            className={`px-[3rem] py-2 ${count === 1 ? "bg-accent" : "bg-gray-200"}`}
            onClick={second}
          ></button>
          {/* <button className={`px-[3rem] py-2 ${count === 2?'bg-accent':'bg-gray-200'}`} onClick={third}></button> */}
        </div>
      </div>
    </section>
  );
}
