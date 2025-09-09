import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { getTotalItems } = useCart();
  const location = useLocation();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="p-2 rounded-lg bg-gradient-hero shadow-button group-hover:shadow-lg transition-all duration-300">
            <Leaf className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">GreenLeaf</span>
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/plants" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === '/plants' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Plants
          </Link>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="relative group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Link to="/cart">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
              {totalItems > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary hover:bg-primary"
                >
                  {totalItems}
                </Badge>
              )}
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;