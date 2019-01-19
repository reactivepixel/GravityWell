export default {
  Venue: {
    events: (parent, args, context, info) => parent.getEvents(),
  },
  Event: {
    venue: (parent, args, context, info) => parent.getVenue(),
  },
  Query: {
    events: (parent, args, { db }, info) => db.Events.findAll(),
    venues: (parent, args, { db }, info) => db.Venues.findAll(),
    event: (parent, { id }, { db }, info) => db.Events.findById(id),
    venue: (parent, { id }, { db }, info) => db.Venues.findById(id) 
  },
  Mutation: {
    createEvent: (parent, { title, description, venueId }, { db }, info) =>
      db.Events.create({
        title: title,
        description: description,
        venueId: venueId
      }),
    updateEvent: (parent, { title, description, venueId, id }, { db }, info) =>
      db.Events.update({
        title: title,
        description: description,
        venueId: venueId
      },
      {
        where: {
          id: id
        }
      }),
    deleteEvent: (parent, {id}, { db }, info) =>
      db.Events.destroy({
        where: {
          id: id
        }
      })
  }
};