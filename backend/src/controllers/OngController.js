const connection = require("../database/connection");
const generateUniqueId = require("../utils/generateUniqueId");

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*')
        return response.json(ongs)
    },
    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body
        const id = generateUniqueId();
        const newRow = {
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        }
        await connection('ongs').insert(newRow)
        return response.json(newRow)
    }
}