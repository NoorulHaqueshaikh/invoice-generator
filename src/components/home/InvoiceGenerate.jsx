"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import axios from "axios";

// Common Indian states for the dropdown
const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
].sort();

// Helper to convert base64 to File/Blob for Multer
const dataURLtoFile = (dataurl, filename) => {
  if (!dataurl) return null;
  let arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

// Client-side Validation Constants
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/avif",
];

// Validation Helper Function
const validateImage = (file) => {
  if (!ALLOWED_TYPES.includes(file.type)) {
    alert("Invalid file format. Please upload a PNG, JPEG, or WebP image.");
    return false;
  }
  if (file.size > MAX_FILE_SIZE) {
    alert("File is too large. Maximum size allowed is 5 MB.");
    return false;
  }
  return true;
};

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// 🌟 MOVED OUTSIDE: UI Components
const Input = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  tooltip,
  error,
}) => (
  <div className="flex flex-col gap-1 w-full">
    <label className="text-xs font-semibold text-[#111827] uppercase tracking-wider">
      {label} {required && <span className="text-red-400">*</span>}
      {tooltip && (
        <span
          className="ml-1 text-[#2563EB] normal-case font-normal"
          title={tooltip}
        >
          {tooltip}
        </span>
      )}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`px-3 py-2 bg-white border border-[#D1D5DB] hover:border-[#2563EB] ${error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "focus:ring-[#2563EB] focus:border-[#2563EB]"} rounded-md text-sm focus:outline-none focus:ring-1 transition-all text-[#111827] w-full`}
    />
    {error && <span className="text-[10px] text-red-500">{error}</span>}
  </div>
);


const PhoneInput = ({ label, value, onChange, error }) => (
  <div className="flex flex-col gap-1 w-full">
    <label className="text-xs font-semibold text-[#111827] uppercase tracking-wider">
      {label}
    </label>
    <div className="flex w-full">
      <span className="inline-flex items-center px-3 border border-r-0 border-[#E5E7EB] bg-[#F9FAFB] text-[#111827] text-sm rounded-l-md shrink-0">
        🇮🇳 <span className="ml-2 border-l pl-2 border-[#E5E7EB]">+91</span>
      </span>
      <input
        type="tel"
        value={value}
        onChange={onChange}
        className={`flex-1 min-w-0 block w-full px-3 py-2 bg-[#F9FAFB] border ${error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-[#E5E7EB] focus:ring-[#2563EB] focus:border-[#2563EB]"} rounded-none rounded-r-md text-sm focus:outline-none focus:ring-1 transition-all text-[#111827]`}
      />
    </div>
    {error && <span className="text-[10px] text-red-500">{error}</span>}
  </div>
);

