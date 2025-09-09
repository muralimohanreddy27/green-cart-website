import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    updateQuantity(item.id, item.quantity - 1);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <Card className="overflow-hidden border-border/50 hover:shadow-soft transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-card">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
              <p className="text-primary font-semibold">${item.price.toFixed(2)} each</p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDecrease}
                  className="h-8 w-8 p-0 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-lg font-semibold min-w-[2rem] text-center">
                  {item.quantity}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleIncrease}
                  className="h-8 w-8 p-0 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-lg font-bold text-primary">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRemove}
                  className="h-8 w-8 p-0 text-destructive border-destructive/20 hover:bg-destructive hover:text-destructive-foreground transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartItem;