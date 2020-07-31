/* eslint-disable strict */

const DatalogsService = {
//GETS ALL THE DATALOGS
  getAllDatalogs(db) {
    return db
      .from('my_baby_log_events')
      .select('*');
  },

  //GETS ONLY DATALOGS OF SPECIFIED EVENT CATEGORY
  getDatalogsByEventCategory(db, event) {
    return db
      .from('my_baby_log_events')
      .select('*')
      .where('event_category', 'ILIKE', `%${event}%`);
  },

};


module.exports = DatalogsService;