SELECT
  cohorts.name AS cohort,
  SUM(completed_at - started_at) AS total_duration
FROM
  assistance_requests
  JOIN students on student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
GROUP BY
  cohorts.name
ORDER BY
  SUM(completed_at - started_at);