const StateSelect = ({ label, value, onChange, required }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredStates = INDIAN_STATES.filter((state) =>
    state.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="relative w-full state-dropdown">
      <label className="text-xs font-semibold text-[#111827] uppercase tracking-wider">
        {label} {required && <span className="text-red-400">*</span>}
      </label>

      {/* Select Box */}
      <div
  onClick={() => setOpen(!open)}
  className="mt-1 px-3 py-2 bg-white border border-[#D1D5DB] rounded-md text-sm cursor-pointer flex items-center hover:border-[#2563EB] shadow-sm"
>
  <span className={value ? "text-[#111827]" : "text-gray-400"}>
    {value || "Select State"}
  </span>
</div>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-[#E5E7EB] rounded-md shadow-lg overflow-hidden">
          {/* Search */}
          <input
            type="text"
            placeholder="Search state..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 border-b border-[#E5E7EB] focus:outline-none text-sm"
          />

          {/* List */}
          <div className="max-h-48 overflow-y-auto">
            {filteredStates.map((state) => (
              <div
                key={state}
                onClick={() => {
                  onChange({ target: { value: state } });
                  setOpen(false);
                  setSearch("");
                }}
                className="px-3 py-2 text-sm hover:bg-[#F3F4F6] cursor-pointer"
              >
                {state}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function InvoiceGenerator({ title, description }) {
  const handleGoogleResponse = async (response) => {
    try {
      await axios.post(
        `${API}/auth/google`,
        { credential: response.credential },
        { withCredentials: true },
      );

      // ✅ CLOSE MODAL FIRST (CRITICAL)
      setShowRegisterModal(false);

      // ✅ SAVE INVOICE
      await savingInvoice();

      // ✅ SHOW SUCCESS MESSAGE
      alert("Invoice saved successfully!");
    } catch (err) {
      console.log("Google login error", err);
    }
  };

  const userLogin = async (e) => {
    if (e) e.preventDefault();

    try {
      await axios.post(
        `${API}/auth/login`,
        {
          email: regForm.email,
          password: regForm.password,
        },
        {
          withCredentials: true,
        },
      );

      setShowRegisterModal(false);

      await savingInvoice();

      alert("Invoice saved successfully!");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  // --- STATE MANAGEMENT ---
  const [invoice, setInvoice] = useState({
    number: `INV-${Math.floor(1000 + Math.random() * 9000)}`,
    date: new Date().toISOString().split("T")[0],
    dueDate: "",
  });

  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);

  const [signatureFile, setSignatureFile] = useState(null);
  const [signaturePreview, setSignaturePreview] = useState(null);

  const [seller, setSeller] = useState({
    name: "",
    phone: "",
    gstin: "",
    upiId: "",
    address: "",
    city: "",
    zipCode: "",
    state: "Maharashtra",
  });
  const [client, setClient] = useState({
    name: "",
    phone: "",
    gstin: "",
    address: "",
    city: "",
    zipCode: "",
    state: "",
  });

  const [items, setItems] = useState([
    { id: Date.now(), name: "", hsn: "", gstRate: 18, qty: "", rate: "" },
  ]);

  const [optionals, setOptionals] = useState({
    notes: "",
    terms: "",
    discount: 0,
    additionalCharges: 0,
  });
  const [showOptionals, setShowOptionals] = useState(false);

  const [errors, setErrors] = useState({
    sellerPhone: "",
    sellerGstin: "",
    upiId: "",
    clientPhone: "",
    clientGstin: "",
  });

  const [sigMode, setSigMode] = useState(null);
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // Modal States
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // login | register

  // Registration Form State
  const [regForm, setRegForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // Registration Errors & Password Visibility State
  const [regErrors, setRegErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // --- CORE LOGIC ---
  const isGST = (seller.gstin || "").trim().length > 0;
  const isSameState =
    seller.state === client.state && seller.state !== "" && client.state !== "";

  const authCheck = async () => {
    try {
      const response = await axios.post(
        `${API}/auth/check`,
        {},
        {
          withCredentials: true,
        },
      );
      if (!response.data.auth) {
        setShowSuccessModal(false);
        setShowRegisterModal(true);
        setAuthMode("login"); // 🔥 always login first
      } else {
        setShowSuccessModal(false);

        const saved = await savingInvoice();

        if (saved) {
          alert("Invoice saved successfully!");
        }
      }
    } catch (error) {
      setShowSuccessModal(false);
      setShowRegisterModal(true);
      setAuthMode("login"); // 🔥 always login first
    }
  };

  const validateRegistration = () => {
    let isValid = true;
    let newErrors = {};

    if (!regForm.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(regForm.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!/^[0-9]{10}$/.test(regForm.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
      isValid = false;
    }

    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passRegex.test(regForm.password)) {
      newErrors.password =
        "Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char. (Example: Password@123)";
      isValid = false;
    }

    setRegErrors(newErrors);
    return isValid;
  };

  const userRegister = async (e) => {
    if (e) e.preventDefault();

    if (!validateRegistration()) return;

    try {
      const register = await axios.post(`${API}/auth/register`, regForm, {
        withCredentials: true,
      });
      setShowRegisterModal(false);
      await savingInvoice();
      alert("Invoice saved successfully!");
    } catch (error) {
      console.error("Registration failed", error);
      alert("Registration failed. Email or phone might already be in use.");
    }
  };

  const savingInvoice = async () => {
    try {
      const formData = new FormData();

      formData.append("invoiceDetails", JSON.stringify(invoice));
      formData.append("sellerDetails", JSON.stringify(seller));
      formData.append("clientDetails", JSON.stringify(client));
      formData.append("items", JSON.stringify(calculatedItems));
      formData.append("totals", JSON.stringify(totals));
      formData.append("optionals", JSON.stringify(optionals));

      if (logoFile) {
        formData.append("logo", logoFile);
      }

      if (signatureFile) {
        formData.append("signature", signatureFile);
      } else if (
        signaturePreview &&
        signaturePreview.startsWith("data:image")
      ) {
        formData.append("signatureBase64", signaturePreview);
      }

      const response = await axios.post(`${API}/invoice/save`, formData, {
        withCredentials: true,
      });

      return true; // ✅ IMPORTANT
    } catch (error) {
      console.log("Error saving invoice:", error);
    }
  };

  useEffect(() => {
    if (showRegisterModal && window.google) {
      window.google.accounts.id.initialize({
        client_id:
          "1085084813263-5cb4gf0k3mvcrbgjbc02k55o5jv9hati.apps.googleusercontent.com",
        callback: handleGoogleResponse,
      });

      const btn = document.getElementById("googleBtn");

      if (btn) {
        btn.innerHTML = ""; // 🔥 clear previous button

        window.google.accounts.id.renderButton(btn, {
          theme: "outline",
          size: "large",
          width: "100%",
        });
      }
    }
  }, [showRegisterModal]); // 🔥 dependency added

  // --- CALCULATIONS ---
  const calculatedItems = useMemo(() => {
    return items.map((item) => {
      const baseAmount = (item.qty || 0) * (item.rate || 0);
      let taxAmount = 0;
      let cgst = 0,
        sgst = 0,
        igst = 0;

      if (isGST) {
        taxAmount = baseAmount * (item.gstRate / 100);
        if (isSameState) {
          cgst = taxAmount / 2;
          sgst = taxAmount / 2;
        } else {
          igst = taxAmount;
        }
      }

      return {
        ...item,
        baseAmount,
        cgst,
        sgst,
        igst,
        totalAmount: baseAmount + taxAmount,
      };
    });
  }, [items, isGST, isSameState]);

  const totals = useMemo(() => {
    let subtotal = 0,
      totalCgst = 0,
      totalSgst = 0,
      totalIgst = 0;

    calculatedItems.forEach((item) => {
      subtotal += item.baseAmount;
      totalCgst += item.cgst;
      totalSgst += item.sgst;
      totalIgst += item.igst;
    });

    const preDiscountTotal =
      subtotal +
      totalCgst +
      totalSgst +
      totalIgst +
      Number(optionals.additionalCharges);
    const finalTotal = preDiscountTotal - Number(optionals.discount);

    return { subtotal, totalCgst, totalSgst, totalIgst, finalTotal };
  }, [calculatedItems, optionals]);

  // --- HANDLERS & VALIDATION ---

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!validateImage(file)) {
        e.target.value = null;
        return;
      }
      setLogoFile(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleSignatureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!validateImage(file)) {
        e.target.value = null;
        return;
      }
      setSignatureFile(file);
      setSignaturePreview(URL.createObjectURL(file));
    }
  };

  const handleItemChange = (id, field, value) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  const addItem = () =>
    setItems([
      ...items,
      { id: Date.now(), name: "", hsn: "", gstRate: 18, qty: 1, rate: 0 },
    ]);
  const removeItem = (id) => {
    if (items.length > 1) setItems(items.filter((item) => item.id !== id));
  };

  const validateInput = (type, value, fieldName) => {
    let errorMsg = "";
    if (value.length > 0) {
      if (type === "phone" && !/^[0-9]{10}$/.test(value)) {
        errorMsg = "Invalid 10-digit phone number";
      }
      if (
        type === "gstin" &&
        !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value)
      ) {
        errorMsg = "Invalid GSTIN format";
      }
      if (
        type === "upi" &&
        !/^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/.test(value)
      ) {
        errorMsg = "Invalid UPI format (e.g., name@bank)";
      }
    }
    setErrors((prev) => ({ ...prev, [fieldName]: errorMsg }));
  };

  // --- SIGNATURE PAD LOGIC ---
  const getClientPos = (e) => {
    let clientX, clientY;
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    return { clientX, clientY };
  };

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const pos = getClientPos(e);

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#111827";
    ctx.moveTo(
      (pos.clientX - rect.left) * scaleX,
      (pos.clientY - rect.top) * scaleY,
    );
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const pos = getClientPos(e);

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    ctx.lineTo(
      (pos.clientX - rect.left) * scaleX,
      (pos.clientY - rect.top) * scaleY,
    );
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) setIsDrawing(false);
  };

  const clearPad = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const saveSignatureFromModal = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      setSignaturePreview(canvas.toDataURL("image/png"));
      setSignatureFile(null);
      setSigMode(null);
    }
  };

  // --- GENERATION FOR MULTER BACKEND ---
  const handleGeneratePDF = async () => {
    // 🌟 NEW: Validate Required Fields before continuing
    if (
      !seller.name.trim() ||
      !seller.state ||
      !client.name.trim() ||
      !client.state
    ) {
      alert("Please fill in all required fields (marked with *).");
      return;
    }

    // 🌟 NEW: Prevent generation if there are format errors in the inputs
    if (
      errors.sellerPhone ||
      errors.sellerGstin ||
      errors.upiId ||
      errors.clientPhone ||
      errors.clientGstin
    ) {
      alert("Please fix the invalid inputs before generating.");
      return;
    }

    const formData = new FormData();

    formData.append("invoiceDetails", JSON.stringify(invoice));
    formData.append("sellerDetails", JSON.stringify(seller));
    formData.append("clientDetails", JSON.stringify(client));
    formData.append("items", JSON.stringify(calculatedItems));
    formData.append("totals", JSON.stringify(totals));
    formData.append("optionals", JSON.stringify(optionals));

    if (logoFile) {
      formData.append("logo", logoFile);
    }

    if (signatureFile) {
      formData.append("signature", signatureFile);
    } else if (signaturePreview && signaturePreview.startsWith("data:image")) {
      formData.append(
        "signature",
        dataURLtoFile(signaturePreview, "signature.png"),
      );
    }

    try {
      const response = await axios.post(`${API}/invoice/generate`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob",
      });

      const blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `invoice-${invoice.number}.pdf`;

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(url);

      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert(
        "Failed to generate PDF. Please check your image formats and sizes.",
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-6 sm:py-10 px-3 sm:px-4 font-sans text-[#111827] relative overflow-hidden">
      {/* 🔷 TRIANGLE BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-[550px] bg-[#2563EB] clip-triangle z-0 flex items-center justify-center px-4">
  <div className="max-w-3xl text-center text-white -translate-y-30">
    
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
      {title}
    </h1>

    <p className="mt-4 text-sm sm:text-base text-blue-100 leading-relaxed">
      {description}
    </p>

  </div>
</div>
      {/* SUCCESS TRACKING MODAL */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-[2px] p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md flex flex-col overflow-hidden text-center p-6 sm:p-8 animate-[fadeIn_0.3s_ease] scale-100">
            <div className="w-16 h-16 bg-[#2563EB]/10 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
              <svg
                className="w-8 h-8 text-[#2563EB]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-[#111827] mb-2">
              Invoice Generated!
            </h3>
            <p className="text-gray-500 text-sm mb-8">
              Your invoice{" "}
              <span className="font-medium text-[#111827]">
                {invoice.number}
              </span>{" "}
              has been successfully downloaded to your device.
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={authCheck}
                className="w-full px-5 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-blue-700 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Save & Track Invoice
              </button>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full px-5 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* REGISTRATION & GOOGLE LOGIN MODAL */}
      {showRegisterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-[2px] p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md flex flex-col overflow-hidden relative">
            {/* Close Button */}
            <button
              onClick={() => setShowRegisterModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full p-2 transition-colors z-10"
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div className="p-6 sm:p-8">
              <div className="text-center mb-6 mt-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {authMode === "login" ? "Welcome Back" : "Create an Account"}
                </h3>
                <p className="text-sm text-gray-500 px-2">
                  Register to save, track, and manage all your generated
                  invoices securely.
                </p>
              </div>

              <form
                onSubmit={authMode === "login" ? userLogin : userRegister}
                className="flex flex-col gap-4"
              >
                {/* ✅ NAME (ONLY REGISTER) */}
                {authMode === "register" && (
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={regForm.name}
                      onChange={(e) =>
                        setRegForm({ ...regForm, name: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 bg-gray-50 border ${regErrors.name ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:ring-blue-500"} rounded-lg text-sm focus:outline-none focus:ring-2 focus:bg-white transition-colors text-gray-900`}
                      placeholder="John Doe"
                    />
                    {regErrors.name && (
                      <span className="text-[10px] text-red-500">
                        {regErrors.name}
                      </span>
                    )}
                  </div>
                )}

                {/* ✅ EMAIL (BOTH) */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    value={regForm.email}
                    onChange={(e) =>
                      setRegForm({ ...regForm, email: e.target.value })
                    }
                    className={`w-full px-4 py-2.5 bg-gray-50 border ${regErrors.email ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:ring-blue-500"} rounded-lg text-sm focus:outline-none focus:ring-2 focus:bg-white transition-colors text-gray-900`}
                    placeholder="name@company.com"
                  />
                  {regErrors.email && (
                    <span className="text-[10px] text-red-500">
                      {regErrors.email}
                    </span>
                  )}
                </div>

                {/* ✅ PHONE (ONLY REGISTER) */}
                {authMode === "register" && (
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Phone
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-4 text-gray-500 text-sm font-medium border-r border-gray-300 pr-2 py-1">
                        +91
                      </span>
                      <input
                        type="tel"
                        value={regForm.phone}
                        onChange={(e) =>
                          setRegForm({ ...regForm, phone: e.target.value })
                        }
                        className={`w-full pl-16 pr-4 py-2.5 bg-gray-50 border ${regErrors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:ring-blue-500"} rounded-lg text-sm focus:outline-none focus:ring-2 focus:bg-white transition-colors text-gray-900`}
                        placeholder="9876543210"
                      />
                    </div>
                    {regErrors.phone && (
                      <span className="text-[10px] text-red-500">
                        {regErrors.phone}
                      </span>
                    )}
                  </div>
                )}

                {/* ✅ PASSWORD (BOTH) */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={regForm.password}
                      onChange={(e) =>
                        setRegForm({ ...regForm, password: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 pr-10 bg-gray-50 border ${regErrors.password ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:ring-blue-500"} rounded-lg text-sm focus:outline-none focus:ring-2 focus:bg-white transition-colors text-gray-900`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                      {showPassword ? (
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  {regErrors.password && (
                    <span className="text-[10px] text-red-500 leading-tight">
                      {regErrors.password}
                    </span>
                  )}
                </div>

                {/* ✅ BUTTON */}
                <button
                  type="submit"
                  className="w-full mt-2 bg-[#2563EB] hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] transition-all active:scale-[0.98]"
                >
                  {authMode === "login"
                    ? "Login & Save Invoice"
                    : "Register & Save Invoice"}
                </button>
              </form>

              <div className="text-center mt-5">
                {authMode === "login" ? (
                  <p className="text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <button
                      type="button"
                      className="text-blue-600 hover:text-blue-800 font-semibold focus:outline-none transition-colors"
                      onClick={() => {
                        setAuthMode("register");
                        setRegErrors({});
                      }}
                    >
                      Create one
                    </button>
                  </p>
                ) : (
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <button
                      type="button"
                      className="text-blue-600 hover:text-blue-800 font-semibold focus:outline-none transition-colors"
                      onClick={() => {
                        setAuthMode("login");
                        setRegErrors({});
                      }}
                    >
                      Login here
                    </button>
                  </p>
                )}
              </div>

              <div className="flex items-center my-6">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="px-4 text-xs text-gray-400 font-medium uppercase tracking-wider bg-white">
                  Or continue with
                </span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              <div id="googleBtn" className="flex justify-center w-full"></div>
            </div>
          </div>
        </div>
      )}

      {/* SIGNATURE MODAL OVERLAY */}
      {sigMode === "draw" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl flex flex-col overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-[#E5E7EB] flex justify-between items-center bg-[#F9FAFB]">
              <h3 className="text-lg font-semibold text-[#111827]">
                Draw Signature
              </h3>
              <button
                onClick={() => setSigMode(null)}
                className="text-gray-400 hover:text-red-500 p-1 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-4 sm:p-6 bg-white flex justify-center items-center touch-none">
              <div
                className="border-2 border-dashed border-[#E5E7EB] rounded-xl overflow-hidden bg-[#F9FAFB] w-full"
                style={{ touchAction: "none" }}
              >
                <canvas
                  ref={canvasRef}
                  width={800}
                  height={400}
                  style={{ width: "100%", height: "250px" }}
                  className="cursor-crosshair bg-white"
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                />
              </div>
            </div>

            <div className="p-4 sm:p-5 border-t border-[#E5E7EB] flex justify-end gap-3 bg-[#F9FAFB]">
              <button
                onClick={clearPad}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-200"
              >
                Clear Pad
              </button>
              <button
                onClick={saveSignatureFromModal}
                className="px-5 py-2 text-sm font-medium text-white bg-[#2563EB] hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
              >
                Save Signature
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-[#E5E7EB] overflow-hidden relative z-10 mt-[40vh]">
        {/* HEADER SECTION */}
        <div className="bg-white p-5 sm:p-8 border-b border-[#E5E7EB] flex flex-col-reverse md:flex-row justify-between items-start gap-6 sm:gap-8">
          <div className="flex flex-col gap-6 w-full md:w-auto mt-2 md:mt-0">
            <div>
              <h1 className="text-2xl sm:text-3xl font-light tracking-tight text-[#111827]">
                Invoice Generator
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                Create GST & Non-GST Invoices Easily
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <div className="flex flex-col gap-1 w-full sm:w-auto">
                <label className="text-xs font-semibold text-[#111827] uppercase">
                  Invoice No.
                </label>
                <input
                  type="text"
                  value={invoice.number}
                  onChange={(e) =>
                    setInvoice({ ...invoice, number: e.target.value })
                  }
                  className="px-3 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-md text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-[#111827] w-full sm:w-40"
                />
              </div>
              <div className="flex flex-col gap-1 w-full sm:w-auto">
                <label className="text-xs font-semibold text-[#111827] uppercase">
                  Date
                </label>
                <input
                  type="date"
                  value={invoice.date}
                  onChange={(e) =>
                    setInvoice({ ...invoice, date: e.target.value })
                  }
                  className="px-3 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-md text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-[#111827] w-full sm:w-40"
                />
              </div>
            </div>
          </div>

          {/* Logo Upload */}
          <div className="flex-shrink-0 w-full md:w-48 h-24 sm:h-32 md:h-40 bg-[#F9FAFB] rounded-lg flex items-center justify-center p-2 border border-[#E5E7EB] overflow-hidden relative group">
            {logoPreview ? (
              <>
                <img
                  src={logoPreview}
                  alt="Business Logo"
                  className="w-full h-full object-contain"
                />
                <div
                  onClick={() => {
                    setLogoFile(null);
                    setLogoPreview(null);
                  }}
                  className="absolute inset-0 bg-black bg-opacity-60 hidden group-hover:flex items-center justify-center cursor-pointer text-xs font-medium transition-all text-white"
                >
                  Remove Logo
                </div>
              </>
            ) : (
              <label className="cursor-pointer w-full h-full flex flex-col items-center justify-center text-gray-400 hover:text-[#2563EB] transition-colors">
                <span className="text-2xl mb-1">📁</span>

                <span className="text-xs font-semibold text-[#111827]">
                  Upload Logo
                </span>

                <span className="text-[10px] text-gray-400 text-center mt-1">
                  PNG, JPG, WEBP (Max 5MB)
                </span>
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg, image/webp, image/avif"
                  className="hidden"
                  onChange={handleLogoUpload}
                />
              </label>
            )}
          </div>
        </div>

        <div className="p-5 sm:p-8 space-y-8 sm:space-y-10">
          {/* Parties Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Seller Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium border-b border-[#E5E7EB] pb-2 text-[#111827]">
                Your Details
              </h3>
              <Input
                label="Your Business Name"
                value={seller.name}
                onChange={(e) => setSeller({ ...seller, name: e.target.value })}
                required
                placeholder="Acme Corp"
              />

              <PhoneInput
                label="Phone Number"
                value={seller.phone}
                onChange={(e) => {
                  setSeller({ ...seller, phone: e.target.value });
                  validateInput("phone", e.target.value, "sellerPhone");
                }}
                error={errors.sellerPhone}
              />

              <Input
                label="Your GSTIN"
                tooltip="(Enables GST)"
                value={seller.gstin}
                onChange={(e) => {
                  setSeller({ ...seller, gstin: e.target.value });
                  validateInput("gstin", e.target.value, "sellerGstin");
                }}
                placeholder="Optional"
                error={errors.sellerGstin}
              />

              <Input
                label="UPI ID (for Payments)"
                value={seller.upiId}
                onChange={(e) => {
                  setSeller({ ...seller, upiId: e.target.value });
                  validateInput("upi", e.target.value, "upiId");
                }}
                placeholder="Enter your UPI ID to receive payments via QR code"
                error={errors.upiId}
              />

              <Input
                label="Address"
                value={seller.address}
                onChange={(e) =>
                  setSeller({ ...seller, address: e.target.value })
                }
                placeholder="Optional"
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="City"
                  value={seller.city}
                  onChange={(e) =>
                    setSeller({ ...seller, city: e.target.value })
                  }
                  placeholder="Optional"
                />
                <Input
                  label="Postal / ZIP Code"
                  value={seller.zipCode}
                  onChange={(e) =>
                    setSeller({ ...seller, zipCode: e.target.value })
                  }
                />
              </div>
              <StateSelect
                label="State"
                value={seller.state}
                onChange={(e) =>
                  setSeller({ ...seller, state: e.target.value })
                }
                required
              />
            </div>

            {/* Client Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium border-b border-[#E5E7EB] pb-2 text-[#111827]">
                Client's Details
              </h3>
              <Input
                label="Client's Business Name"
                value={client.name}
                onChange={(e) => setClient({ ...client, name: e.target.value })}
                required
                placeholder="Globex Inc"
              />

              <PhoneInput
                label="Phone Number"
                value={client.phone}
                onChange={(e) => {
                  setClient({ ...client, phone: e.target.value });
                  validateInput("phone", e.target.value, "clientPhone");
                }}
                error={errors.clientPhone}
              />

              <Input
                label="Client's GSTIN"
                value={client.gstin}
                onChange={(e) => {
                  setClient({ ...client, gstin: e.target.value });
                  validateInput("gstin", e.target.value, "clientGstin");
                }}
                placeholder="Optional"
                error={errors.clientGstin}
              />

              <Input
                label="Address"
                value={client.address}
                onChange={(e) =>
                  setClient({ ...client, address: e.target.value })
                }
                placeholder="Optional"
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="City"
                  value={client.city}
                  onChange={(e) =>
                    setClient({ ...client, city: e.target.value })
                  }
                  placeholder="Optional"
                />
                <Input
                  label="Postal / ZIP Code"
                  value={client.zipCode}
                  onChange={(e) =>
                    setClient({ ...client, zipCode: e.target.value })
                  }
                />
              </div>
              <StateSelect
                label="State"
                value={client.state}
                onChange={(e) =>
                  setClient({ ...client, state: e.target.value })
                }
                required
              />
            </div>
          </div>

          {/* Items Table */}
          <div className="space-y-4 overflow-hidden w-full">
            <h3 className="text-lg font-medium border-b border-[#E5E7EB] pb-2 text-[#111827]">
              Line Items
            </h3>
            <div className="overflow-x-auto pb-4">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#F9FAFB] text-xs uppercase tracking-wider text-[#111827] border-b border-[#E5E7EB]">
                    <th className="p-3 font-medium rounded-tl-lg min-w-[200px]">
                      Item Name & Tax Details
                    </th>
                    {isGST && (
                      <th className="p-3 font-medium min-w-[100px]">HSN/SAC</th>
                    )}
                    <th className="p-3 font-medium w-24">Qty</th>
                    <th className="p-3 font-medium w-32">Rate (₹)</th>
                    {isGST && <th className="p-3 font-medium w-24">GST %</th>}
                    {isGST && isSameState && (
                      <th className="p-3 font-medium w-24">CGST</th>
                    )}
                    {isGST && isSameState && (
                      <th className="p-3 font-medium w-24">SGST</th>
                    )}
                    {isGST && !isSameState && (
                      <th className="p-3 font-medium w-24">IGST</th>
                    )}
                    <th className="p-3 font-medium text-right rounded-tr-lg min-w-[100px]">
                      Amount (₹)
                    </th>
                    <th className="p-3 w-10"></th>
                  </tr>
                </thead>
                <tbody>
                  {calculatedItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-[#E5E7EB] group"
                    >
                      <td className="p-2 align-top">
                        <input
                          type="text"
                          placeholder="Item description"
                          className="w-full p-2 bg-transparent border border-[#D1D5DB] hover:border-[#2563EB] focus:border-[#2563EB] rounded text-sm focus:outline-none text-[#111827]"
                          value={item.name}
                          onChange={(e) =>
                            handleItemChange(item.id, "name", e.target.value)
                          }
                        />

                        {isGST && (
                          <div className="text-xs font-medium text-[#2563EB] mt-1 px-2 bg-[#DBEAFE] py-1 rounded inline-block">
                            {isSameState ? (
                              <span>
                                CGST ({item.gstRate / 2}%): ₹
                                {item.cgst.toFixed(2)} | SGST (
                                {item.gstRate / 2}%): ₹{item.sgst.toFixed(2)}
                              </span>
                            ) : (
                              <span>
                                IGST ({item.gstRate}%): ₹{item.igst.toFixed(2)}
                              </span>
                            )}
                          </div>
                        )}
                      </td>
                      {isGST && (
                        <td className="p-2 align-top">
                          <input
                            type="text"
                            placeholder="HSN"
                            className="w-full p-2 bg-transparent border border-[#D1D5DB] hover:border-[#2563EB] focus:border-[#2563EB] rounded text-sm focus:outline-none text-[#111827]"
                            value={item.hsn}
                            onChange={(e) =>
                              handleItemChange(item.id, "hsn", e.target.value)
                            }
                          />
                        </td>
                      )}
                      <td className="p-2 align-top">
                        <input
                          type="number"
                          min="1"
                          className="w-full p-2 bg-transparent border border-[#D1D5DB] hover:border-[#2563EB] focus:border-[#2563EB] rounded text-sm focus:outline-none text-[#111827]"
                          value={item.qty || ""}
                          onChange={(e) =>
                            handleItemChange(
                              item.id,
                              "qty",
                              e.target.value === ""
                                ? ""
                                : Number(e.target.value),
                            )
                          }
                        />
                      </td>
                      <td className="p-2 align-top">
                        <input
                          type="number"
                          min="0"
                          className="w-full p-2 bg-transparent border border-[#D1D5DB] hover:border-[#2563EB] focus:border-[#2563EB] rounded text-sm focus:outline-none text-[#111827]"
                          value={item.rate || ""}
                          onChange={(e) =>
                            handleItemChange(
                              item.id,
                              "rate",
                              e.target.value === ""
                                ? ""
                                : Number(e.target.value),
                            )
                          }
                        />
                      </td>

                      {isGST && (
                        <td className="p-2 align-top">
                          <select
                            className="w-full p-2 bg-transparent border border-[#D1D5DB] hover:border-[#2563EB] focus:border-[#2563EB] rounded text-sm focus:outline-none text-[#111827]"
                            value={item.gstRate}
                            onChange={(e) =>
                              handleItemChange(
                                item.id,
                                "gstRate",
                                Number(e.target.value),
                              )
                            }
                          >
                            {[0, 5, 12, 18, 28].map((rate) => (
                              <option key={rate} value={rate}>
                                {rate}%
                              </option>
                            ))}
                          </select>
                        </td>
                      )}

                      {isGST && isSameState && (
                        <>
                          <td className="p-2 text-sm text-[#111827] align-top pt-4">
                            {item.gstRate / 2}%<br />
                            <span className="text-xs text-gray-500">
                              ₹{item.cgst.toFixed(2)}
                            </span>
                          </td>
                          <td className="p-2 text-sm text-[#111827] align-top pt-4">
                            {item.gstRate / 2}%<br />
                            <span className="text-xs text-gray-500">
                              ₹{item.sgst.toFixed(2)}
                            </span>
                          </td>
                        </>
                      )}
                      {isGST && !isSameState && (
                        <td className="p-2 text-sm text-[#111827] align-top pt-4">
                          {item.gstRate}%<br />
                          <span className="text-xs text-gray-500">
                            ₹{item.igst.toFixed(2)}
                          </span>
                        </td>
                      )}

                      <td className="p-2 text-right font-medium text-sm align-top pt-4">
                        ₹{item.totalAmount.toFixed(2)}
                      </td>
                      <td className="p-2 text-right align-top">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[#E5E7EB] hover:text-red-500 transition-colors px-2"
                          title="Remove line"
                        >
                          ✕
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              onClick={addItem}
              className="text-sm font-medium text-[#2563EB] hover:bg-[#DBEAFE] bg-[#F9FAFB] border border-[#E5E7EB] px-4 py-2 rounded-md transition-colors flex items-center gap-2"
            >
              <span>+</span> Add New Line
            </button>
          </div>

          {/* Bottom Section: Optionals & Totals */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 lg:gap-10 border-t border-[#E5E7EB] pt-8">
            <div className="w-full md:w-1/2 space-y-8">
              <div>
                <button
                  onClick={() => setShowOptionals(!showOptionals)}
                  className="text-sm text-[#2563EB] font-medium hover:underline flex items-center gap-1 mb-4"
                >
                  {showOptionals
                    ? "▼ Hide advanced options"
                    : "▶ Show advanced options (Notes, Terms, Discounts)"}
                </button>

                {showOptionals && (
                  <div className="space-y-4 p-4 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Discount (₹)"
                        type="number"
                        value={optionals.discount}
                        onChange={(e) =>
                          setOptionals({
                            ...optionals,
                            discount: e.target.value,
                          })
                        }
                      />
                      <Input
                        label="Shipping/Other (₹)"
                        type="number"
                        value={optionals.additionalCharges}
                        onChange={(e) =>
                          setOptionals({
                            ...optionals,
                            additionalCharges: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-[#111827] uppercase tracking-wider">
                        Notes
                      </label>
                      <textarea
                        className="w-full p-2 border border-[#E5E7EB] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB] text-justify text-[#111827]"
                        rows="2"
                        value={optionals.notes}
                        onChange={(e) =>
                          setOptionals({ ...optionals, notes: e.target.value })
                        }
                      ></textarea>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-[#111827] uppercase tracking-wider">
                        Terms & Conditions
                      </label>
                      <textarea
                        className="w-full p-2 border border-[#E5E7EB] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB] text-justify text-[#111827]"
                        rows="2"
                        value={optionals.terms}
                        onChange={(e) =>
                          setOptionals({ ...optionals, terms: e.target.value })
                        }
                      ></textarea>
                    </div>
                  </div>
                )}
              </div>

              {/* Signature Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium border-b border-[#E5E7EB] pb-2 text-[#111827]">
                  Signature
                </h3>

                {!signaturePreview && (
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setSigMode("upload")}
                      className={`px-4 py-2 text-sm font-medium rounded-md border transition-colors ${sigMode === "upload" ? "bg-[#DBEAFE] border-[#2563EB] text-[#2563EB]" : "bg-white border-[#E5E7EB] hover:bg-[#F9FAFB] text-[#111827]"}`}
                    >
                      Upload Signature
                    </button>
                    <button
                      onClick={() => setSigMode("draw")}
                      className={`px-4 py-2 text-sm font-medium rounded-md border transition-colors ${sigMode === "draw" ? "bg-[#DBEAFE] border-[#2563EB] text-[#2563EB]" : "bg-white border-[#E5E7EB] hover:bg-[#F9FAFB] text-[#111827]"}`}
                    >
                      Use Signature Pad
                    </button>
                  </div>
                )}

                {sigMode === "upload" && !signaturePreview && (
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg, image/webp"
                    onChange={handleSignatureUpload}
                    className="block w-full text-sm text-[#111827] file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-[#DBEAFE] file:text-[#2563EB] hover:file:bg-[#2563EB] hover:file:text-white transition-colors"
                  />
                )}

                {/* Preview Saved Signature */}
                {signaturePreview && (
                  <div className="flex flex-col items-start gap-2">
                    <div className="border border-[#E5E7EB] rounded p-2 bg-white inline-block">
                      <img
                        src={signaturePreview}
                        alt="Signature Preview"
                        className="max-h-24 object-contain"
                      />
                    </div>
                    <button
                      onClick={() => {
                        setSignatureFile(null);
                        setSignaturePreview(null);
                        setSigMode(null);
                      }}
                      className="text-xs font-medium text-red-500 hover:underline"
                    >
                      Remove Signature
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="w-full md:w-[350px] bg-[#F9FAFB] p-5 sm:p-6 rounded-xl border border-[#E5E7EB]">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-[#111827]">
                  <span>Subtotal:</span>
                  <span>₹{totals.subtotal.toFixed(2)}</span>
                </div>

                {isGST && isSameState && (
                  <>
                    <div className="flex justify-between text-[#111827]">
                      <span>Total CGST:</span>
                      <span>₹{totals.totalCgst.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[#111827]">
                      <span>Total SGST:</span>
                      <span>₹{totals.totalSgst.toFixed(2)}</span>
                    </div>
                  </>
                )}

                {isGST && !isSameState && (
                  <div className="flex justify-between text-[#111827]">
                    <span>Total IGST:</span>
                    <span>₹{totals.totalIgst.toFixed(2)}</span>
                  </div>
                )}

                {Number(optionals.additionalCharges) > 0 && (
                  <div className="flex justify-between text-[#111827]">
                    <span>Additional Charges:</span>
                    <span>
                      + ₹{Number(optionals.additionalCharges).toFixed(2)}
                    </span>
                  </div>
                )}

                {Number(optionals.discount) > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount:</span>
                    <span>- ₹{Number(optionals.discount).toFixed(2)}</span>
                  </div>
                )}

                <div className="pt-4 mt-4 border-t border-[#E5E7EB] flex justify-between items-center">
                  <span className="text-lg font-semibold text-[#111827]">
                    Final Total:
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-[#2563EB]">
                    ₹{totals.finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleGeneratePDF}
                className="w-full mt-6 bg-[#2563EB] hover:bg-[#111827] text-white font-medium py-3 rounded-lg shadow-sm transition-colors"
              >
                Generate Invoice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
