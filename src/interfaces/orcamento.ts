import { IServiceItem } from "./serviceItem";
import { StatusEnum } from "./statusEnum";

export interface IOrcamento {
    id: string,
    client: string,
    title: string,
    items: IServiceItem[],
    discountPct: string,
    status: StatusEnum,
    createdAt: string,
    updatedAt: string,
}