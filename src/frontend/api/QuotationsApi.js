import { get } from "./Api.js";

const baseUrl = "/api/quotations";

export async function getQuotationOfTheDay() {
    return await get(baseUrl + `/of-the-day`);
}
