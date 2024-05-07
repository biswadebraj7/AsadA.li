import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Nav = () => {
    const Links=<>

    
        <li> <a to={'/'} className='font-normal text-xl text-[#000000]'>Products</a> </li>
        <li> <a to={'/'} className='font-normal text-xl text-[#000000]'>Story</a> </li>
        <li> <a to={'/'} className='font-normal text-xl text-[#000000]'>Manufacturing</a> </li>
        <li> <a to={'/'} className='font-normal text-xl text-[#000000]'>About Us</a> </li>
        <li> <a to={'/'} className='font-normal text-xl text-[#000000]'>Team</a> </li>
 
      
 
    </>

    const Linkend=<>
    <li><a href="" className=" w-5 h-5 text-[#000000]">  <CiSearch className=" w-5 h-5 font-semibold text-[#000000]" /></a></li>
    <details class="dropdown">
  <summary class="m-1 ">EN</summary>
  <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>BN</a></li>
    <li><a>EN</a></li>
  </ul>
</details>
    <li><a href=""><HiOutlineShoppingBag /></a></li>
    <li><a href=""><FaRegUserCircle className=" w-8 h-8" /></a></li>
    <li><a href="" className=" font-normal text-xl text-[#000000]">Log out</a></li>
    </>
    
  return (
<>
<div className="mx-auto max-w-[1620px]">
<div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {Links}
      </ul>
    </div>
    <a className=" font-normal text-2xl text-[#000000]">Asad Ali</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {Links}
    </ul>
  </div>
  <div className="navbar-end">
   <ul className=" flex justify-start items-center gap-4">
    {Linkend}

   </ul>
  </div>
</div>

</div>
</>
  )
}

export default Nav
