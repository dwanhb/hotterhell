/*
  # Fix Orders Table RLS Policy

  1. Changes
    - Drop and recreate the orders INSERT policy to ensure it's properly applied
    - Drop and recreate the order_items INSERT policy to ensure it's properly applied
    
  2. Security
    - Allow anonymous and authenticated users to insert orders
    - Allow anonymous and authenticated users to insert order items
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can create orders" ON orders;
DROP POLICY IF EXISTS "Anyone can create order items" ON order_items;

-- Recreate orders INSERT policy
CREATE POLICY "Anyone can create orders"
  ON orders
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Recreate order_items INSERT policy
CREATE POLICY "Anyone can create order items"
  ON order_items
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
