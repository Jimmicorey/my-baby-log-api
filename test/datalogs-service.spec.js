const DatalogsService = require('../src/datalogs-service');
const knex = require('knex');
const { expect } = require('chai');

describe('datalogs service object', function() {

  let db;

  let testDatalogs = [
    {
      date_created: new Date('2020-08-21T19:53:20.111Z'),
      event_category: 'feed',
      id: 1
    },
    {
      date_created: new Date('2020-08-21T19:53:20.111Z'),
      event_category: 'diaper',
      id: 2
    },
    {
      date_created: new Date('2020-08-21T19:53:20.111Z'),
      event_category: 'bath',
      id: 3
    },
  ];

  before(() => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL
    });
  });

  before('clean db', () => db('my_baby_log_events').truncate());

  afterEach('clean db', () => db('my_baby_log_events').truncate());

  after('destroy db connection', () => db.destroy());


  ///////////DATABASE HAS DATALOGS ///////////////////////
  context('given my_baby_log_events table has datalogs', () => {
    beforeEach('insert testDatalogs', () => {
        return db
          .into('my_baby_log_events')
          .insert(testDatalogs);
    });


    ///////////TEST: GET ALL DATALOGS ///////////  
    it('getAllDatalogs() resolves all datalogs from my_baby_log_events table', () => {
      return DatalogsService.getAllDatalogs(db)
        .then(actual => {
          expect(actual).to.eql(testDatalogs.map(data => ({
              ...data,
              date_created: new Date(data.date_created)
          })));
        });
    });
  });



  ///////////DATABASE IS EMPTY ///////////////////////
  context('given my_baby_log_events table has NO datalogs', () => {

    /////////TEST: GET EMPTY DATALOGS ///////////
    it('getAllDatalogs() resolves an empty array', () => {
      return DatalogsService.getAllDatalogs(db)
        .then(actual => {
            expect(actual).to.eql([])
        });
    });

    /////////TEST: POST NEW EVENT ///////////
    it('insertNewDatalog() inserts a new event and resolves it with an id', () => {
        const newEvent = {
            date_created: new Date('2050-08-21T00:00:30.111Z'),
            event_category: 'TEST NEW EVENT'
        }
        return DatalogsService.insertNewDatalog(db, newEvent)
            .then(actual => {
                expect(actual).to.eql({
                    date_created: new Date(newEvent.date_created),
                    event_category: newEvent.event_category,
                    id: 1,
                });
            });
    });
  });

});




