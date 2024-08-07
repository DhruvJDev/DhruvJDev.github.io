"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; 
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+91 95184-19715",
        link: "tel:+919518419715",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "djindal015@gmail.com",
        link: "mailto:djindal015@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "Modern Valley, Kharar, Punjab, 140301",
        link: "https://maps.app.goo.gl/SYcaoStmLaCmvVU96",
    },
];

const Contact = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\+?\d{10,15}$/; // Adjust regex to match your phone number format
        return phoneRegex.test(phone);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        if (!validateEmail(email)) {
            setEmailError("Not a valid email address");
            isValid = false;
        } else {
            setEmailError("");
        }

        if (!validatePhone(phone)) {
            setPhoneError("Not a valid phone number");
            isValid = false;
        } else {
            setPhoneError("");
        }

        if (isValid) {
            // Submit the form
            console.log("Form submitted");
        }
    };

    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-4"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[20px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-4 p-6 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
                            <h3 className="text-3xl text-accent">Let's Work Together</h3>
                            <p className="text-white/60">Have a project in mind or just want to say hello? Get in touch with me using the form below, and I'll get back to you as soon as possible!</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input type="text" placeholder="First Name" />
                                <Input type="text" placeholder="Last Name" />
                                <div>
                                    <Input 
                                        type="email" 
                                        placeholder="Email Address" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {emailError && <p className="text-red-500">{emailError}</p>}
                                </div>
                                <div>
                                    <Input 
                                        type="tel" 
                                        placeholder="Phone Number" 
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                    {phoneError && <p className="text-red-500">{phoneError}</p>}
                                </div>
                                <Input type="text" placeholder="Subject/Purpose" className="md:col-span-2" />
                            </div>
                            <Textarea 
                                className="h-[150px]"
                                placeholder="Your message" 
                            />
                            <Button type="submit">
                                Send Message
                            </Button>
                        </form>
                    </div>

                    {/* info */}
                    <div className="flex-1 flex flex-col items-start xl:items-end order-1 xl:order-none mb-6 xl:mb-0">
                        <ul className="flex flex-col gap-6">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <a 
                                        href={item.link} 
                                        target={item.link.startsWith('http') ? "_blank" : undefined} 
                                        rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined} 
                                        className="w-[48px] h-[48px] xl:w-[64px] xl:h-[64px] bg-[#27272c] text-accent rounded-md flex items-center justify-center"
                                    >
                                        <div className="text-[24px]">{item.icon}</div>
                                    </a>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-lg">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        {/* Add the iframe below the address section */}
                        <div className="mt-6">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1455.6011169412866!2d76.62435520576442!3d30.75612090808141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffab11200aa4b%3A0xa7c7c75bf84b7750!2sQJ4G%2BGCP%2C%20Khanpur%20Phirni%2C%20Khanpur%2C%20Punjab%20140413!5e0!3m2!1sen!2sin!4v1722954238081!5m2!1sen!2sin" 
                                width="480" 
                                height="350" 
                                style={{ border: 0 }} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact;
