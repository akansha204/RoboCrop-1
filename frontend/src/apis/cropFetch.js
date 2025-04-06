import api from "./api";

// Fetch all user crop data
export const fetchAllUserCrops = async () => {
  try {
    const res = await api.get("/get-info");
    return res.data;
  } catch (error) {
    console.error("Error fetching user crop data:", error);
    throw error;
  }
};