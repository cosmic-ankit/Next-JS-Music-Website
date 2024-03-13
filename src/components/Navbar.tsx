

// Now if we want to use react hooks within next js then we cant use them directly, we need to add a line called 'use client'This will create it a client component, jo bhi react se dom manipulation hota hai wo client side par hota hai, so we have to write use client to make it run on a client side.* So whenever we have to use react hook we need to make it a client component

"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
// Next js gives us link facility directly, when we use it te page dont render again and again wjen we click on any link or routes



function Navbar({ className }: { className?: string }) {

  const [active, setActive] = useState<string | null>(null);


  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>

      <Menu setActive={setActive}>

        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">
          </MenuItem>
        </Link>

        {/* We will be using hoverlinked here instead of link since we wanted the options to be hovered here rather than routing to some other page */}
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">Web Development</HoveredLink>
          
          
            <HoveredLink href="/courses">Web Development</HoveredLink>
          
          
            <HoveredLink href="/courses">Web Development</HoveredLink>
          
          
            <HoveredLink href="/courses">Web Development</HoveredLink>
          
          
            <HoveredLink href="/courses">Web Development</HoveredLink>
          </div>
        </MenuItem>

        <Link href={"/contact"}>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
        </MenuItem>
        </Link>


      </Menu>

    </div>
  )
}

export default Navbar
