import React from 'react'
import { Footer} from 'flowbite-react'
import { Link} from 'react-router-dom'
import { BsFacebook, BsInstagram, BsGithub} from 'react-icons/bs'


const FooterComponent = () => {
  return (
    <Footer container className='border border-t-8 border-green-500'>
       <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-col-1'>
            <div className='mt-5'>
                <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white' >
                    <span className='px-2 py-1 bg-gradient-to-r 
                    from-blue-500 via-cyan-500 to-lime-500 rounded-lg text-white '>
                        Nirav's</span> Blog
                </Link>

            </div>

            <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                <div>
                    <Footer.Title title="about"/>
                    <Footer.LinkGroup col>
                        <Footer.Link href="https://nrpateldev.netlify.app" target='_blank' rel='noopener noreferrer'>
                            About me
                        </Footer.Link>
                        <Footer.Link href="/about" target='_blank' rel='noopener noreferrer'>
                            Nirav's Blog
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>

                <div>
                    <Footer.Title title="Follow me"/>
                    <Footer.LinkGroup col>
                        <Footer.Link href="https://github.com/nrpatel370" target='_blank' rel='noopener noreferrer'>
                            Git Hub
                        </Footer.Link>
                        <Footer.Link href="https://discord.gg/juAEJrNr" target='_blank' rel='noopener noreferrer'>
                            Discord
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>

                <div>
                    <Footer.Title title="Legal"/>
                    <Footer.LinkGroup col>
                        <Footer.Link href='#'>
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href="#">
                            Terms & Conditions
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                
            </div>
        </div> 
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
            <Footer.Copyright href="#" by="Nirav's Blog" year={new Date().getFullYear()}/>
        </div>
        <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/nrpatel69420/" target='_blank' rel='noopener noreferrer' icon={BsInstagram} />
            <Footer.Icon href="https://github.com/nrpatel370" icon={BsGithub} />
            
        </div>
       </div>
    </Footer>
  )
}

export default FooterComponent
