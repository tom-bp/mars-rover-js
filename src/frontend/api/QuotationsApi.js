import { get } from "./Api.js";

const baseUrl = "/api/quotations";

export async function getQuotation(quotationId) {
    return await get(baseUrl + `/${quotationId}`);
}
