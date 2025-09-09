import { plants, categories } from '@/data/plants';
import PlantCard from '@/components/PlantCard';
import { Badge } from '@/components/ui/badge';
import { Leaf } from 'lucide-react';

const ProductListing = () => {
  const groupedPlants = plants.reduce((acc, plant) => {
    if (!acc[plant.category]) {
      acc[plant.category] = [];
    }
    acc[plant.category].push(plant);
    return acc;
  }, {} as Record<string, typeof plants>);

  return (
    <div className="min-h-screen bg-gradient-card py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 rounded-full bg-gradient-hero shadow-button">
              <Leaf className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Plant Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of beautiful houseplants, each chosen for their unique beauty and easy care
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(groupedPlants).map(([category, categoryPlants]) => (
            <section key={category}>
              <div className="flex items-center mb-8">
                <Badge 
                  variant="outline" 
                  className="text-lg py-2 px-4 border-2 border-primary/20 bg-plant-light text-primary font-semibold"
                >
                  {categories[category as keyof typeof categories]}
                </Badge>
                <div className="flex-1 h-px bg-border ml-4"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryPlants.map((plant) => (
                  <PlantCard key={plant.id} plant={plant} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;