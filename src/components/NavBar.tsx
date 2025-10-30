import React from 'react'

function NavBar() {
  return (
    <header >
        <nav className='s'>
            <img src="/logo.svg" alt="Apple Logo" className='h-10 w-10'/>
            <ul className=''>
                {
                    [{lable:'store'},
                    {lable:'Mac'},
                    {lable:'Iphone'},
                    {lable:'Watch'},
                    {lable:'Vision'},
                    {lable:'AirPods'},
                    ].map(({lable})=>(
                        <li key={lable}>
                            <a href={lable}>{lable}</a>
                        </li>
                    ))
                }
            </ul>
            <div className="flex-center gap-3">
                <button>
                    <img src="search.svg" alt="search" />
                </button>
                 <button>
                    <img src="cart.svg" alt="cart" />
                </button>
            </div>
        </nav>
    </header>
  
  )
}

export default NavBar