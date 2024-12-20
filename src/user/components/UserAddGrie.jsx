import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { addGrievanceAPI } from "../../Services/allApi";

function UserAddGrie() {
  const navigate = useNavigate();
  const [grievanceData, setGrievanceData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    grievanceType: "",
    subject: "",
    description: "",
    date: "",
    evidence: "",
    priority: "",
    contactMethod: "",
  });

  

  const [preview, setPreview] = useState("");
  useEffect(() => {
    if (grievanceData.evidence) {
      setPreview(URL.createObjectURL(grievanceData.evidence));
    }
  }, [grievanceData.evidence]);

  const [errors, setErrors] = useState({});

  const handleOnchange = (e) => {
    setGrievanceData({ ...grievanceData, [e.target.name]: e.target.value });
  };

  const validation = () => {
    const newerror = {};

    if (!grievanceData.fullName) {
      newerror.fullName = "Full name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(grievanceData.fullName)) {
      newerror.fullName = "full name can only contain letters and spaces";
    }

    if (!grievanceData.email) {
      newerror.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(grievanceData.email)) {
      newerror.email = "Email Address is invalid";
    }

    if (grievanceData.phone && !/^\d{10}$/.test(grievanceData.phone)) {
      newerror.phone = "Phone number must be exactly 10 digits";
    }

    if (!grievanceData.location) newerror.location = "Location is required";
    if (!grievanceData.grievanceType)
      newerror.grievanceType = "Grievance Type is required";
    if (!grievanceData.subject) newerror.subject = "Subject is required";
    if (!grievanceData.description)
      newerror.description = "Description is required";
    if (!grievanceData.date) newerror.date = "Date of Incident is required";
    if (!grievanceData.priority)
      newerror.priority = "Priority Level is required";
    if (!grievanceData.contactMethod)
      newerror.contactMethod = "Preferred Contact Method is required";

    setErrors(newerror);
    return Object.keys(newerror).length === 0;
  };

  const token = sessionStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (token) {
      if (validation()) {
        // alert("Grievance submitted successfully!");
        console.log(grievanceData);

        const reqBody = new FormData();
        reqBody.append("fullname", grievanceData.fullName);
        reqBody.append("email", grievanceData.email);
        reqBody.append("phone", grievanceData.phone);
        reqBody.append("location", grievanceData.location);
        reqBody.append("grievanceType", grievanceData.grievanceType);
        reqBody.append("subject", grievanceData.subject);
        reqBody.append("description", grievanceData.description);
        reqBody.append("date", grievanceData.date);
        reqBody.append("evidence", grievanceData.evidence);
        reqBody.append("priority", grievanceData.priority);
        reqBody.append("contactMethod", grievanceData.contactMethod);

        if (grievanceData.evidence) {
          console.log("if the image is added");
          const reqHeader = {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          };
          const result = await addGrievanceAPI(reqBody, reqHeader);
          //  console.log(result)
          if (result.status === 200) {
            Swal.fire({
              title: "Success!",
              text: '"Your grievance is added successfully. Our superhero will contact you suddenly!" ',
              icon: "success",
              confirmButtonText: "OK",
            });
            setGrievanceData({
              fullName: "",
              email: "",
              phone: "",
              location: "",
              grievanceType: "",
              subject: "",
              description: "",
              date: "",
              evidence: "",
              priority: "",
              contactMethod: "",
            });
            navigate("/");
          } else if (result.status === 400) {
            Swal.fire({
              title: "Already Exists!",
              text: '"This grievance is already part of our mission. Our superhero is actively working on it!" ',
              icon: "warning",
              confirmButtonText: "OK",
            });
          } else {
            toast.error("something went wrong");
          }
        } else {
          console.log("if the is no image");
          const reqHeader = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          };

          const result = await addGrievanceAPI(reqBody, reqHeader);
          // console.log(result)
          if (result.status === 200) {
            Swal.fire({
              title: "Success!",
              text: '"Your grievance is added successfully. Our superhero will contact you suddenly!" ',
              icon: "success",
              confirmButtonText: "OK",
            });
            setGrievanceData({
              fullName: "",
              email: "",
              phone: "",
              location: "",
              grievanceType: "",
              subject: "",
              description: "",
              date: "",
              evidence: "",
              priority: "",
              contactMethod: "",
            });
            navigate("/");
          } else if (result.status === 400) {
            Swal.fire({
              title: "Already Exists!",
              text: '"This grievance is already part of our mission. Our superhero is actively working on it!" ',
              icon: "warning",
              confirmButtonText: "OK",
            });
          } else {
            toast.error("something went wrong");
          }
        }
      } else {
        toast.warning("please fill the required sections of the form");
      }
    } else {
      Swal.fire({
        title: "SORRY !!",
        text: '"please login to add your grevance."',
        icon: "warning",
        confirmButtonText: "OK",
      });
      navigate("/login");
    }
  };

  return (
    <>
      <div className="container mx-auto p-4 md:p-10">
        <h2 className="text-3xl font-bold text-center text-red-700 mb-6">
          SUBMIT YOUR GRIEVANCE TO SUPER HERO
        </h2>
        <hr />
        <form
          onSubmit={handleSubmit}
          className="space-y-6 mt-5 bg-white shadow-md rounded-lg p-8 "
        >
          <div>
            <label className="block font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={grievanceData.fullName}
              onChange={handleOnchange}
              className="w-full p-2 border rounded"
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <span className="text-red-500">{errors.fullName}</span>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email "
              value={grievanceData.email}
              onChange={handleOnchange}
              className="w-full p-2 border rounded"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Phone Number (optional)
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your Phone no"
              value={grievanceData.phone}
              onChange={handleOnchange}
              className="w-full p-2 border rounded"
            />
            {errors.phone && (
              <span className="text-red-500">{errors.phone}</span>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-2">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter your Location"
              value={grievanceData.location}
              onChange={handleOnchange}
              className="w-full p-2 border rounded"
            />
            {errors.location && (
              <span className="text-red-500">{errors.location}</span>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-2">Grievance Type</label>
            <select
              name="grievanceType"
              value={grievanceData.grievanceType}
              onChange={handleOnchange}
              className="w-full p-2 border rounded"
            >
              <option value="" className="">
                Select Type
              </option>
              <option value="Community Safety">Community Safety</option>
              <option value="Environmental Concern">
                Environmental Concern
              </option>
              <option value="Personal Assistance">Personal Assistance</option>
              <option value="Property Damage">Property Damage</option>
            </select>
            {errors.grievanceType && (
              <span className="text-red-500">{errors.grievanceType}</span>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={grievanceData.subject}
              onChange={handleOnchange}
              className="w-full p-2 border rounded"
              placeholder="Enter a small subject/Title about the Gcrievance"
            />
            {errors.subject && (
              <span className="text-red-500">{errors.subject}</span>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-2">Description</label>
            <textarea
              name="description"
              value={grievanceData.description}
              onChange={handleOnchange}
              className="w-full p-2 border rounded"
              placeholder="Enter the description about the Grievance"
            />
            {errors.description && (
              <span className="text-red-500">{errors.description}</span>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-2">Date of Incident</label>
            <input
              type="date"
              name="date"
              value={grievanceData.date}
              onChange={handleOnchange}
              className="w-full p-2 border rounded"
            />
            {errors.date && <span className="text-red-500">{errors.date}</span>}
          </div>

          <div>
            <label className="block font-semibold mb-2" htmlFor="evidence">
              Upload Evidence (optional)
            </label>
            <label className="flex h-40">
              <input
                type="file"
                id="evidence"
                className="w-full p-3 border border-gray-300 rounded-md"
                onChange={(e) =>
                  setGrievanceData({
                    ...grievanceData,
                    evidence: e.target.files[0],
                  })
                }
              />
              <img
                src={
                  preview
                    ? preview
                    : "https://cdn.pixabay.com/photo/2021/10/11/00/59/upload-6699084_1280.png"
                }
                className="w-52 ms-3"
                alt=""
              />
            </label>
          </div>

          <div>
            <label className="block font-semibold mb-2">Priority Level</label>
            <select
              name="priority"
              value={grievanceData.priority}
              onChange={handleOnchange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            {errors.priority && (
              <span className="text-red-500">{errors.priority}</span>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Preferred Contact Method
            </label>
            <select
              name="contactMethod"
              value={grievanceData.contactMethod}
              onChange={handleOnchange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Contact Method</option>
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
            </select>
            {errors.contactMethod && (
              <span className="text-red-500">{errors.contactMethod}</span>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-red-700 text-white font-bold rounded-md hover:bg-red-800 transition-transform duration-500 hover:scale-105"
            >
              SUBMIT GRIEVANCE
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserAddGrie;
