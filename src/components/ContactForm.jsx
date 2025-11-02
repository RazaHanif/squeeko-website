import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})


const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
        email: "test@email.com"
    },
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
        await new Promise((r) => setTimeout(r, 2000));
        throw new Error()
        console.log(data);
    } catch (err) {
        setError("root", {
            message: "This email is already taken"
        })
        console.log(err)
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email")}
        type="text"
        placeholder="Email"
      />
      {errors.email && (
        <div className="text-red-500">{errors.email.message}</div>
      )}
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
      />
      {errors.password && (
        <div className="text-red-500">{errors.password.message}</div>
      )}
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "Log In"}
      </button>
      {errors.root && (
        <div className="text-red-500">{errors.root.message}</div>
      )}
    </form>
  );
};

export default ContactForm;
