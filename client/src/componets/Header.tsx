import logo from '../assets/download (1).png'


export default function Header() {
    return (
        <nav className=''>
            <div>  
                <a href="/">
                    <div className='flex items-center w-auto justify-items-center gap-2'>
                        <img src={logo} alt="" className='size-10'/>
                        <div className="text-xl font-sans text-pink-500 font-semibold">
                            Project Managment
                        </div>
                    </div>
                </a>
            </div>
        </nav>
    )
}
