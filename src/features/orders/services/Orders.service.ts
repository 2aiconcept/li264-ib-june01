import axios from "axios";
import httpClient from "../../../shared/services/HttpClient";
import type { OrderI } from "../types/Order.interface";

const ORDERS_ENDPOINT = "/orders";

/**
 * Récupère toutes les commandes.
 * @returns Promise<OrderI[]> Une promesse qui résout avec un tableau d'objets OrderI.
 */
export const getAllOrders = async (): Promise<OrderI[]> => {
  const response = await httpClient.get<OrderI[]>(ORDERS_ENDPOINT);
  return response.data;
};

/**
 * Récupère une commande spécifique par son ID.
 * Renvoie null si la commande n'est pas trouvée (404).
 * @param id - L'ID de la commande à récupérer.
 * @returns Promise<OrderI | null> Une promesse qui résout avec un objet OrderI ou null.
 */
export const getOrderById = async (id: string): Promise<OrderI | null> => {
  try {
    const response = await httpClient.get<OrderI>(`${ORDERS_ENDPOINT}/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }
    throw error;
  }
};

/**
 * Crée une nouvelle commande.
 * @param orderData - Les données de la commande à créer (sans l'ID).
 * @returns Promise<OrderI> Une promesse qui résout avec l'objet OrderI de la commande créée.
 */
export const createOrder = async (order: OrderI): Promise<OrderI> => {
  const response = await httpClient.post<OrderI>(ORDERS_ENDPOINT, order);
  return response.data;
};

/**
 * Met à jour une commande existante.
 * @param id - L'ID de la commande à mettre à jour.
 * @param orderData - Les données partielles ou complètes de la commande pour la mise à jour.
 * @returns Promise<OrderI> Une promesse qui résout avec l'objet OrderI de la commande mise à jour.
 */
export const updateOrder = async (id: string, orderData: Partial<OrderI>) => {
  const response = await httpClient.put<OrderI>(
    `${ORDERS_ENDPOINT}/${id}`,
    orderData
  );
  return response.data;
};

/**
 * Supprime une commande par son ID.
 * @param id - L'ID de la commande à supprimer.
 * @returns Promise<void> Une promesse qui résout lorsque la suppression est terminée.
 */
export const deleteOrder = async (id: string): Promise<OrderI> => {
  const response = await httpClient.delete<OrderI>(`${ORDERS_ENDPOINT}/${id}`);
  return response.data;
};

// Optionnel : exporter toutes les fonctions regroupées dans un objet service
export const ordersService = {
  getAll: getAllOrders,
  getById: getOrderById,
  create: createOrder,
  update: updateOrder,
  delete: deleteOrder,
};
