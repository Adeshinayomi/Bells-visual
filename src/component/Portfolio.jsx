import graphics1 from '../assets/image/graphics-3.png'
import graphics2 from '../assets/image/graphics-4.png'
import graphics3 from '../assets/image/graphics-5.png'
import graphics4 from '../assets/image/graphics-2.png'
import logo1 from '../assets/image/logo-1.png'
 
 export function Portfolio(){
    return(
        <section className="bg-hero grid gap-8 justidy-center mt-[10rem]">
            <div className="grid gap-5 justify-center">
                <h1 className="text-3xl font-bold text-center">Featured Works</h1>
                <p className="text-sm w-5/6 mx-auto text-center font-medium">
                    Take a look at some of my finest works for brands that i have worked with
                </p>
            </div>
            <div className='w-[90%] mx-auto grid gap-5 md:grid-cols-4'>
                <div className='relative overflow-hidden rounded-xl'>
                    <img src={graphics1} alt="first-graphic" className='ease-in duration-300 rounded-xl brightness-50 hover:scale-125'/>
                    <span className='absolute bottom-4 right-2 text-white text-2xl'>Flyer</span>
                </div>
                <div className='relative overflow-hidden rounded-xl'>
                    <img src={graphics3} alt="first-graphic" className='ease-in duration-300 rounded-xl brightness-50 hover:scale-125'/>
                    <span className='absolute bottom-4 right-2 text-white text-2xl'>Flyer</span>
                </div>
                <div className='relative overflow-hidden rounded-xl md:h-full'>
                    <img src={logo1} alt="first-graphic" className='md:h-full ease-in duration-300 rounded-xl brightness-50 hover:scale-125'/>
                    <span className='absolute bottom-4 right-2 text-white text-2xl'>Logo</span>
                </div>
                <div className='relative overflow-hidden rounded-xl'>
                    <img src={graphics4} alt="first-graphic" className='ease-in duration-300 rounded-xl brightness-50 hover:scale-125'/>
                    <span className='absolute bottom-4 right-2 text-white text-2xl'>Flyer</span>
                </div>
            </div>
            <button className='ease-in duration-300 group bg-accent px-6 py-2 justify-self-center flex gap-2 text-white items-center rounded-xl mb-10 hover:bg-transparent hover:border-2 hover:border-accent hover:text-accent'>
                <span className='text-lg font-medium'>View all</span>
                <svg className=" h-10 w-6 stroke-white ease-in duration-300 group-hover:stroke-accent" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" strokeWidth={2}>
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" />
                </svg>
            </button>
        </section>
    )
}