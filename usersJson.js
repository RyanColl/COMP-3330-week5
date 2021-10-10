/* 
Use this to put into local db
Copy the path for usersJson, then in the bin folder for mongodb, open a terminal
type:

./mongo userAPI < {your-path-here}/usersJson.js

this will load your local db userAPI and fill it with the data

*/

db.users.insert([
    {
        first_name: 'Luthor',
        last_name: 'Trevolta',
        profession: 'Mining',
        hasDegree: true
    },
    {
        first_name: 'Cekin',
        last_name: 'Farrel',
        profession: 'Math Professor',
        hasDegree: true
    },
    {
        first_name: 'Farge',
        last_name: 'Large',
        profession: 'Handy Dart Driver',
        hasDegree: false
    },
    {
        first_name: 'John',
        last_name: 'Stamos',
        profession: 'actor',
        hasDegree: false
    },
    {
        first_name: 'Jupiter',
        last_name: 'Moon',
        profession: 'Chef',
        hasDegree: false
    },
    {
        first_name: 'Johnathan',
        last_name: 'Farmos',
        profession: 'Professor of Oncology',
        hasDegree: true
    },
    {
        first_name: 'Megan',
        last_name: 'Trosh',
        profession: 'Sports Caster',
        hasDegree: false
    },
    {
        first_name: 'Tegan',
        last_name: 'Knowel',
        profession: 'Musician',
        hasDegree: false
    }
    ])