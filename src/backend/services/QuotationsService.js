import NotFoundError from "../errors/NotFoundError.js";

export function getQuotation(quotationId) {
    const quotations = [
        {
            id: 0,
            quotation:
                "The International Space Station stands as proof that when we set our minds to something hard, when we work together, we can do anything, including solving our problems here on Earth.",
            attribution: "Scott Kelly",
        },
        {
            id: 1,
            quotation: "I submit that Mars is the 21st-century destination for humans. There are plenty of reasons why going to Mars makes sense.",
            attribution: "Terry Virts",
        },
    ];
    if (quotationId > quotations.length) {
        throw new NotFoundError("Quotation not found");
    }
    return quotations[quotationId];
}
