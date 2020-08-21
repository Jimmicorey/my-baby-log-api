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

  //POST NEW DATALOGS TO DATABASE
  insertNewDatalog(db, newEvent) {
    return db
      .insert(newEvent)
      .into('my_baby_log_events')
      .returning('*')
      .then(rows => rows[0]);
  },

};


module.exports = DatalogsService;