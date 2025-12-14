import { useState, useEffect } from 'react';
import { supabase, type Product } from './lib/supabase';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import StorySection from './components/StorySection';
import FoodShowcase from './components/FoodShowcase';
import TestimonialsSection from './components/TestimonialsSection';
import VideoSection from './components/VideoSection';
import ProductSection from './components/ProductSection';
import CheckoutModal from './components/CheckoutModal';
import Footer from './components/Footer';

function App() {
  const [product, setProduct] = useState<Product | null>(null);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .limit(1)
      .maybeSingle();

    if (error) {
      console.error('Error loading product:', error);
      return;
    }

    if (data) {
      setProduct(data);
    }
  };

  const handleBuyNow = () => {
    const productSection = document.getElementById('buy');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCart = (quantity: number) => {
    setCartQuantity(quantity);
    setIsCheckoutOpen(true);
  };

  const handleCheckout = async (name: string, email: string) => {
    if (!product) {
      throw new Error('Product not found');
    }

    const totalAmount = product.price * cartQuantity;

    const { data: orderData, error: orderError } = await supabase
      .from('orders')
      .insert({
        email,
        name,
        total_amount: totalAmount,
        status: 'pending',
      })
      .select()
      .maybeSingle();

    if (orderError) {
      console.error('Error creating order:', orderError);
      throw new Error(`Failed to create order: ${orderError.message}`);
    }

    if (!orderData) {
      throw new Error('Order was not created');
    }

    const { error: itemError } = await supabase
      .from('order_items')
      .insert({
        order_id: orderData.id,
        product_id: product.id,
        quantity: cartQuantity,
        price: product.price,
      });

    if (itemError) {
      console.error('Error creating order item:', itemError);
      throw new Error(`Failed to create order item: ${itemError.message}`);
    }

    setCartQuantity(0);
  };

  return (
    <div className="min-h-screen bg-black">
      <Hero onBuyNow={handleBuyNow} />
      <WhySection onBuyNow={handleBuyNow} />
      <StorySection />
      <FoodShowcase onBuyNow={handleBuyNow} />
      <TestimonialsSection />
      <VideoSection />
      <ProductSection product={product} onAddToCart={handleAddToCart} />
      <Footer />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        product={product}
        quantity={cartQuantity}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

export default App;
