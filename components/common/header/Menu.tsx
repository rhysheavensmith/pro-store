"use client";

import Link from "next/link";
import { ShoppingCart, UserIcon, EllipsisVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import ModeToggle from "./ModeToggle";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      {/* Desktop Nav */}
      <nav className="hidden md:flex w-full max-w-xs gap-4">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in">
            <UserIcon className="mr-2 h-4 w-4" />
            Sign In
          </Link>
        </Button>
      </nav>

      {/* Mobile Nav */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start px-5">
            <div className="flex justify-between items-center gap-4 mt-1">
              <SheetTitle>Menu</SheetTitle>
              <ModeToggle />
            </div>

            <Button
              asChild
              variant="ghost"
              className="mt-2 w-full justify-start"
            >
              <Link href="/cart">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Cart
              </Link>
            </Button>
            <Button asChild className="mt-2 w-full justify-start">
              <Link href="/sign-in">
                <UserIcon className="mr-2 h-4 w-4" />
                Sign In
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
