import Link from "next/link";
import TypewriterComponent from "./typewriter-effect";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ModeToggle";

export default function Navbar() {
  return (
    <div className="w-full backdrop-blur-lg bg-white/80 dark:bg-black/90 border-b-2 border-gray-200 dark:border-gray-600 shadow-xl fixed top-0 z-50 transition-all duration-300 ease-in-out">
        <div className="mx-auto max-w-[70%]">

      <nav className="flex items-center justify-between w-full py-4 px-8">
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="/avatar.png" alt="Avatar" />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>

          <div className="ml-6">
            <TypewriterComponent />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <NavigationMenu>
            <NavigationMenuList className="flex">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Experience
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Work
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ModeToggle />
        </div>
      </nav>
      </div>

    </div>
  );
}
