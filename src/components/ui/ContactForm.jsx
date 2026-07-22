import { useState } from "react";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";

import SpotlightCard from "./SpotlightCard";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,

            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      toast.error("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <SpotlightCard className="p-8">
      <h3 className="mb-8 text-3xl font-bold text-white">
        Send Message
      </h3>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <Input
          label="Full Name"
          name="name"
          placeholder="Rohit Sharma"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="rohit@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Input
          label="Subject"
          name="subject"
          placeholder="How can I help you?"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <TextArea
          label="Message"
          name="message"
          rows={4}
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          required
        />

        <Button
          type="submit"
          fullWidth
          disabled={loading}
          rightIcon={<FaPaperPlane />}
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </SpotlightCard>
  );
};

export default ContactForm;