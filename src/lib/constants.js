import { BsGithub, BsDiscord } from 'react-icons/bs'

export const logoSrc =
  'https://res.cloudinary.com/iamalmiir/image/upload/v1675047562/logoBMCC_ggm94z.png'

export const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contribute', href: '/docs/contribute' },
]

export const links = {
  home: '/',
  about: '/about',
  events: '/events',
  resources: '/resources',
  contribute: '/contribute',
}

export const gitHubLink = 'https://github.com/Program-BMCC'
export const discordLink = 'https://discord.gg/kUtD4q7zpU'
export const googleFormLink =
  'https://docs.google.com/forms/d/e/1FAIpQLSeE24To66MBfdrlnxSZ8fVdY9cKnmr9n2UAPkfI6v-S1mxcbw/viewform'

export const socialLinks = [
  {
    name: 'GitHub',
    href: gitHubLink,
    icon: BsGithub,
  },
  {
    name: 'Discord',
    href: discordLink,
    icon: BsDiscord,
  },
]
