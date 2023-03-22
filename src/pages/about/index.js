import Image from 'next/image'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import avatar from '@images/avatar.png'
import Link from 'next/link'

const people = [
  {
    name: 'John Doe',
    role: 'Student / President',
    image: avatar,
    githubUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'John Doe',
    role: 'Student / Vice President',
    image: avatar,
    githubUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'John Doe',
    role: 'Student / Secretary',
    image: avatar,
    githubUrl: '',
    linkedinUrl: '',
  },
  {
    name: 'John Doe',
    role: 'Student / Treasurer',
    image: avatar,
    githubUrl: '',
    linkedinUrl: '',
  },
  // More people...
]

const About = () => {
  return (
    <>
      <div className='bg-transparent backdrop-blur-2xl py-24 sm:py-32'>
        <div className='mx-auto grid max-w-7xl gap-y-20 shadow-xl p-11 gap-x-8 px-6 lg:px-8 xl:grid-cols-3'>
          <div className='max-w-2xl'>
            <h2 className='text-3xl font-bold tracking-tight inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text text-transparent sm:text-4xl'>
              Meet our leadership
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-400'>
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse.
            </p>
          </div>
          <ul
            role='list'
            className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2'
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className='flex items-center gap-x-6'>
                  <Image
                    width={100}
                    height={100}
                    className='h-16 w-16 rounded-md'
                    src={person.image}
                    alt={person.name}
                  />
                  <div>
                    <h3 className='text-base font-semibold leading-7 tracking-tight bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text text-transparent'>
                      {person.name}
                    </h3>
                    <p className='text-sm font-semibold leading-6 text-primary-accent'>
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='bg-transparent backdrop-blur-2xl py-24 sm:py-32'>
        <div className='mx-auto shadow-xl shadow-slate-800 rounded-xl p-12 max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text text-transparent sm:text-4xl'>
              Contributors
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-400'>
              We&apos;re a dynamic group of individuals who are passionate about
              what we do and dedicated to delivering the best results.
            </p>
          </div>
          <ul
            role='list'
            className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'
          >
            {people.map((person) => (
              <li key={person.name}>
                <Image
                  className='aspect-[3/2] w-full rounded-2xl object-cover'
                  width={100}
                  height={400}
                  src={person.image}
                  alt={person.name}
                />
                <h3 className='mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900'>
                  {person.name}
                </h3>
                <p className='text-base leading-7 text-gray-600'>
                  {person.role}
                </p>
                <ul role='list' className='mt-6 flex gap-x-6'>
                  <li>
                    <Link
                      href={person.githubUrl}
                      className='text-gray-400 hover:text-gray-500'
                    >
                      <span className='sr-only'>Github</span>
                      <BsGithub className='h-6 w-6' aria-hidden='true' />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={person.linkedinUrl}
                      className='text-gray-400 hover:text-gray-500'
                    >
                      <span className='sr-only'>LinkedIn</span>
                      <BsLinkedin className='h-6 w-6' aria-hidden='true' />
                    </Link>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default About
