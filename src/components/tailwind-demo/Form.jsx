import React from "react";
import InputField from "./InputField";
import Button from "./Button";

const Form = () => {
  return (
    <form class="flex w-fit flex-col items-center gap-8 border-2 p-8">
      <InputField id={"first_name"} label={"First name"} required={false} />
      <InputField id={"second_name"} label={"Second name"} />
      <InputField id={"user_name"} label={"User name"} />
      <InputField id={"Mentor"} label={"Mentor"} />
      <InputField id={"Class"} label={"Class"} type={"password"} />
      <Button label={"Add student"} />
    </form>
  );
};

export default Form;
