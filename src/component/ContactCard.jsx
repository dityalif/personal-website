const ContactCard = (props) => {
  return (
    <div>
          <a href={props.link} className='my-5 flex item-center '>
              <div key={props.id} className='flex w-full justify-between bg-gradient-to-r from-[#00587A] to-[#0F3057] p-5 align-center items-center text-white mx-auto rounded-2xl shadow-2xl transition duration-200 hover:scale-105'>
                  <div className="flex align-center items-center">  
                    <img src={props.img} className='w-11 h-11 mr-5'/>
                    <div className='flex flex-col'>  
                        <h1 className='text-2xl font-bold'>{props.name}</h1>
                        <p>{props.username}</p>
                    </div>
                  </div>
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 place-items-end" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </div>
          </a>
    </div>
  )
}

export default ContactCard