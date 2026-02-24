const { City } = require('../models/index');

class CityRepository {
    
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.error('Error creating city:', error);
            throw error;
        }
    }

    async deleteCity(id) {
        try {
            const result = await City.destroy({ where: { id } });
            return result;
        } catch (error) {
            console.error('Error deleting city:', error);
            throw error;
        }
    }

    async updateCity(cityId, data) {
        try {
            const result = await City.update(data, 
                { where: 
                    { id: cityId } });
            return result;
        } catch (error) {
            console.error('Error updating city:', error);
            throw error;
        }
    }

    async getCityById(id) {
        try {
            const city = await City.findByPk(id);
            return city;
        } catch (error) {
            console.error('Error fetching city by ID:', error);
            throw error;
        }
    }

    async getAllCities() {
        try {
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.error('Error fetching all cities:', error);
            throw error;
        }
    }
}

module.exports = CityRepository;    