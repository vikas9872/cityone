import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { HiMiniBars3CenterLeft, HiXMark } from "react-icons/hi2";
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const navigation = [
    { name: 'Home', path: '/', current: false },
    { name: 'Abhout Us', path: '/aboutus', current: false },
    { name: 'Our Mission', path: '/ourmission', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Navbar({ scrollToSection, refs }) {
    const { theme, toggleTheme } = useContext(StoreContext);
    const navigate = useNavigate();
    return (
        <Disclosure as="nav" className="bg-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <HiMiniBars3CenterLeft aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <HiXMark aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        onClick={() => navigate(item.path)}
                                        className='text-balck hover:bg-[#dedcff] p-4 cursor-pointer'
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className='ml-auto flex items-center justify-center space-x-4'>
                            <div className='flex items-center justify-center'>
                                <button onClick={() => navigate('/employeeanduser')} className='text-balck cursor-pointer bg-[#dedcff] pt-4 pb-4 pr-8 pl-8'>Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="button"
                            onClick={() => navigate(item.path)}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium cursor-pointer',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
