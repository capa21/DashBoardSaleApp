
export interface Sale {
    id_shop: number,
    id_channel: number,
    id_order: string,
    reference: string,
    total: number,
    last_notified_progress: string,
    status: string,
    payment_accredited_at: string,
    cart_orders: any[],
    ff_type: string,
    shipment_pk: string,
    id_pack: number,
    shipment_pack_id: [{name: string, value: string}],
    customer_name: string,
    brands: string,
    no_items: number,
    invoice_status: string
}

export interface SaleResposta {
  "total": number,
  "rows": Sale[]
}


