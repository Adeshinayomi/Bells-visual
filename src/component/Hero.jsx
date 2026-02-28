import Owner from "../assets/image/person's-image.jpeg"
import arrowDown from '../assets/image/Icons/arrow-down.svg'
import adobeAi from '../assets/image/Icons/adobe-illustrator-icon.png'
import adobePhoto from '../assets/image/Icons/adobe-photoshop-icon.png'
import figma from '../assets/image/Icons/figma-icon.png'
import adobexd from '../assets/image/Icons/adobe-xd-icon.png'
export function Hero(){
    return(
        <section className="h-screen flex flex-col justify-center items-center gap-7 bg-hero">
            <div className="w-[100px] h-[100px] rounded-full justify-self-center">
                <img src={Owner} alt="Owner's-image"  className="w-full h-full rounded-full"/>
            </div>
            <h1 className="w-fit text-4xl text-center font-bold">
                Hi,I'm a Graphic Designer.
            </h1>
            <p className="text-center text-xl w-5/6 mx-auto">
                I create clean,engaging visuals for web and mobile
            </p>
            <div className="justify-self-center flex gap-3">
                <button className="flex items-center bg-accent text-White px-4 py-2 rounded-lg gap-2">
                    <span className="text-md font-medium">Get In Touch</span>
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button className="flex items-center border-2 border-accent rounded-lg p-2 gap-2">
                    <span className="text-lg font-medium">View works</span>
                    <img src={arrowDown} alt="arrow-down" width={20}/>
                </button>
            </div>
            <div className="justify-self-center flex gap-4 mt-2">
                <img src={figma} alt="figma-icon" width={50} className="rounded-xl"/>
                <img src={adobePhoto} alt="adobe-photoshop-icon" width={50}/>
                <img src={adobexd} alt="adobe-xd-icon" width={50}/>
                <img src={adobeAi} alt="adobe-ai-icon" width={50}/>
            </div>
        </section>
    )
}