import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Heart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroBackground from '@/assets/hero-bg.jpg';

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Bring Nature
            <span className="block text-plant-light">Into Your Home</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Discover our curated collection of beautiful houseplants that transform your space into a green sanctuary
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-gradient-button hover:scale-105 transition-all duration-300 shadow-button text-lg px-8 py-6 group"
          >
            <Link to="/plants">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">About GreenLeaf</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a passion for bringing the beauty of nature indoors, GreenLeaf is your trusted partner in creating stunning plant collections. 
              We carefully curate each plant in our inventory, ensuring you receive healthy, vibrant specimens that will thrive in your home. 
              Whether you're a seasoned plant parent or just beginning your green journey, we're here to help you cultivate the perfect indoor garden.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-card transition-all duration-300 border-border/50">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-plant-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Hand-selected plants from trusted growers, ensuring the highest quality for your home
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-card transition-all duration-300 border-border/50">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-plant-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Care</h3>
                <p className="text-muted-foreground">
                  Comprehensive care guides and ongoing support to help your plants thrive
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-card transition-all duration-300 border-border/50">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-plant-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Satisfaction Guaranteed</h3>
                <p className="text-muted-foreground">
                  30-day guarantee on all plants with free replacement for any issues
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;