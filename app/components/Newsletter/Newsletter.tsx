import Link from "next/link";

const Newsletter = () => {
    return (
        <div id="join-section" className='-mt-32 relative z-10'>
            <div className="mx-auto max-w-2xl py-16 md:py-24 px-4 sm:px-6 md:max-w-7xl lg:px-24 bg-orange rounded-lg bg-newsletter">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:gap-x-8">

                    {/* COLUMN-1 */}
                    <div>
                        <h3 className="text-5xl font-bold mb-3"> Join Our Community </h3>
                        <h4 className="text-lg font-medium mb-7">Stay connected with us! Follow us on social media to join our community and stay updated with the latest news and events.</h4>
                        <div className="flex gap-2">
                        <div className='hidden sm:flex gap-4'>
                            <Link href="/"><img src={'/assets/footer/insta-black.svg'} alt="instagram" className='footer-icons' /></Link>
                            <Link href="/"><img src={'/assets/footer/dribble-black.svg'} alt="dribble" className='footer-icons' /></Link>
                            <Link href="/"><img src={'/assets/footer/twitter-black.svg'} alt="twitter" className='footer-icons' /></Link>
                            <Link href="/"><img src={'/assets/footer/youtube-black.svg'} alt="youtube" className='footer-icons' /></Link>
                        </div> 
                        </div>
                    </div>

                    {/* COLUMN-2 */}
                    {/* <div className='hidden sm:block'>
                        <div className='float-right -mt-32'>
                            <img src={'/assets/newsletter/Free.svg'} alt="bgimg" />
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default Newsletter;