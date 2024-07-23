import Link from "next/link";
import Image from 'next/image';

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        section: "Organization",
        link: ['About us', 'Contact us', 'Testimonials'],
    },
    {
        id: 2,
        section: "Support",
        link: ['Help center', 'Terms of service',]
    }
]

const footer = () => {
    return (
        <div className="bg-bgpurple -mt-64" id="first-section">
            <div className="mx-auto max-w-2xl pt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-4'>
                        <Image 
                            src={'/assets/logo/estogo.png'}
                            alt="EST"
                            width={78}
                            height={78}
                            className='pb-4'
                        />
                        <h3 className='text-white text-lg font-medium leading-9 mb-4 lg:mb-20'>
                            &quot;Education is the most powerful weapon which you can use to change the world.&quot; <br/> (Nelson Mandela)
                        </h3>
                        <div className='flex gap-4'>
                            <Link href="/"><Image src={'/assets/footer/insta.svg'} alt="instagram" width={24} height={24} className='footer-icons' /></Link>
                            <Link href="/"><Image src={'/assets/footer/dribble.svg'} alt="dribble" width={24} height={24} className='footer-icons' /></Link>
                            <Link href="/"><Image src={'/assets/footer/twitter.svg'} alt="twitter" width={24} height={24} className='footer-icons' /></Link>
                            <Link href="/"><Image src={'/assets/footer/youtube.svg'} alt="youtube" width={24} height={24} className='footer-icons' /></Link>
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}

                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2">
                            <p className="text-white text-xl font-semibold mb-9">{product.section}</p>
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link href="/" className="text-offwhite text-sm font-normal mb-6 space-links">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* CLOUMN-4 */}

                    <div className='col-span-4'>
                        <h3 className='text-white text-xl font-semibold mb-6'>Stay up to date</h3>
                        <div className="relative text-white focus-within:text-white flex flex-row-reverse">
                            <input type="Email address" name="q" className="py-4 text-sm w-full text-white bg-gray-900 rounded-md pl-4 focus:outline-none bg-emailbg focus:text-white" placeholder="Your email address" autoComplete="off" />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                                <button className="p-1 focus:outline-none focus:shadow-outline">
                                    <Image src={'/assets/footer/inputIcon.svg'} alt="inputicon" width={24} height={24} />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* All Rights Reserved */}

            <div className='pb-24 px-4'>
                {/* <h3 className='text-center text-offwhite'><Link href="" target="_blank"> </Link></h3> */}
            </div>

        </div>
    )
}

export default footer;
