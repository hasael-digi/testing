import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { TfiLocationPin } from 'react-icons/tfi';
const Contact = () => {
  return (
    <div
      id='contact'
      className='flex mt-10 flex-col items-center justify-center gap-10 button_gradient bg-opacity-80 shadow-lg w-full py-16 px-14 rounded-t-[70px] relative '
    >
      <div className='flex items-center justify-center text-white '>
        <h1 className='font-bold text-[34px] uppercase border-b tracking-wide cursor-default shadow-sm shadow-black p-2 rounded-2xl '>CONTACT</h1>
      </div>
      <div className='flex flex-col md:flex-row justify-between gap-8'>
        <div className='w-full md:w-[40%] text-white flex flex-col gap-6'>
          <h1 className='text-[24px] font-medium'>Drop Me a Message</h1>
          <p className='text-[16px] tracking-wide text-slate-200 md:text-slate-400 '>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, porro quia dicta placeat vero iste iure cum, sint voluptatibus magni,
            voluptatem labore eius optio? Doloremque, praesentium? Nesciunt quos omnis repudiandae.
          </p>
          <div className='flex flex-col gap-4'>
            <span className='flex items-center  gap-4 cursor-pointer  text-[20px]'>
              <span className='py-4 px-4 bg-sky-500 rounded-2xl shadow-lg hover:scale-105 duration-150 ease-out'>
                <BsTelephone />
              </span>
              <p className='text-slate-200 hover:opacity-75'>0857-7796-0382</p>
            </span>
            <span className='flex items-center  gap-4 cursor-pointer  text-[20px]'>
              <span className='py-4 px-4 bg-sky-500 rounded-2xl shadow-lg hover:scale-105 duration-150 ease-out'>
                <HiOutlineMail />
              </span>
              <p className='text-slate-200 hover:opacity-75'>hasaelbutarbutar80@gmail.com</p>
            </span>
            <span className='flex items-center gap-4 cursor-pointer  text-[20px]'>
              <span className='py-4 px-4 bg-sky-500 rounded-2xl shadow-lg hover:scale-105 duration-150 ease-out'>
                <TfiLocationPin />
              </span>
              <p className='text-slate-200 hover:opacity-75'>Kec. Kalideres, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta</p>
            </span>
          </div>
        </div>

        <div className='flex flex-col py-6 px-4 gap-6 bg-cyan-400 w-full md:w-[35%] rounded-lg shadow-lg shadow-black'>
          <form
            action='submit'
            className='flex flex-col items-center gap-4 w-full'
          >
            <input
              type='name'
              placeholder='Name'
              className='w-full py-2 px-2 rounded-lg'
            />
            <input
              type='Email'
              placeholder='Email'
              className='w-full py-2 px-2 rounded-lg'
            />
            <textarea
              placeholder='Message'
              className='h-[140px] w-full py-4 px-2 rounded-lg'
              style={{ resize: 'none' }}
            ></textarea>
          </form>
          <button className='py-2 px-4 flex justify-center items-center w-[45%] bg-teal-300 rounded-md active:scale-95 duration-150 ease-in font-bold'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
