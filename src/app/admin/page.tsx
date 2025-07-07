"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

type Goat = {
  id: number;
  name: string;
  age: string;
  price: string;
  video_url: string;
};

export default function AdminManagePage() {
  const [goats, setGoats] = useState<Goat[]>([]);
  const [message, setMessage] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", age: "", price: "" });
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    if (!isLoaded) return;
    const adminEmail = "blogify082@gmail.com";
    if (!isSignedIn) router.push("/sign-in");
    else if (user?.primaryEmailAddress?.emailAddress !== adminEmail) {
      alert("Access Denied. Admin only!");
      router.push("/");
    }
  }, [isLoaded, isSignedIn, user, router]);

  const fetchGoats = async () => {
    try {
      const res = await fetch("https://goat-backend-production.up.railway.app/goats");
      const data = await res.json();
      setGoats(data);
    } catch (error) {
      console.error("Error fetching goats:", error);
    }
  };

  useEffect(() => {
    fetchGoats();
  }, []);

  // 🗑️ Delete Goat
  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`https://goat-backend-production.up.railway.app/goats/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setMessage("🗑️ Goat deleted successfully.");
        fetchGoats();
      } else {
        setMessage("❌ Delete failed.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      setMessage("❌ Network error");
    }
  };

  // ✏️ Edit Goat
  const handleEditClick = (goat: Goat) => {
    setEditingId(goat.id);
    setFormData({ name: goat.name, age: goat.age, price: goat.price });
  };

  const handleEditSave = async (id: number) => {
    try {
      const res = await fetch(`https://goat-backend-production.up.railway.app/goats/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setMessage("✅ Goat updated successfully.");
        setEditingId(null);
        fetchGoats();
      } else {
        setMessage("❌ Update failed.");
      }
    } catch (error) {
      console.error("Update error:", error);
      setMessage("❌ Network error");
    }
  };

  // 🔼 Upload Goat
  const handleUploadSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!videoFile) return alert("Please select a video file");

    const uploadData = new FormData();
    uploadData.append("name", formData.name);
    uploadData.append("age", formData.age);
    uploadData.append("price", formData.price);
    uploadData.append("video", videoFile);

    try {
      const res = await fetch("https://goat-backend-production.up.railway.app/upload-goat", {
        method: "POST",
        body: uploadData,
      });
      if (res.ok) {
        setMessage("✅ Goat uploaded successfully.");
        setFormData({ name: "", age: "", price: "" });
        setVideoFile(null);
        fetchGoats();
      } else {
        setMessage("❌ Upload failed.");
      }
    } catch (err) {
      console.error("Upload error:", err);
      setMessage("❌ Network error");
    }
  };

  return (
    <section className="min-h-screen px-4 py-10 bg-[#FFF7F0]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#9C5518] mb-6 text-center">
          Admin Panel: Goat Management
        </h2>

        {/* 🔔 Message */}
        {message && (
          <div className="text-center text-[#9C5518] mb-4 font-medium">
            {message}
          </div>
        )}

        {/* 🆕 Upload Form */}
        <form
          onSubmit={handleUploadSubmit}
          className="bg-white border border-[#EF962D] p-6 rounded-xl shadow mb-10 space-y-4"
        >
          <h3 className="text-xl font-semibold text-[#9C5518] mb-2">
            Upload New Goat
          </h3>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Age"
            value={formData.age}
            onChange={(e) =>
              setFormData({ ...formData, age: e.target.value })
            }
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="file"
            accept="video/*"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setVideoFile(e.target.files?.[0] || null)
            }
            className="w-full"
            required
          />
          <button
            type="submit"
            className="bg-[#9C5518] cursor-pointer text-white font-medium px-6 py-2 rounded-full hover:bg-[#7e3e12] transition"
          >
            Upload Goat
          </button>
        </form>

        {/* 📋 Goat Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {goats.map((goat) => (
            <div
              key={goat.id}
              className="bg-white border-2 border-[#EF962D] rounded-xl overflow-hidden shadow-md flex flex-col justify-between"
            >
              <video
  src={goat.video_url}
  controls
  className="aspect-[9/6] w-full object-contain rounded-lg"
/>

              <div className="p-4 text-[#9C5518] flex flex-col gap-2">
                {editingId === goat.id ? (
                  <>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="border px-2 py-1 rounded"
                    />
                    <input
                      type="text"
                      value={formData.age}
                      onChange={(e) =>
                        setFormData({ ...formData, age: e.target.value })
                      }
                      className="border px-2 py-1 rounded"
                    />
                    <input
                      type="text"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                      }
                      className="border px-2 py-1 rounded"
                    />
                    <button
                      onClick={() => handleEditSave(goat.id)}
                      className="mt-2 bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-1 rounded-full"
                    >
                      Save ✅
                    </button>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-bold">{goat.name}</h3>
                    <p>🕑 Age: {goat.age}</p>
                    <p>💰 Price: {goat.price}</p>

{/* ... */}

<div className="flex flex-wrap gap-3 mt-4">
  <button
    onClick={() => handleEditClick(goat)}
    className="flex cursor-pointer items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full shadow transition"
  >
    <FaEdit /> Edit
  </button>
  <button
    onClick={() => handleDelete(goat.id)}
    className="flex cursor-pointer items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full shadow transition"
  >
    <FaTrash /> Delete
  </button>
</div>

                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
