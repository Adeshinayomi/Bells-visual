import graphics1 from '../assets/image/graphics-3.png'
import graphics2 from '../assets/image/graphics-4.png'
import graphics3 from '../assets/image/graphics-5.png'
import graphics4 from '../assets/image/graphics-2.png'
import logo1 from '../assets/image/logo-1.png'
 
 export function Portfolio(){
    return(
        <section className="w-[90%] mx-auto grid gap-8 justidy-center mt-[10rem]">
            <div className="grid gap-5 justify-center">
                <h1 className="text-3xl font-bold text-center">Featured Works</h1>
                <p className="text-sm w-5/6 mx-auto text-center font-medium">
                    Take a look at some of my finest works for brands that i have worked with
                </p>
            </div>
            <div className='grid gap-5'>
                <div className='relative overflow-hidden rounded-xl'>
                    <img src={graphics1} alt="first-graphic" className='ease-in duration-300 rounded-xl brightness-50 hover:scale-125'/>
                    <span className='absolute bottom-4 right-2 text-white text-2xl'>Flyer</span>
                </div>
                <div className='relative overflow-hidden rounded-xl'>
                    <img src={graphics3} alt="first-graphic" className='ease-in duration-300 rounded-xl brightness-50 hover:scale-125'/>
                    <span className='absolute bottom-4 right-2 text-white text-2xl'>Flyer</span>
                </div>
                <div className='relative overflow-hidden rounded-xl'>
                    <img src={logo1} alt="first-graphic" className='ease-in duration-300 rounded-xl brightness-50 hover:scale-125'/>
                    <span className='absolute bottom-4 right-2 text-white text-2xl'>Logo</span>
                </div>
                <div className='relative overflow-hidden rounded-xl'>
                    <img src={graphics4} alt="first-graphic" className='ease-in duration-300 rounded-xl brightness-50 hover:scale-125'/>
                    <span className='absolute bottom-4 right-2 text-white text-2xl'>Flyer</span>
                </div>
            </div>
        </section>
    )
}