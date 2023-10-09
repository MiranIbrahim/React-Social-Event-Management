import {
  FaTelegramPlane,
  FaPhoneVolume,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
        <h2 className="text-4xl font-extrabold mt-20 text-center">Contact</h2>
      <div className="my-24 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-center">
        <div className="card w-60 glass bg-[#BAE1FF]">
          <figure className="px-10 pt-10">
            <FaPhoneVolume className="text-4xl"></FaPhoneVolume>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Call Us</h2>
            <p className="">+09266001293</p>
          </div>
        </div>
        <div className="card w-60 glass bg-[#BAE1FF]">
          <figure className="px-10 pt-10">
            <FaTelegramPlane className="text-4xl"></FaTelegramPlane>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Send Email</h2>
            <p className="">eventplaza@gmail.com</p>
          </div>
        </div>
        <div className="card w-60 glass bg-[#BAE1FF]">
          <figure className="px-10 pt-10">
            <FaWhatsapp className="text-4xl"></FaWhatsapp>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Whats app</h2>
            <p className="">+88 019212992011</p>
          </div>
        </div>
        <div className="card w-60 glass bg-[#BAE1FF] ">
          <figure className="px-10 pt-10">
            <FaMapMarkerAlt className="text-4xl"></FaMapMarkerAlt>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Our Location</h2>
            <a
              target="#"
              className="link"
              href="https://www.google.com/maps/place/Hotel+Sarina+Dhaka/@23.7967898,90.3849249,14.78z/data=!4m11!3m10!1s0x3755c70e6feceb73:0xc7c4d387a200cadc!5m4!1s2023-10-15!2i2!4m1!1i2!8m2!3d23.793233!4d90.4043925!16s%2Fg%2F1v82_gbp?entry=ttu"
            >
              Click here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
