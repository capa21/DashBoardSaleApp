import { Component, Input, OnInit } from '@angular/core';
import { Sale } from 'src/app/sales-dashboard/models/sale.model';

@Component({
  selector: 'yuju-sale-item',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.css']
})
export class SaleItemComponent implements OnInit {
  @Input()
  sale: Sale = {
            "id_shop": 0,
            "id_channel": 0,
            "id_order": "",
            "reference": "",
            "total": 0,
            "last_notified_progress": "",
            "status": "",
            "payment_accredited_at": "",
            "cart_orders": [],
            "ff_type": "",
            "shipment_pk": "",
            "id_pack": 0,
            "shipment_pack_id": [
                {
                    "name": "",
                    "value": ""
                }
            ],
            "customer_name": "",
            "brands": "",
            "no_items": 0,
            "invoice_status": ""
        }
  constructor() { }

  ngOnInit(): void {
  }

}
