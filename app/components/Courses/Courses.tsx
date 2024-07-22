"use client"
import * as React from "react";
import { useState } from "react";
import { GlobeAltIcon, DevicePhoneMobileIcon, CircleStackIcon, CloudIcon } from '@heroicons/react/24/outline';


interface Name {
    course: string;
    imageSrc: string;
    profession: string
    totalCount: string
    category:string
}

const names: Name[] = [
    {
        course: 'Free Mock Test',
        imageSrc: '/assets/events/2k24/free-mock-test-2k23.png',
        profession: 'Free Mock Test',
        // price: '40',
        category: '2024',
        totalCount:'100+ Student'
    },
    {
        course: 'Free Mock Test',
        imageSrc: '/assets/events/2k24/free-mock-test-2k23.png',
        profession: 'Free Mock Test',
        // price: '40',
        category: '2024',
          totalCount:'100+ Student'
    },
   
    
];

const NamesList = () => {

    const [selectedButton, setSelectedButton] = useState<'2024' | '2023' | '2022' | '2021' | 'all' | null>('2024');

    const mobileDevelopment = names.filter((name) => name.category === '2024');
    const webDevelopment = names.filter((name) => name.category === '2023');
    const dataScience = names.filter((name) => name.category === '2022');
    const cloudComputing = names.filter((name) => name.category === '2021');

    let selectedNames: Name[] = [];

    if (selectedButton === '2024') {
        selectedNames = mobileDevelopment;
    } else if (selectedButton === '2023') {
        selectedNames = webDevelopment;
    } else if (selectedButton === '2022') {
        selectedNames = dataScience;
    } else if (selectedButton === '2021') {
        selectedNames = cloudComputing
    }


    const nameElements = selectedNames.map((name, index) => (

        <div key={index}>
            <div className=" text-lg sm:text-sm py-5 lg:py-0">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <img
                        src={name.imageSrc}
                        alt={name.imageSrc}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className='flex justify-between'>
                    <div className="mt-6 block font-normal text-gray-900">
                        {name.course}
                    </div>
                    <div className="mt-6 block text-lg font-semibold text-green border-solid border-2 border-green rounded-md px-1">
                        {name.category}
                    </div>
                </div>
                <p aria-hidden="true" className="mt-2 mb-5 text-2xl font-semibold ">
                    {name.profession}
                </p>

                <div className='flex justify-between border-solid border-2 border-grey500 rounded-md p-2'>
                    <p>{name?.totalCount}</p>
                    <div className='flex flex-row space-x-4'>
                        {/* <div className='flex'>
                            <img src={'/assets/courses/account.svg'} alt="circle" />
                            <p className='text-lightgrey ml-1'>120</p>
                        </div>
                        <div className='flex'>
                            <img src={'/assets/courses/Star.svg'} alt="star" />
                            <p className='ml-1'>4.5</p>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    ));


    return (
        <div>
            <div id='event-section' className="mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8">

                <div className='sm:flex justify-between items-center pb-12'>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Events</h2>
                    <div>
                        <button className="bg-transparent hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-purple hover:border-transparent rounded">
                            Explore Events
                        </button>
                    </div>
                </div>

                <div className='flex nowhitespace space-x-5 rounded-xl bg-white p-1 overflow-x-auto'>

                    {/* FOR DESKTOP VIEW */}
                    <button onClick={() => setSelectedButton('2024')} className={"bg-white " + (selectedButton === '2024' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>2024</button>
                    <button onClick={() => setSelectedButton('2023')} className={"bg-white " + (selectedButton === '2023' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>2023</button>
                    <button onClick={() => setSelectedButton('2022')} className={"bg-white " + (selectedButton === '2022' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>2022</button>
                    <button onClick={() => setSelectedButton('2021')} className={"bg-white " + (selectedButton === '2021' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>2021</button>
                    
                    <button onClick={() => setSelectedButton('2021')} className={"bg-white " + (selectedButton === '2021' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>All</button>

                    {/* FOR MOBILE VIEW */}
                    <GlobeAltIcon onClick={() => setSelectedButton('2024')} width={70} height={70} className={"bg-white " + (selectedButton === '2024' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
                    <DevicePhoneMobileIcon onClick={() => setSelectedButton('2023')} width={70} height={70} className={"bg-white " + (selectedButton === '2023' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
                    <CircleStackIcon onClick={() => setSelectedButton('2022')} width={70} height={70} className={"bg-white " + (selectedButton === '2022' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
                    <CloudIcon onClick={() => setSelectedButton('2021')} width={70} height={70} className={"bg-white " + (selectedButton === '2021' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />

                </div>

                <div>
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-12">
                            <div className="col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
                                {nameElements.length > 0 ? (
                                    nameElements
                                ) : (
                                    <p>No data to show</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default NamesList;




