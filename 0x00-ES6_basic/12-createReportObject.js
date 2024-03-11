export default function createReportObject(employeesList) {
  const allEmployees = {
    [employeesList.departmentName]: [...employeesList.employees],
  };

  const reportObject = {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(allEmployees).length;
    },
  };

  return reportObject;
}
