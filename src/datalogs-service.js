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




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* WORKING CODE NOTES DELETE WHEN THIS PUPPY STARTS WORKING!!!!!! */
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


//this SELECTS SPECIFIC datalog(s) per 'searchTerm' in the database
//converted to a FUNCTION for REUSABILITY
/*
function searchByEventCategory(searchTerm) {
    db.from('my_baby_log_events')
        .select('id', 'event_category', 'date_created')
        .from('my_baby_log_events')
        .where('event_category', 'ILIKE', `%${searchTerm}%`)
        .then(result => {
            console.log(result);
        });
}
searchByEventCategory('Wet');
*/

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////