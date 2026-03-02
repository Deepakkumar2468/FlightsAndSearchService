const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'City created successfully',
            err: {}
        });
    } catch (error) {
        console.error('Error creating city:', error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to create city',
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'City deleted successfully',
            err: {}
        });
    } catch (error) {
        console.error('Error deleting city:', error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to delete city',
            err: error
        });
    }
}           

const update = async (req, res) => {
    try {
        console.log(req.body);
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'City updated successfully',
            err: {}
        });
    } catch (error) {
        console.error('Error updating city:', error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to update city',
            err: error
        });
    }
}

const getCityById = async (req, res) => {
    try {
        const city = await cityService.getCityById(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: 'City fetched successfully',
            err: {}
        });
    } catch (error) {
        console.error('Error fetching city by ID:', error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to fetch city by ID',
            err: error
        });
    }
}

const getAllCities = async (req, res) => {
    try {
        // console.log(req.params);
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: 'Cities fetched successfully',
            err: {}
        });
    } catch (error) {
        console.error('Error fetching all cities:', error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to fetch cities',
            err: error
        });
    }
}       


module.exports = {
    create,
    destroy,
    update,
    getCityById,
    getAllCities    
};