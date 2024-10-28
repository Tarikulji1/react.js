import React from 'react'

export default function Card({username, btnText="Visit Me"}) {
    console.log(username);
    
  return (
    <figure className="md:flex bg-slate-200 rounded-2xl m-4 border p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/28795942/pexels-photo-28795942/free-photo-of-elegant-bridal-bouquet-with-pink-roses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
                <p className="text-lg font-medium">
                    “Tailwind CSS is the only framework that I've seen scale
                    on large teams. It’s easy to customize, adapts to any design,
                    and the build size is tiny.”
                </p>
            </blockquote>
            <figcaption className="font-medium">
                <div className="text-sky-700 dark:text-sky-400 text-2xl">
                    {username}
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                    Staff Engineer, Algolia
                </div>
                <button className='mt-2 cursor-pointer font-semibold text-black'>{btnText || "Visit Me"}</button>
            </figcaption>
        </div>
    </figure>
  )
}
