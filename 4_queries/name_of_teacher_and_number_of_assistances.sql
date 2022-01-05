SELECT
  DISTINCT teachers.name AS teacher,
  cohorts.name AS cohort,
  count(assistance_requests.*)
FROM
  assistance_requests
  JOIN students On student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
  JOIN teachers ON teacher_id = teachers.id
WHERE
  cohorts.name = 'JUL02'
GROUP BY
  teachers.name,
  cohorts.name
  ;