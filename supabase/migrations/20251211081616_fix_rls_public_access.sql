/*
  # Fix RLS for Public Access

  1. Changes
    - Recreate policies without role restrictions for public tables
    - Use PUBLIC role for INSERT policies to ensure anonymous access works
    
  2. Security
    - Orders and order_items allow public inserts (required for checkout)
    - Products allow public reads only
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Public read access for products" ON products;
DROP POLICY IF EXISTS "Public can create orders" ON orders;
DROP POLICY IF EXISTS "Authenticated users can view own orders" ON orders;
DROP POLICY IF EXISTS "Public can create order items" ON order_items;
DROP POLICY IF EXISTS "Authenticated users can view own order items" ON order_items;

-- Products: Public read access
CREATE POLICY "products_select_policy"
  ON products
  FOR SELECT
  TO public
  USING (true);

-- Orders: Public insert for checkout
CREATE POLICY "orders_insert_policy"
  ON orders
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Orders: Authenticated users can view their own orders
CREATE POLICY "orders_select_policy"
  ON orders
  FOR SELECT
  TO authenticated
  USING (email = (auth.jwt() ->> 'email'));

-- Order Items: Public insert
CREATE POLICY "order_items_insert_policy"
  ON order_items
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Order Items: Authenticated users can view their own
CREATE POLICY "order_items_select_policy"
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
