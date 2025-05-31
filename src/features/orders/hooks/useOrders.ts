import { useEffect, useState } from "react";
import { ordersService } from "../services/Orders.service";
import type { OrderI } from "../types/Order.interface";

export const useOrders = () => {
  // définition et initialisation des variables d'état
  const [orders, setOrders] = useState<OrderI[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchOrders = () => {
    setLoading(true);
    setError(null);
    ordersService
      .getAll()
      .then((fetchOrders) => setOrders(fetchOrders))
      .catch((err) =>
        setError(err instanceof Error ? err.message : String(err))
      )
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  const deleteOrderById = async (id: string) => {
    setLoading(true);
    setError(null);
    //   alternative gestion des promesses
    try {
      await ordersService.delete(id);
      setOrders((fetchOrders) =>
        fetchOrders.filter((order) => order.id !== id)
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  //   return les valeurs que les composants utilisent
  return {
    orders,
    loading,
    error,
    deleteOrder: deleteOrderById,
  };
};
