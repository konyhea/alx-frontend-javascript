export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((sum, curr) => sum + curr.id, 0);
}
