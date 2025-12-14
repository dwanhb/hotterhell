/*
  # Molten Sauce E-commerce Schema

  1. New Tables
    - `products`
      - `id` (uuid, primary key) - Unique product identifier
      - `name` (text) - Product name
      - `description` (text) - Product description
      - `price` (decimal) - Product price in USD
      - `image_url` (text) - Product image URL
      - `stock` (integer) - Available inventory
      - `created_at` (timestamptz) - Creation timestamp
    
    - `orders`
      - `id` (uuid, primary key) - Unique order identifier
      - `email` (text) - Customer email
      - `name` (text) - Customer name
      - `total_amount` (decimal) - Total order amount
      - `status` (text) - Order status
      - `created_at` (timestamptz) - Order timestamp
    
    - `order_items`
      - `id` (uuid, primary key) - Unique order item identifier
      - `order_id` (uuid, foreign key) - Reference to orders table
      - `product_id` (uuid, foreign key) - Reference to products table
      - `quantity` (integer) - Quantity ordered
      - `price` (decimal) - Price at time of order
      - `created_at` (timestamptz) - Creation timestamp

  2. Security
    - Enable RLS on all tables
    - Products: Public read access
    - Orders: Authenticated users can view their own orders
    - Order items: Authenticated users can view their own order items

  3. Initial Data
    - Insert Molten Sauce product with pricing
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price decimal(10, 2) NOT NULL,
  image_url text NOT NULL,
  stock integer NOT NULL DEFAULT 1000,
  created_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  name text NOT NULL,
  total_amount decimal(10, 2) NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  quantity integer NOT NULL DEFAULT 1,
  price decimal(10, 2) NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Products policies (public read)
CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

-- Orders policies (public insert for checkout, read own orders if authenticated)
CREATE POLICY "Anyone can create orders"
  ON orders FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Users can view own orders"
  ON orders FOR SELECT
  TO authenticated
  USING (email = current_setting('request.jwt.claims', true)::json->>'email');

-- Order items policies
CREATE POLICY "Anyone can create order items"
  ON order_items FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Users can view own order items"
  ON order_items FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.email = current_setting('request.jwt.claims', true)::json->>'email'
    )
  );

-- Insert Molten Sauce product
INSERT INTO products (name, description, price, image_url, stock)
VALUES (
  'Molten Sauce - Original Heat',
  'Not made. Unleashed. This volcanic hot sauce erupts with flavor and devastates boring meals. Crafted with the finest peppers forged in fire, Molten Sauce delivers an intense heat that will transform everything you eat. Handle at your own risk.',
  14.99,
  '/openart-image_cpvysm49_1765351737677_raw.png',
  1000
)
ON CONFLICT DO NOTHING;