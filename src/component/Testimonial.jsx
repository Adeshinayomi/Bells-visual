import  client from '../assets/image/client.jpg'
export function Testimonial(){
    return(
        <section className='grid gap-5 mt-[5rem] w-[90%] mx-auto md:grid-cols-2 h-fit md:flex'>
            <div className='w-[150px] h-[150px] md:w-full md:h-full'>
                <img src={client} alt="client" className='md:w-full md:h-full
                rounded-full md:rounded-none'/>
            </div>
            <div className='grid gap-5 items-start place-content-start'>
                <svg className='h-16 w-16 fill-accent' fill="none" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                     viewBox="0 0 123.961 123.961"
                    xml:space="preserve">
                    <g>
                        <path d="M49.8,29.032c3.1-1.3,4.4-5,3-8l-4.9-10.3c-1.4-2.899-4.8-4.2-7.8-2.899c-8.5,3.6-15.8,8.3-21.6,14
                        C11.4,28.532,6.6,36.232,4,44.732c-2.6,8.601-4,20.3-4,35.2v30.7c0,3.3,2.7,6,6,6h39.3c3.3,0,6-2.7,6-6v-39.3c0-3.301-2.7-6-6-6
                        H26.5c0.2-10.101,2.6-18.2,7-24.301C37.1,36.133,42.5,32.133,49.8,29.032z"/>
                        <path d="M120.4,29.032c3.1-1.3,4.399-5,3-8l-4.9-10.199c-1.4-2.9-4.8-4.2-7.8-2.9c-8.4,3.6-15.601,8.3-21.5,13.9
                        c-7.101,6.8-12,14.5-14.601,23c-2.6,8.399-3.899,20.1-3.899,35.1v30.7c0,3.3,2.7,6,6,6H116c3.3,0,6-2.7,6-6v-39.3
                        c0-3.301-2.7-6-6-6H97.1c0.2-10.101,2.601-18.2,7-24.301C107.7,36.133,113.1,32.133,120.4,29.032z"/>
                    </g>
                </svg>
                
                <p className='text-lg md:w-5/6'>
                    "Working with Abbey was great. The designs were intuitive, visually appealing, and easy for users to navigate.
                    Creative but Trustworthy
                    Abbey has a strong eye for detail and design. The final work exceeded expectations and communicated our message clearly."
                </p>
                <h1 className='text-2xl font-bold '>Dr. Femi gbagada</h1>
                <div className='flex gap-2'>
                    <button className='px-[3rem] py-2 bg-accent'></button>
                    <button className='px-[3rem] py-2 bg-gray-200'></button>
                    <button className='px-[3rem] py-2 bg-gray-200'></button>
                </div>
            </div>
        </section>
    )
}