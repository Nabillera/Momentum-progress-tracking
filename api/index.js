const TOKEN = "9e6c009b-1288-4a6b-a018-6a9e2b68c3d9";

export function postEmployee(data) {
  const endpoint = "employees";
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("surname", data.surname);
  formData.append("avatar", data.avatar);
  formData.append("department_id", data.department);
  fetch(`https://momentum.redberryinternship.ge/api/${endpoint}`, {
    method: "post",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    body: formData,
  }).then(async (res) => {
    const result = await res.json();
    console.log(result);
  });
}

export function putStatus(taskId, statusId) {
  fetch(`https://momentum.redberryinternship.ge/api/tasks/${taskId}`, {
    method: "put",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status_id: `${statusId}` }),
  }).then(async (res) => {
    const result = await res.json();
    console.log(result);
  });
}

export function postTask(data) {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("due_date", data.date);
  formData.append("status_id", data.status);
  formData.append("employee_id", data.employee);
  formData.append("priority_id", data.priority);
  fetch(`https://momentum.redberryinternship.ge/api/tasks`, {
    method: "post",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    body: formData,
  }).then(async (res) => {
    const result = await res.json();
    console.log(result);
  });
}
