const showAlerts1 = function (type, msg) {
  hideAlerts1();
  const markup = `<div class="alert alert--${type}" >${msg} </div>`;
  document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
  window.setTimeout(hideAlerts1, 1000);
};
const hideAlerts1 = () => {
  const el = document.querySelector(".alert");
  if (el) el.parentElement.removeChild(el);
};

const signup = async (
  firstName,
  lastName,
  email,
  password,
  passwordConfirm,
  mobileNumber,
  address,
  city,
  gender
) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/user/signup",
      data: {
        firstName,
        lastName,
        email,
        password,
        passwordConfirm,
        mobileNumber,
        address,
        city,
        gender,
      },
    });

    if (res.data.status === "success") {
      showAlerts1("success", "Successfully signup");
      window.setTimeout(() => {
        location.assign("/login");
      }, 1500);
    }
  } catch (err) {
    showAlerts1("error", err.response, err.message);
  }
};

const signupBtn = document.querySelector(".submit1");
if (signupBtn) {
  signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hi");
    const firstName = document.querySelector(".form-input1").value;
    const lastName = document.querySelector(".form-input2").value;
    const email = document.querySelector(".form-input3").value;
    const password = document.querySelector(".form-input4").value;
    const passwordConfirm = document.querySelector(".form-input5").value;
    const mobileNumber = document.querySelector(".form-input6").value;
    const address = document.querySelector(".form-input7").value;
    const city = document.querySelector(".form-input8").value;
    const gender = document.querySelector(".form-input9").value;
    console.log(lastName);
    signup(
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
      mobileNumber,
      address,
      city,
      gender
    );
  });
}
