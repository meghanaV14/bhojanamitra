import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [foodQuery, setFoodQuery] = useState("");
  const [moodQuery, setMoodQuery] = useState("");

  const navigate = useNavigate();

  const handleFoodSelect = (e) => {
    const selectedFood = e.target.value;
    setFoodQuery(selectedFood);
    if (selectedFood) {
      navigate("/recipe", { state: { recipeName: selectedFood } });
    }
  };

  const handleMoodSelect = (e) => {
    const selectedMood = e.target.value;
    setMoodQuery(selectedMood);
    if (selectedMood) {
      navigate("/recipe", { state: { recipeName: selectedMood } });
    }
  };

  const handleImageClick = (foodName) => {
    navigate("/recipe", { state: { recipeName: foodName } });
  };

  const styles = {
    container: {
      padding: "30px",
      backgroundColor: "#fff5f5", // soft maroonish background
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      minHeight: "100vh",
    },
    heading: {
      fontSize: "3rem",
      textAlign: "center",
      color: "#800000", // maroon
      marginBottom: "10px",
      fontWeight: "bold",
    },
    subheading: {
      textAlign: "center",
      color: "#4b2c2c",
      marginBottom: "25px",
      fontSize: "1.2rem",
    },
    dropdownContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginBottom: "30px",
      flexWrap: "wrap",
    },
    dropdown: {
      fontSize: "16px",
      padding: "12px",
      borderRadius: "6px",
      border: "1px solid #800000",
      color: "#800000",
      backgroundColor: "#ffffff",
      width: "220px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    },
    sliderContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      marginBottom: "40px",
    },
    sliderImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "15px",
      cursor: "pointer",
      transition: "transform 0.3s ease",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    },
    footer: {
      textAlign: "center",
      marginTop: "40px",
      color: "#800000",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🍽️ Bhojanamitra</h1>
      <div style={styles.subheading}>Search your favorite dish or pick something by your mood!</div>

      {/* Dropdowns */}
      <div style={styles.dropdownContainer}>
        <select onChange={handleFoodSelect} style={styles.dropdown}>
          <option value="">🔍 Search by Food</option>
          <option value="Banana Leaf Meal">Banana Leaf Meal</option>
          <option value="Chicken Starter">Chicken Starter</option>
          <option value="Rotis with Curries">Rotis with Curries</option>
          <option value="Biriyani">Biriyani</option>
          <option value="Ragi Mudha with Natukodi Curry">Ragi Mudha with Natukodi Curry</option>
          <option value="South Indian Tiffins">South Indian Tiffins</option>
          <option value="Chepala Pulusu">Chepala Pulusu</option>
          <option value="Mirapakaya Bajji">Mirapakaya Bajji</option>
          <option value="Sambar Rice">Sambar Rice</option>
          <option value="Prawns Fry">Prawns Fry</option>
        </select>

        <select onChange={handleMoodSelect} style={styles.dropdown}>
          <option value="">🎭 Search by Mood</option>
          <option value="Comfort Food">Comfort Food</option>
          <option value="Festival Special">Festival Special</option>
          <option value="Healthy">Healthy</option>
          <option value="Spicy Cravings">Spicy Cravings</option>
          <option value="Quick Bites">Quick Bites</option>
          <option value="Traditional Meals">Traditional Meals</option>
        </select>
      </div>

      {/* Image Slides (8 total) */}
      <div style={styles.sliderContainer}>
        <img
          src="https://c4.wallpaperflare.com/wallpaper/869/719/717/cuisine-food-india-indian-wallpaper-preview.jpg"
          alt="Banana Leaf Meal"
          style={styles.sliderImage}
          onClick={() => handleImageClick("Banana Leaf Meal")}
        />
        <img
          src="https://img.freepik.com/premium-photo/indian-starter-chilli-chicken_636537-49548.jpg"
          alt="Chicken Starter"
          style={styles.sliderImage}
          onClick={() => handleImageClick("Chicken Starter")}
        />
        <img
          src="https://www.shutterstock.com/image-photo/potato-curry-aloo-aaloo-masala-600nw-330768296.jpg"
          alt="Rotis with curries"
          style={styles.sliderImage}
          onClick={() => handleImageClick("Rotis with Curries")}
        />
        <img
          src="https://img.freepik.com/premium-photo/close-up-food-table_1048944-9984072.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Biriyani"
          style={styles.sliderImage}
          onClick={() => handleImageClick("Biriyani")}
        />
        <img
          src="https://streetsofindia.ca/wp-content/uploads/2023/10/Group-15-768x766.png "
          alt="Ragi Mudha with Natukodi Curry"
          style={styles.sliderImage}
          onClick={() => handleImageClick("Ragi Mudha with Natukodi Curry")}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxTSojUZ-bel1do9jzoeODoqX7H5vhF4sUKA&s"
          alt="South Indian Tiffins"
          style={styles.sliderImage}
          onClick={() => handleImageClick("South Indian Tiffins")}
        />
        <img
          src="https://lifeandtrendz.com/wp-content/uploads/2025/04/New-Project-53-4.jpg"
          alt="Chepala Pulusu"
          style={styles.sliderImage}
          onClick={() => handleImageClick("Chepala Pulusu")}
        />
        <img
          src="https://t4.ftcdn.net/jpg/11/24/50/11/360_F_1124501186_sTivjmfiX9qnIZSIwgnzllV5WVU0w7OH.jpg" 
          alt="Mirapakaya Bajji"
          style={styles.sliderImage}
          onClick={() => handleImageClick("Mirapakaya Bajji")}
        />
      </div>

      {/* Footer */}
      <div style={styles.footer}>© 2025 Bhojanamitra</div>
    </div>
  );
}

export default Search;
