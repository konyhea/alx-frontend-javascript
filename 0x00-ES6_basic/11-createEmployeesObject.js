export default function createEmployeesObject(departmentName, employees) {
  const staffs = {
    [departmentName]: employees,
  };

  return staffs;
}
