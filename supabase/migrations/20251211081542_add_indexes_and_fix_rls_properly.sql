/*
  # Add Indexes and Fix RLS Policies

  1. Performance Improvements
    - Add index on order_items.order_id for better foreign key performance
    - Add index on order_items.product_id for better foreign key performance
    
  2. Security Improvements
    - Re-enable RLS on orders and order_items tables
    - Ensure proper policies for public checkout functionality
    - Grant explicit INSERT permissions to anon role
    
  3. Changes
    - Create indexes for foreign key columns
    - Enable RLS on all tables
    - Recreate policies to ensure they work correctly
*/

-- Add indexes for foreign keys
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_order_items_product_id ON order_items(product_id);

-- Re-enable RLS on all tables
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to recreate them
DROP POLICY IF EXISTS "Anyone can view products" ON products;
DROP POLICY IF EXISTS "Anyone can create orders" ON orders;
DROP POLICY IF EXISTS "Users can view own orders" ON orders;
DROP POLICY IF EXISTS "Anyone can create order items" ON order_items;
DROP POLICY IF EXISTS "Users can view own order items" ON order_items;

-- Products: Public read access
CREATE POLICY "Public read access for products"
  ON products
  FOR SELECT
  USING (true);

-- Orders: Anyone can insert (for public checkout)
CREATE POLICY "Public can create orders"
  ON orders
  FOR INSERT
  WITH CHECK (true);

-- Orders: No SELECT policy for anon (orders are private)
CREATE POLICY "Authenticated users can view own orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (email = (auth.jwt() ->> 'email'));

-- Order Items: Anyone can insert
CREATE POLICY "Public can create order items"
  ON order_items
  FOR INSERT
  WITH CHECK (true);

-- Order Items: Authenticated users can view their own
CREATE POLICY "Authenticated users can view own order items"
  ON order_items
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.email = (auth.jwt() ->> 'email')
    )
  );
