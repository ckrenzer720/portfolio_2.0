import React, { useState, useRef, useCallback, useMemo } from "react";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

const validationErrors = {
  user_name: "You have to enter your name, silly.",
  user_email: "That's not a valid email.",
  message: "Please write a message.",
};

const validationSchema = yup.object().shape({
  user_name: yup.string().required(validationErrors.user_name),
  user_email: yup
    .string()
    .email(validationErrors.user_email)
    .required("Email is required"),
  user_contact: yup.string(),
  message: yup
    .string()
    .min(5, validationErrors.message)
    .required("Message is required"),
});

const initialValues = {
  user_name: "",
  user_email: "",
  user_contact: "",
  message: "",
};

function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  // Memoize validation function
  const validate = useCallback((key, value) => {
    yup
      .reach(validationSchema, key)
      .validate(value)
      .then(() => {
        setErrors((prevErrors) => ({ ...prevErrors, [key]: "" }));
      })
      .catch((error) => {
        setErrors((prevErrors) => ({ ...prevErrors, [key]: error.errors[0] }));
      });
  }, []);

  // Debounced validation
  const debouncedValidate = useCallback(
    (key, value) => {
      const timeoutId = setTimeout(() => validate(key, value), 300);
      return () => clearTimeout(timeoutId);
    },
    [validate]
  );

  const onChange = useCallback(
    (evt) => {
      const { id, value } = evt.target;
      setValues((prevValues) => ({ ...prevValues, [id]: value }));
      debouncedValidate(id, value);
    },
    [debouncedValidate]
  );

  // Memoize form validity check
  const isFormValid = useMemo(() => {
    const valid = Boolean(
      values.user_name &&
        values.user_email &&
        values.message &&
        values.message.length >= 5
    );
    return valid;
  }, [values]);

  const sendEmail = useCallback(
    async (evt) => {
      evt.preventDefault();
      console.log("Form submission started");

      // Basic validation
      if (!values.user_name || !values.user_email || !values.message) {
        console.log("Form validation failed:", { values });
        return;
      }

      setIsSubmitting(true);
      console.log("Attempting to send email with values:", values);

      try {
        const result = await emailjs.sendForm(
          "service_nyiplyk",
          "contact_form",
          form.current,
          "oReZPAeV9Y_5xjXCy"
        );
        console.log("Email sent successfully:", result);
        alert("Thank you for reaching out! I'll get back to you soon!");
        setValues(initialValues);
        setErrors({});
      } catch (error) {
        console.error("Failed to send email:", error);
        alert(
          "Sorry, there was an error sending your message. Please try again."
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [values]
  );

  return (
    <div className="flex justify-center items-center min-h-[50vh] py-4 px-2">
      <form
        id="my-form"
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-6xl bg-[#12213a] rounded-2xl shadow-lg p-4 md:p-8"
      >
        <div className="mb-6">
          <div className="bg-[#1a2b48] rounded-xl p-4 mb-4">
            <h3 className="text-3xl font-bold text-emerald-400 mb-2">
              Get In Touch
            </h3>
            <p className="text-white text-base font-normal">
              Reach out if you'd like to collaborate or want to have a
              conversation!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <input
              placeholder="Your Name *"
              id="user_name"
              name="from_name"
              type="text"
              value={values.user_name}
              onChange={onChange}
              disabled={isSubmitting}
              className="bg-[#12213a] border border-emerald-400 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
            />
            {errors.user_name && (
              <p className="text-red-400 text-xs">{errors.user_name}</p>
            )}
            <input
              placeholder="Your Email *"
              id="user_email"
              name="from_email"
              type="email"
              value={values.user_email}
              onChange={onChange}
              disabled={isSubmitting}
              className="bg-[#12213a] border border-emerald-400 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
            />
            {errors.user_email && (
              <p className="text-red-400 text-xs">{errors.user_email}</p>
            )}
            <textarea
              placeholder="What would you like to say?"
              id="message"
              name="message"
              value={values.message}
              onChange={onChange}
              disabled={isSubmitting}
              className="bg-[#12213a] border border-emerald-400 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all min-h-[120px]"
            />
            {errors.message && (
              <p className="text-red-400 text-xs">{errors.message}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={`w-full bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-3 rounded-md transition-colors duration-300 text-base tracking-wide ${
            !isFormValid ? "opacity-60 cursor-not-allowed" : ""
          }`}
          onClick={() => {
            console.log("Button clicked", {
              isFormValid,
              isSubmitting,
              values,
            });
            if (!isFormValid) {
              console.log("Form is not valid:", { values });
            }
          }}
        >
          {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
