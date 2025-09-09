import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import CartItem from '@/components/CartItem';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';

const ShoppingCart = () => {
  const { cartItems, getTotalItems, getTotalPrice } = useCart();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-card py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center py-16">
            <div className="w-24 h-24 bg-plant-light rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">
              Discover our beautiful collection of houseplants and start building your green sanctuary
            </p>
            <Button asChild className="bg-gradient-button hover:shadow-button">
              <Link to="/plants">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-card py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Button variant="ghost" asChild className="mr-4">
              <Link to="/plants">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Plants
              </Link>
            </Button>
            <h1 className="text-3xl font-bold text-foreground">Shopping Cart</h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-foreground">
                  Your Plants ({totalItems} {totalItems === 1 ? 'item' : 'items'})
                </h2>
              </div>
              
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-border/50 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Total Items:</span>
                    <span>{totalItems}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-foreground">Total Cost:</span>
                    <span className="text-2xl font-bold text-primary">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-gradient-button hover:shadow-button transition-all duration-300"
                      onClick={() => alert('Coming Soon! Checkout functionality will be available soon.')}
                    >
                      <CreditCard className="w-4 h-4 mr-2" />
                      Checkout
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <Link to="/plants">
                        Continue Shopping
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="text-xs text-muted-foreground text-center pt-4">
                    Secure checkout • Free shipping on orders over $50
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;