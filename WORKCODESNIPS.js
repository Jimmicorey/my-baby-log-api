/* eslint-disable strict */

// const q1 = db('my_baby_log_events').select('*').toQuery();
// console.log('q1:', q1);


//TESTING TO SHOW WHAT IT RETURNS
// const qry = db
// .from('my_baby_log_events')
// .select('id', 'event_category', 'date_created')
// .from('my_baby_log_events')
// .where({ event_category: 'Feed' })
// .first()
// .toQuery()
// // .then(result => {
// //   console.log(result);
// // });
// console.log(qry)


//this SELECTS ALL of the datalogs in the database
// db.from('my_baby_log_events').select('*')
//   .then(result => {
//     console.log(result);
//   });




//this SELECTS SPECIFIC datalog(s) in the database
// db.from('my_baby_log_events')
//   .select('id', 'event_category', 'date_created')
//   .from('my_baby_log_events')
//   .where({ event_category: 'Feed' })
//   .then(result => {
//     console.log(result);
//   });



//this SELECTS FIRST SPECIFIC datalog in the database
// db.from('my_baby_log_events')
//   .select('id', 'event_category', 'date_created')
//   .from('my_baby_log_events')
//   .where({ event_category: 'Feed' })
//   .first()
//   .then(result => {
//     console.log(result);
//   });



