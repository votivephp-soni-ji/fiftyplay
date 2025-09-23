import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../assets/css/profile.css";
import { authMe, updateProfile } from "../services/AuthService";
import { Box, CircularProgress } from "@mui/material";
import { AuthTab } from "../components/AuthTab";

export default function Profile() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    language: "en",
    is_notify: false,
    avatar: null,
  });

  const [avatar, setAvatar] = useState(null);
  const [profileLoading, setProfileLoading] = useState(true);

  const [loading, setLoading] = useState(false);

  // 🔹 Fetch Profile Data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await authMe(); // change endpoint as per backend
        const data = res.user;

        console.log("profile data", data);

        setFormData({
          fullName: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
          language: data.preferred_language || "en",
          is_notify: data.is_notify || false,
          avatar: null,
        });
        setAvatar(data.avatar_url);
      } catch (err) {
        toast.error("Failed to fetch profile");
      } finally {
        setProfileLoading(false);
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    console.log("Updated formData:", formData);
  }, [formData]);

  // 🔹 Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => {
      if (type === "checkbox") {
        console.log("checked", checked);
        return { ...prev, [name]: checked };
      } else if (type === "file") {
        return { ...prev, avatar: files[0] };
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  // 🔹 Validation
  const validateForm = () => {
    if (!formData.fullName.trim()) {
      toast.error("Full Name is required");
      return false;
    }
    if (!/^\+?[0-9]{7,15}$/.test(formData.phone)) {
      toast.error("Enter a valid phone number");
      return false;
    }
    return true;
  };

  // 🔹 Submit Profile Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const payload = new FormData();
      payload.append("name", formData.fullName);
      payload.append("phone", formData.phone);
      payload.append("preferred_language", formData.language);
      payload.append("is_notify", Boolean(formData.is_notify));
      if (formData.avatar) {
        payload.append("avatar", formData.avatar);
      }

      console.log("formdata after", formData);

      const response = await updateProfile(payload);

      console.log("res", response);

      toast.success("Profile updated successfully");
    } catch (err) {
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="profile-section-add">
        <div className="container">
          <div className="row">
            <div className="col-md-3 sidebar left-sidebar">
              <AuthTab />
            </div>

            {/* Profile Section */}
            <div className="col-md-9 right-side-content">
              {profileLoading ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    py: 10,
                  }}
                >
                  <CircularProgress sx={{ color: "#ee127b" }} />
                </Box>
              ) : (
                <>
                  <h4>
                    Hi <strong>{formData.fullName.split(" ")[0]}</strong>,
                    Welcome Back
                  </h4>

                  <div className="profile-card mt-4">
                    <div className="card-header">Your Profile</div>
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-4">
                        <img
                          src={
                            formData.avatar
                              ? URL.createObjectURL(formData.avatar)
                              : avatar
                          }
                          className="rounded-circle me-3"
                          width="70"
                          height="70"
                          alt="User"
                        />
                        <form>
                          <label htmlFor="file-upload" className="upload-btn">
                            <i className="bi bi-upload"></i> Upload Photo
                          </label>
                          <input
                            type="file"
                            id="file-upload"
                            name="photo"
                            style={{ display: "none" }}
                            onChange={handleChange}
                          />
                        </form>
                      </div>

                      <form
                        className="profile-form-add"
                        onSubmit={handleSubmit}
                      >
                        <div className="row g-4">
                          <div className="col-md-6">
                            <label className="form-label">Full Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              value={formData.email}
                              readOnly
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Phone Number</label>
                            <input
                              type="text"
                              className="form-control"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">
                              Language Preference
                            </label>
                            <select
                              className="form-select"
                              name="language"
                              value={formData.language}
                              onChange={handleChange}
                            >
                              <option value="en">English</option>
                              <option value="es">Spanish</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-check mt-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="updatesCheck"
                            name="is_notify"
                            checked={formData.is_notify}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="updatesCheck"
                          >
                            Get instant updates on the latest offers, deals, and
                            exclusive offers.
                          </label>
                        </div>

                        <button
                          type="submit"
                          className="save-btn mt-3"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                              ></span>
                              Saving...
                            </>
                          ) : (
                            <>
                              Save Changes <i className="bi bi-arrow-right"></i>
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
