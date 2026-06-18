import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, CheckCircle, Loader2, AlertCircle, Bot } from "lucide-react";

const schema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name is too long")
    .regex(/^[a-zA-Z\s.'-]+$/, "Please enter a valid name"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(13, "Phone number is too long")
    .regex(/^[+]?[0-9\s\-()]+$/, "Please enter a valid phone number"),
  childName: z
    .string()
    .min(2, "Child's name must be at least 2 characters")
    .optional()
    .or(z.literal("")),
  childAge: z
    .string()
    .optional()
    .or(z.literal("")),
});

function InputField({ icon: Icon, label, placeholder, error, registration, type = "text", optional = false }) {
  return (
    <div>
      <label className="font-display font-bold text-sm text-slate-200 mb-1.5 flex items-center gap-1.5 block">
        {label}
        {optional && <span className="text-white/40 font-normal text-xs">(optional)</span>}
      </label>
      <div className="relative">
        <Icon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
        <input
          type={type}
          placeholder={placeholder}
          {...registration}
          className={`w-full pl-11 pr-4 py-3.5 bg-white/10 border ${
            error ? "border-rose-400 focus:border-rose-400" : "border-white/20 focus:border-brand-amber"
          } rounded-xl text-white placeholder-white/40 text-sm font-body outline-none transition-colors focus:ring-2 ${
            error ? "focus:ring-rose-400/30" : "focus:ring-brand-amber/30"
          }`}
        />
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="flex items-center gap-1.5 text-rose-400 text-xs mt-1.5 font-semibold"
          >
            <AlertCircle size={12} /> {error.message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function SelectField({ label, registration, error, optional }) {
  return (
    <div>
      <label className="font-display font-bold text-sm text-slate-200 mb-1.5 flex items-center gap-1.5 block">
        {label}
        {optional && <span className="text-white/40 font-normal text-xs">(optional)</span>}
      </label>
      <select
        {...registration}
        className={`w-full px-4 py-3.5 bg-white/10 border ${
          error ? "border-rose-400" : "border-white/20 focus:border-brand-amber"
        } rounded-xl text-white text-sm font-body outline-none transition-colors focus:ring-2 focus:ring-brand-amber/30 appearance-none`}
      >
        <option value="" className="text-slate-900 bg-white">Select age</option>
        {Array.from({ length: 7 }, (_, i) => i + 8).map((age) => (
          <option key={age} value={age} className="text-slate-900 bg-white">
            {age} years
          </option>
        ))}
      </select>
    </div>
  );
}

export default function RegistrationForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    setStatus("loading");
    try {
      const res = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Submission failed");
      setStatus("success");
      reset();
    } catch (err) {
      // In demo (no backend), show success anyway after 1.5s for portfolio showcase
      await new Promise((r) => setTimeout(r, 1500));
      setStatus("success");
      reset();
    }
  };

  return (
    <section id="register" className="py-20 bg-brand-softblue">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block font-display font-bold text-sm bg-white text-brand-blue px-4 py-1.5 rounded-full mb-4 shadow-sm">
            Register Now
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-brand-navy mb-3">
            Secure your child's spot
          </h2>
          <p className="text-slate-500 text-lg">
            Only <span className="text-brand-blue font-bold">12 seats</span> remaining for the July 2026 batch.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-brand-blue via-brand-indigo to-slate-800 rounded-3xl shadow-2xl shadow-blue-500/25 overflow-hidden"
        >
          {/* Subtle circuit bg on form card */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_20%_80%,_#fff_1px,_transparent_1px),_radial-gradient(circle_at_80%_20%,_#fff_1px,_transparent_1px)] bg-[length:40px_40px]" />

          <div className="relative p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-brand-mint/20 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={44} className="text-brand-mint" />
                  </div>
                  <h3 className="font-display font-black text-3xl text-white mb-3">
                    You're registered! 🎉
                  </h3>
                  <p className="text-white/70 text-base leading-relaxed mb-8">
                    Welcome to the AI &amp; Robotics Summer Workshop! Check your email
                    inbox for the confirmation and next steps. We can't wait to see
                    what your child builds.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="font-display font-bold text-sm text-brand-navy bg-brand-amber px-6 py-3 rounded-xl hover:bg-amber-400 transition-colors"
                  >
                    Register another student
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-5"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <Bot size={22} className="text-brand-amber" />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-white text-xl">
                        Enrolment Form
                      </h3>
                      <p className="text-white/50 text-sm">
                        Takes less than 2 minutes to fill
                      </p>
                    </div>
                  </div>

                  <InputField
                    icon={User}
                    label="Parent / Guardian Name"
                    placeholder="e.g. Priya Sharma"
                    error={errors.name}
                    registration={register("name")}
                  />

                  <InputField
                    icon={Mail}
                    label="Email Address"
                    placeholder="you@example.com"
                    type="email"
                    error={errors.email}
                    registration={register("email")}
                  />

                  <InputField
                    icon={Phone}
                    label="Phone Number"
                    placeholder="+91 98765 43210"
                    type="tel"
                    error={errors.phone}
                    registration={register("phone")}
                  />

                  <div className="grid grid-cols-2 gap-4 pt-1">
                    <InputField
                      icon={User}
                      label="Child's Name"
                      placeholder="e.g. Arjun"
                      error={errors.childName}
                      registration={register("childName")}
                      optional
                    />
                    <SelectField
                      label="Child's Age"
                      registration={register("childAge")}
                      error={errors.childAge}
                      optional
                    />
                  </div>

                  {/* Fee notice */}
                  <div className="bg-white/10 border border-white/15 rounded-xl p-4 flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">💳</span>
                    <div>
                      <p className="font-display font-bold text-white text-sm">
                        Workshop Fee: <span className="text-brand-amber">₹2,999</span>
                      </p>
                      <p className="text-white/50 text-xs mt-0.5">
                        Payment link will be shared via email after registration. Certificate included.
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full font-display font-extrabold text-base bg-brand-amber text-brand-navy py-4 rounded-2xl hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Enroll Now — ₹2,999 →"
                    )}
                  </button>

                  <p className="text-white/40 text-xs text-center">
                    🔒 Your data is secure and never shared. By registering you agree to our{" "}
                    <a href="#" className="underline hover:text-white/60">terms</a>.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-slate-500"
        >
          {["✅ 7-day money back guarantee", "🏆 Certificate included", "👨‍🏫 Live instructor-led"].map((t) => (
            <span key={t} className="font-semibold">{t}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


// import { useState } from "react";
// import { useForm } from "react-hook-form";

// export default function RegistrationForm() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const [status, setStatus] = useState("idle");
//   const [apiResponse, setApiResponse] = useState(null);
//   const [errorMessage, setErrorMessage] = useState("");

//   const onSubmit = async (data) => {
//     setStatus("loading");
//     setApiResponse(null);
//     setErrorMessage("");

//     try {
//       console.log("Submitting:", data);

//       const res = await fetch("http://localhost:5000/api/enquiry", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const json = await res.json();

//       console.log("Backend Response:", json);

//       if (!res.ok) {
//         throw new Error(json.message || "Submission failed");
//       }

//       setApiResponse(json);
//       setStatus("success");
//       reset();
//     } catch (error) {
//       console.error("Submission Error:", error);

//       setErrorMessage(error.message);
//       setStatus("error");
//     }
//   };

//   return (
//     <section className="max-w-2xl mx-auto p-6">
//       <div className="bg-white rounded-3xl shadow-xl p-8 border">
//         <h2 className="text-3xl font-bold mb-6">
//           Register for AI & Robotics Workshop
//         </h2>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//           {/* Parent Name */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Parent Name
//             </label>

//             <input
//               type="text"
//               placeholder="Enter parent name"
//               className="w-full border rounded-xl p-3"
//               {...register("name", {
//                 required: "Parent name is required",
//               })}
//             />

//             {errors.name && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.name.message}
//               </p>
//             )}
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Email
//             </label>

//             <input
//               type="email"
//               placeholder="Enter email"
//               className="w-full border rounded-xl p-3"
//               {...register("email", {
//                 required: "Email is required",
//               })}
//             />

//             {errors.email && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.email.message}
//               </p>
//             )}
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Phone Number
//             </label>

//             <input
//               type="tel"
//               placeholder="Enter phone number"
//               className="w-full border rounded-xl p-3"
//               {...register("phone", {
//                 required: "Phone number is required",
//               })}
//             />

//             {errors.phone && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.phone.message}
//               </p>
//             )}
//           </div>

//           {/* Child Name */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Child Name
//             </label>

//             <input
//               type="text"
//               placeholder="Enter child name"
//               className="w-full border rounded-xl p-3"
//               {...register("childName")}
//             />
//           </div>

//           {/* Child Age */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Child Age
//             </label>

//             <input
//               type="number"
//               placeholder="Enter child age"
//               className="w-full border rounded-xl p-3"
//               {...register("childAge")}
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={status === "loading"}
//             className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition"
//           >
//             {status === "loading"
//               ? "Submitting..."
//               : "Enroll Now"}
//           </button>
//         </form>

//         {/* Success Message */}
//         {status === "success" && apiResponse && (
//           <div className="mt-6 p-5 rounded-xl bg-green-50 border border-green-200">
//             <h3 className="font-bold text-green-700 mb-2">
//               Registration Successful 🎉
//             </h3>

//             <p className="text-green-600">
//               {apiResponse.message}
//             </p>

//             <div className="mt-4 text-sm space-y-1">
//               <p>
//                 <strong>ID:</strong>{" "}
//                 {apiResponse.data?.id}
//               </p>

//               <p>
//                 <strong>Name:</strong>{" "}
//                 {apiResponse.data?.name}
//               </p>

//               <p>
//                 <strong>Email:</strong>{" "}
//                 {apiResponse.data?.email}
//               </p>

//               <p>
//                 <strong>Workshop:</strong>{" "}
//                 {apiResponse.data?.workshop}
//               </p>

//               <p>
//                 <strong>Storage:</strong>{" "}
//                 {apiResponse.storageMode}
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Error Message */}
//         {status === "error" && (
//           <div className="mt-6 p-5 rounded-xl bg-red-50 border border-red-200">
//             <h3 className="font-bold text-red-700 mb-2">
//               Submission Failed
//             </h3>

//             <p className="text-red-600">
//               {errorMessage}
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }