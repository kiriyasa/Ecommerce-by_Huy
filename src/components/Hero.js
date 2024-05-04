import React from 'react'
import {Link} from 'react-router-dom' 


function Hero() {
  return (
    
    <div class="grid max-w-screen-xl max-h-200 px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Sáng tạo Mới, Công nghệ Mới.</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Từ thanh toán đến tuân thủ thuế bán hàng toàn cầu, các công ty trên khắp thế giới sử dụng PhoneHub để đơn giản hóa quy trình thanh toán của họ.</p>
            <Link to='/login'>
              <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  Kết nối với chúng tôi
              </a> 
            </Link>
           
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/>
        </div>    
            
    </div>
    
  )
}

export default Hero