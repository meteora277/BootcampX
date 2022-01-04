SELECT
  SUM(assignment_submissions.duration)
FROM
  students
  LEFT JOIN assignment_submissions ON students.id = student_id
  LEFT JOIN cohorts ON cohorts.id = cohort_id
WHERE
  cohorts.name = 'FEB12';