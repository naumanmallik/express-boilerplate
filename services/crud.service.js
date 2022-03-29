const createError = require('http-errors');

class CrudService {
  constructor(model) {
    this.model = model;
  }

  async add(payload) {
    return await this.model.create(payload);
  }

  async update(payload, id, message) {
    let model = await this.model.findByIdAndUpdate(id, payload, { new: true });
    if (!model) {
      throw createError(404, message);
    }
    return model;
  }

  async getModelById(id, notFoundMessage, populatedArray = []) {
    let model = await this.model.findById(id).populate(populatedArray);
    if (!model) {
      throw createError(404, notFoundMessage);
    }
    return model;
  }

  async findObjAndUpdate(obj, payload, message) {
    let model = await this.model.findOneAndUpdate(obj, payload, {
      new: true,
    });
    if (!model) {
      throw createError(404, message);
    }
    return model;
  }

  async getModelByObject(obj, notFoundMessage) {
    let model = await this.model.findOne(obj);
    if (!model) {
      throw createError(404, notFoundMessage);
    }
    return model;
  }
}

exports.CrudService = CrudService;
