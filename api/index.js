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
