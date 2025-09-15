"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+57) 320 923 7075",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "jonathanolivosdev@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Bogotá,  Colombia",
  },
];

export default function Contact() {
  const [selectedService, setSelectedService] = useState("");
  const [submitStatus, setSubmitStatus] = useState<
    "success" | "error" | null
  >(null);
  const [state, handleSubmit] = useForm("mblaeplr");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);

    // Add the selected service to form data
    if (selectedService) {
      formData.append("service", selectedService);
    }

    try {
      await handleSubmit(e);
      console.log(state.succeeded);
      if (state.succeeded) {
        setSubmitStatus("success");
        // Reset form
        (e.target as HTMLFormElement).reset();
        setSelectedService("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.2, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-6 p-10 bg-[#121c4d] rounded"
            >
              <h3 className="text-4xl text-accent">
                Let&apos;s work together
              </h3>
              <p className="text-white/60">
                Have a project in mind or looking for a developer to
                join your team? Let&apos;s build something great
                together — drop me a message and I&apos;ll get back to
                you soon.
              </p>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-600/20 border border-green-600 rounded text-green-400">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-600/20 border border-red-600 rounded text-red-400">
                  Sorry, there was an error sending your message.
                  Please try again.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="Firstname"
                  required
                />
                <ValidationError
                  prefix="Firstname"
                  field="firstname"
                  errors={state.errors}
                />
                <Input
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="Lastname"
                />
                <ValidationError
                  prefix="Lastname"
                  field="lastname"
                  errors={state.errors}
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                />
              </div>

              <Select
                value={selectedService}
                onValueChange={setSelectedService}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="webapps">Web Apps</SelectItem>
                    <SelectItem value="backendapps">
                      Backend Apps
                    </SelectItem>
                    <SelectItem value="databasedesign">
                      Database Design
                    </SelectItem>
                    <SelectItem value="customsoftwaresolutions">
                      Custom Software Solutions
                    </SelectItem>
                    <SelectItem value="networkmonitoring">
                      Network Monitoring & IT Support
                    </SelectItem>
                    <SelectItem value="technicalconsulting">
                      Technical Consulting
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                id="message"
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <Button
                type="submit"
                size="md"
                className="max-w-40"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center gap-6"
                >
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#121c4d] text-accent rounded flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
