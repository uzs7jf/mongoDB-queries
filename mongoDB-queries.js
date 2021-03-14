db.restaurant.find({})
db.restaurant.find({}, {restaurant_id:1, name:1, borough:1, cuisine:1})
db.restaurant.find({}, {_id: 0, restaurant_id:1, name:1, borough:1, cuisine:1})
db.restaurant.find({}, {_id: 0, restaurant_id:1, name:1, borough:1, address: {zipcode: 1}})
db.restaurant.find({}, { _id: 0, name:1, borough:"Bronx"})
db.restaurant.find({}, { _id: 0, name:1, borough:"Bronx"}).limit(5)
db.restaurant.find({}, { _id: 0, name:1, borough:"Bronx"}).limit(5).skip(5)
db.restaurant.find( { 'grades.score': { $gte: 90 } } ).pretty()       
db.restaurant.find( { 'grades.score': { $lte: 100 }, 'grades.score': { $gte: 80} } )
db.restaurant.find( { 'address.coord.0': {$lt: -95.754168}  } )
db.restaurant.find( { 'cuisine' : 'American ', 'grades.score': { $gt: 70 },  'address.coord.0': {$lt: -65.754168} } ).limit(1).pretty()
db.restaurant.find( {'cuisine' : { $ne: 'American '}, 'grades.score': { $gt: 70 },  'address.coord.0': {$lt: -65.754168}  } )
db.restaurant.find( {'cuisine' : { $ne: 'American '},  'borough':{$ne: 'Brooklyn'} , 'grades.grade': { $eq: 'A' }  } )
db.restaurant.find({'name':{$regex: /^Wil/}}, {'restaurant_id': 1, 'name': 1, 'borough':1, 'cuisine': 1})
db.restaurant.find({'name':{$regex: /ces$/}}, {'restaurant_id': 1, 'name': 1, 'borough':1, 'cuisine': 1})
db.restaurant.find({'name':{$regex: /Reg/}}, {'restaurant_id': 1, 'name': 1, 'borough':1, 'cuisine': 1})
db.restaurant.find({$and: [{'borough': 'Bronx'}, {$or: [{'cuisine': 'American '},{'cuisine': 'Chinese'}]} ]})
db.restaurant.find({$or: [{'borough': 'Staten Island'},{'borough': 'Bronx'}, {'borough': 'Brooklyn'},{'borough': 'Queens'}] } , {'restaurant_id': 1, 'name': 1, 'borough': 1, 'cuisine': 1})
db.restaurant.find({$nor: [{'borough': 'Staten Island'},{'borough': 'Bronx'}, {'borough': 'Brooklyn'},{'borough': 'Queens'}] } , {'restaurant_id': 1, 'name': 1, 'borough': 1, 'cuisine': 1})
db.restaurant.find({ 'grades.score': { $lte: 10 } } , {'restaurant_id': 1, 'name': 1, 'borough': 1, 'cuisine': 1})
db.restaurant.find({$and: [{'name': {$regex: /^Wil/}}, {$nor: [{'cuisine': 'American '},{'cuisine': 'Chinese'}]} ]} ,{'restaurant_id': 1, 'name': 1, 'borough': 1, 'cuisine': 1})
db.restaurant.find({$and: [{'grades.grade': 'A'}, {'grades.score': 11}, {'grades.date': {$eq: new ISODate('2014-08-11T00:00:00Z')  }}  ]},{'restaurant_id': 1, 'name': 1, 'borough': 1, 'cuisine': 1})
db.restaurant.find({ 'address.coord.1': {$lte: 52}, 'address.coord.1': {$gte: 42} },{'restaurant_id': 1, 'name': 1, 'address.street': 1, 'address.coord': 1})
db.restaurant.find({}).sort( { 'name': 1, '_id': 1 } )
db.restaurant.find({}).sort( { 'name': -1, '_id': -1 } )
db.restaurant.find({}).sort( { 'cuisine': 1, 'borough': -1, '_id': 1 } )
db.restaurant.find({"address": {"$ne": null}},{'address':1, '_id':0})
