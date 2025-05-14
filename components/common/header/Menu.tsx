import Link from "next/link";
import { ShoppingCart, MenuIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import ModeToggle from "./ModeToggle";
import UserButton from "./user-button";
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
        <UserButton />
      </nav>

      {/* Mobile Nav */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger
            className={
              buttonVariants({ variant: "ghost", size: "icon" }) +
              " align-middle"
            }
          >
            <MenuIcon className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start px-5">
            <div className="flex justify-between items-center gap-2 mt-3">
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
            <UserButton />
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
