import { useState } from 'react';
import { Plant } from '@/types';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Plus } from 'lucide-react';
import { categories } from '@/data/plants';

interface PlantCardProps {
  plant: Plant;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const { addToCart, cartItems } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  
  const isInCart = cartItems.some(item => item.id === plant.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart(plant);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }
  };

  return (
    <Card className="group hover:shadow-card transition-all duration-300 overflow-hidden border-border/50">
      <div className="aspect-square overflow-hidden bg-gradient-card">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <Badge 
            variant="secondary"
            className="text-xs font-medium bg-plant-light text-primary border-none"
          >
            {categories[plant.category]}
          </Badge>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{plant.name}</h3>
        <p className="text-muted-foreground text-sm mb-3">{plant.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">${plant.price}</span>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <Button
          onClick={handleAddToCart}
          disabled={isInCart}
          className={`w-full transition-all duration-300 ${
            isInCart 
              ? 'bg-sage hover:bg-sage text-foreground cursor-not-allowed' 
              : 'bg-gradient-button hover:shadow-button hover:scale-[1.02]'
          }`}
        >
          {isInCart ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Added to Cart
            </>
          ) : isAdded ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Added!
            </>
          ) : (
            <>
              <Plus className="w-4 h-4 mr-2" />
              Add to Cart
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlantCard;