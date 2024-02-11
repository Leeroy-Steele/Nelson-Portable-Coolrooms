import React from "react";

export default function Address() {
  return (
    <div className="text-center">
      <div className="p-5">
        <h2 className="display-6 text-muted m-4 fw-bold">Find us</h2>
        <p className="text-black">Nelson Portable Coolrooms</p>
        <p className="text-black">64 Beach road, Richmond, Nelson </p>
        <p className="text-black">7020, NZ</p>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.8846150111144!2d173.18577435053044!3d-41.33312235111539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3b946cef12a053%3A0x5b73dd5f8f57bbaa!2s64%20Beach%20Road%2C%20Richmond%207020!5e0!3m2!1sen!2snz!4v1677029822986!5m2!1sen!2snz"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
