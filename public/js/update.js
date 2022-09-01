// const showAlerts5 = function (type, msg) {
//   hideAlerts5();
//   const markup = `<div class="alert alert--${type}" >${msg} </div>`;
//   document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
//   window.setTimeout(hideAlerts5, 1000);
// };
// const hideAlerts5 = () => {
//   const el = document.querySelector(".alert");
//   if (el) el.parentElement.removeChild(el);
// };

const update = async (
  firstName,
  lastName,
  email,

  mobileNumber,
  address,
  city,
  gender
) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: "/api/v1/user/updateMe",
      data: {
        firstName,
        lastName,
        email,

        mobileNumber,
        address,
        city,
        gender,
      },
    });

    if (res.data.status === "success") {
      //   showAlerts5("success", "Successfully signup");
      //   window.setTimeout(() => {
      //     location.assign("/signup");
      //   }, 1500);
      alert("SUCCESS");
    }
  } catch (err) {
    alert("error", err.response, err.message);
  }
};

const updateBtn = document.querySelector(".submit2");
if (updateBtn) {
  updateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hi");
    const firstName = document.querySelector(".form-inputA").value;
    const lastName = document.querySelector(".form-inputB").value;
    const email = document.querySelector(".form-inputC").value;

    const mobileNumber = document.querySelector(".form-inputD").value;
    const address = document.querySelector(".form-inputE").value;
    const city = document.querySelector(".form-inputF").value;
    const gender = document.querySelector(".form-inputG").value;

    update(
      firstName,
      lastName,
      email,

      mobileNumber,
      address,
      city,
      gender
    );
  });
}
