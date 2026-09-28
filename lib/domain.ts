export type OrderStatus = "pending" | "confirmed" | "preparing" | "ready" | "out_for_delivery" | "completed" | "cancelled";
export type ReservationStatus = "pending" | "confirmed" | "seated" | "completed" | "cancelled";

export interface MenuItem { id:string; name:string; description:string; price:number; category:string; available:boolean; imageUrl?:string; }
export interface Order { id:string; customerId:string; items:{menuItemId:string; quantity:number; unitPrice:number}[]; subtotal:number; deliveryFee:number; total:number; status:OrderStatus; createdAt:string; }
export interface Reservation { id:string; customerId?:string; name:string; phone:string; date:string; time:string; guests:number; status:ReservationStatus; }
