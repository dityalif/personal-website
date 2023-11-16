const ContactCard = (props) => {
  return (
    <div>
            <a href={props.link} className='block m-5'>
                <div key={props.id} className='flex w-96 bg-gradient-to-r from-[#00587A] to-[#0F3057] p-5 align-center items-center text-white mx-5 rounded-2xl shadow-2xl transition duration-200 hover:scale-105'>
                    <img src={props.img} className='w-11 h-11 mr-5'/>
                    <div className='flex flex-col'>  
                        <h1 className='text-2xl font-bold'>{props.name}</h1>
                        <p>{props.username}</p>
                    </div>
                </div>
            </a>
    </div>
  )
}

export default ContactCard