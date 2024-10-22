const { test, expect } = require('@playwright/test');

test('GET Request', async ({ request }) => {
    const response = await request.get("https://api.restful-api.dev/objects");
    const data = await response.json();
    console.log(data);
    expect(response.status()).toBe(200); // Tambahkan assertion untuk memeriksa status
});

test('POST Request', async ({ request }) => {
    const reqHeaders = {
        Accept: 'application/json'
    };

    const body = {
        "name": "Apple MacBook Pro 16",
        "data": {
            "year": 2019,
            "price": 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
        }
    };

    const response = await request.post("https://api.restful-api.dev/objects", {
        headers: reqHeaders,
        data: body
    });

    const responseData = await response.json();
    console.log(responseData); // Menampilkan respons
    expect(response.status()).toBe(201); // Tambahkan assertion untuk memeriksa status
});
