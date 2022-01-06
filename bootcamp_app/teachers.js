let args = process.argv.slice(2);

const { Pool } = require("pg");

const pool = new Pool({
  user: "meep",
  password: "uwu",
  host: "localhost",
  database: "bootcampx"
});

let [cohortName] = args;

console.log("connected!");

pool
  .query(
    `
  SELECT
  DISTINCT teachers.name AS teacher,
  cohorts.name AS cohort
  FROM
  assistance_requests
  JOIN students On student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
  JOIN teachers ON teacher_id = teachers.id
  WHERE
  cohorts.name = '${cohortName || "JUL02"}'
  ORDER BY
  teacher;
  `
  )
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(`${user.cohort}: ${user.teacher}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
