import React from 'react'
import photo from '../Images/one.jpg';
import { AiFillCheckCircle } from "react-icons/ai";

const SignUp = () => {
  return (
    <div className="flex h-screen">
        <div className="bg-white w-full h-[100vh] md:w-[800px] md:m-auto md:h-[600px] md:p-8 md:rounded-md md:shadow-lg md:flex md:flex-row-reverse">
            <img src={photo} alt="notepad and laptop" className="rounded-b-md md:h-[100%] object-cover md:max-w-[50%] md:rounded-md"/>
            <section className="flex flex-col gap-6 p-8 md:h-[100%] md:max-w-[50%] md:translate-y-[-20px]">
                <h1 className="font-bold text-4xl">Stay Updated!</h1>
                <p className="text-xl">Join 60,000+ product managers receiving monthly updates on:</p>
                <ul>
                    <li className="text-lg flex"><AiFillCheckCircle className="mr-4 flex-shrink-0 md:translate-y-1" color="red" size="1.6rem" />Product discovery and building what matters</li>
                    <li className="text-lg flex mt-4"><AiFillCheckCircle className="mr-4 flex-shrink-0 md:translate-y-1" color="red" size="1.6rem" />Measuring to ensure updates are a success</li>
                    <li className="text-lg flex mt-4"><AiFillCheckCircle className="mr-4 flex-shrink-0 md:translate-y-[2px]" color="red" size="1.6rem" />And much more!</li>
                </ul>
            
                <form className="flex flex-col">
                    <label htmlFor="email" className="font-bold">Email address</label>
                    <input id="email" name="email" type="email" placeholder="email@company.com" className="border-2 rounded-md h-14 w-full pl-4 mt-2" required></input>
                    <button className="bg-black text-white h-14 rounded-md mt-6 hover:bg-red-500">Subscribe to monthly newsletter</button>
                </form>
            </section>
        </div>
    </div>
  )
}

export default SignUp