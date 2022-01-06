let args = process.argv.slice(2);

const { Pool } = require("pg");

const pool = new Pool({
  user: "meep",
  password: "uwu",
  host: "localhost",
  database: "bootcampx"
});

let [cohortName, limit = 5] = args;

pool
  .query(
    `
  SELECT students.id, students.name, cohorts.name AS cohort
  FROM students
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name = '${cohortName}'
  LIMIT ${limit}
`
  )
  .then((res) => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
    });
  })
  .catch((err) => console.log(err));
