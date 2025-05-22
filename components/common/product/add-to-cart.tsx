"use client";

import { Button } from "@/components/ui/button";
import { Plus, Minus, Loader } from "lucide-react";
import { toast } from "sonner";
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions";
import { CartItem, Cart } from "@/types";
import { redirect } from "next/navigation";
import { useTransition } from "react";

const AddToCart = ({ item, cart }: { item: CartItem; cart: Cart }) => {
  const [isPending, startTransition] = useTransition();

  const redirectToCart = () => {
    redirect("/cart");
  };

  const handleAddToCart = async () => {
    startTransition(async () => {
      const res = await addItemToCart(item);

      if (!res.success) {
        toast.error(res.message);
      }

      toast.success(`${res.message}`, {
        action: {
          label: "Go to cart",
          onClick: redirectToCart,
        },
      });
    });
  };

  const handleRemoveFromCart = async () => {
    startTransition(async () => {
      const res = await removeItemFromCart(item.productId);

      if (!res.success) {
        toast.error(res.message);
      }

      toast.success(`${res.message}`, {
        action: {
          label: "Go to cart",
          onClick: redirectToCart,
        },
      });
    });
  };

  const existItem =
    cart && cart.items?.find((x) => x.productId === item.productId);

  return existItem ? (
    <div className="mx-auto flex items-center justify-center gap-2">
      <Button
        type="button"
        variant="outline"
        onClick={handleRemoveFromCart}
        disabled={isPending}
      >
        {isPending ? (
          <Loader className="w-4 h-4 animate-spin" />
        ) : (
          <Minus className="w-4 h-4" />
        )}
      </Button>
      <span className="px-2">{existItem.qty}</span>
      <Button
        type="button"
        variant="outline"
        onClick={handleAddToCart}
        disabled={isPending}
      >
        {isPending ? (
          <Loader className="w-4 h-4 animate-spin" />
        ) : (
          <Plus className="w-4 h-4" />
        )}
      </Button>
    </div>
  ) : (
    <Button
      className="w-full"
      type="button"
      onClick={handleAddToCart}
      disabled={isPending}
    >
      {isPending ? (
        <Loader className="w-4 h-4 animate-spin" />
      ) : (
        <>
          <Plus className="w-4 h-4" />
          Add to cart
        </>
      )}
    </Button>
  );
};

export default AddToCart;
