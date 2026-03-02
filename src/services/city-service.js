const { CityRepository } = require('../repository/index');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }
    
    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.error('Error creating city:', error);
            throw error;
        }
    }               
     async updateCity(cityId, data) {
        try {
            const result = await this.cityRepository.updateCity(cityId, data);
            return result;
        } catch (error) {
            console.error('Error updating city:', error);
            throw error;
        }
    }

    async deleteCity(id) {
        try {
            const result = await this.cityRepository.deleteCity(id);
            return result;
        } catch (error) {
            console.error('Error deleting city:', error);
            throw error;
        }
    }

    async getCityById(id) {
        try {
            const city = await this.cityRepository.getCityById(id);
            return city;
        } catch (error) {
            console.error('Error fetching city by ID:', error);
            throw error;
        }
    }

    async getAllCities(filter) {
        try {
            const cities = await this.cityRepository.getAllCities({name: filter.name});
            return cities;
        } catch (error) {
            console.error('Error fetching all cities:', error);
            throw error;
        }
    }
}

module.exports = CityService;