import React from "react";
import { useLocation } from "react-router-dom";

function Recipe() {
  const location = useLocation();
  const { food } = location.state || { food: "Recipe" };

  // Dummy recipe data
  const recipes = {
    "Banana Leaf Meal": {
      image: "https://c4.wallpaperflare.com/wallpaper/869/719/717/cuisine-food-india-indian-wallpaper-preview.jpg",
      description: "A traditional South Indian meal served on a banana leaf. Includes rice, curries, pickles, papad, and sweets.",
      ingredients: ["Rice", "Sambar", "Rasam", "Vegetable Poriyal", "Pickle"],
      calories: 680,
      cooking: "Boil rice and prepare sambar, rasam, and sides separately. Serve hot on a banana leaf.",
      video: "https://www.youtube.com/embed/CsQvBY2z7ck",
      swiggy: "https://www.swiggy.com/search?query=banana%20leaf%20meal",
      zomato: "https://www.zomato.com/search?query=banana%20leaf%20meal"
    },
    "Chicken Starter": {
      image: "https://img.freepik.com/premium-photo/indian-starter-chilli-chicken_636537-49548.jpg",
      description: "Spicy and crispy chicken starter perfect for any party or gathering.",
      ingredients: ["Chicken", "Spices", "Corn flour", "Oil"],
      calories: 480,
      cooking: "Marinate chicken, coat with flour mix and deep fry until golden.",
      video: "https://www.youtube.com/embed/j0ZzB8Xu5YE",
      swiggy: "https://www.swiggy.com/search?query=chicken%20starter",
      zomato: "https://www.zomato.com/search?query=chicken%20starter"
    },
    "Rotis with Curries": {
      image: "https://www.shutterstock.com/image-photo/potato-curry-aloo-aaloo-masala-600nw-330768296.jpg",
      description: "Soft Indian flatbreads served with a variety of rich curries.",
      ingredients: ["Wheat Flour", "Paneer Curry", "Dal", "Mix Veg"],
      calories: 600,
      cooking: "Make dough and cook rotis on a tawa. Serve with hot curries.",
      video: "https://www.youtube.com/embed/VZ3g2L2RRsE",
      swiggy: "https://www.swiggy.com/search?query=roti%20with%20curry",
      zomato: "https://www.zomato.com/search?query=roti%20with%20curry"
    },
    "Biriyani": {
      image: "https://img.freepik.com/premium-photo/close-up-food-table_1048944-9984072.jpg?semt=ais_hybrid&w=740&q=80",
      description: "Aromatic rice dish made with basmati rice, spices, and marinated meat.",
      ingredients: ["Basmati Rice", "Chicken", "Yogurt", "Spices", "Mint Leaves", "Fried Onions"],
      calories: 720,
      cooking: "Cook marinated chicken with biryani masala and layer it with half-cooked basmati rice. Cook on dum.",
      video: "https://www.youtube.com/embed/60L3Tt5QgzA",
      swiggy: "https://www.swiggy.com/search?query=biriyani",
      zomato: "https://www.zomato.com/search?query=biriyani"
    },

    "Ragi Mudha with Natukodi Curry": {
      image: "https://streetsofindia.ca/wp-content/uploads/2023/10/Group-15-768x766.png ",
      description: "Traditional Andhra dish made with ragi balls served with spicy country chicken curry.",
      ingredients: ["Ragi Flour", "Country Chicken", "Onions", "Red Chili", "Ginger-Garlic Paste", "Spices"],
      calories: 480,
      cooking: "Cook ragi with water to form balls. Prepare spicy chicken curry using traditional masala and serve hot.",
      video: "https://www.youtube.com/embed/vbObAHhgnZk",
      swiggy: "https://www.swiggy.com/search?query=ragi%20mudha%20natukodi%20curry",
      zomato: "https://www.zomato.com/search?query=ragi%20mudha%20natukodi%20curry"
      },

    "South Indian Tiffins": {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxTSojUZ-bel1do9jzoeODoqX7H5vhF4sUKA&s",
      description: "Classic South Indian breakfast platter including idli, dosa, vada, and upma with chutneys and sambar.",
      ingredients: ["Rice", "Urad Dal", "Semolina", "Chutneys", "Sambar"],
      calories: 550,
      cooking: "Prepare batters and cook dosa, idli. Deep fry vada and cook upma. Serve hot with chutneys and sambar.",
      video: "https://www.youtube.com/embed/I03r1er1a6M",
      swiggy: "https://www.swiggy.com/search?query=south%20indian%20tiffins",
      zomato: "https://www.zomato.com/search?query=south%20indian%20tiffins"
    },
    "Chepala Pulusu": {
      image: "https://lifeandtrendz.com/wp-content/uploads/2025/04/New-Project-53-4.jpg",
      description: "Andhra-style tangy fish curry simmered in tamarind juice and spices.",
      ingredients: ["Fish Pieces", "Tamarind", "Onions", "Green Chilies", "Red Chili Powder", "Curry Leaves", "Garlic"],
      calories: 420,
      cooking: "Marinate fish. Prepare tamarind-based masala with spices and simmer fish in it until fully cooked.",
      video: "https://www.youtube.com/embed/1CEsfd5WxHg",
      swiggy: "https://www.swiggy.com/search?query=chepala%20pulusu",
      zomato: "https://www.zomato.com/search?query=chepala%20pulusu"
   },
    "Mirapakaya Bajji": {
      image: "https://t4.ftcdn.net/jpg/11/24/50/11/360_F_1124501186_sTivjmfiX9qnIZSIwgnzllV5WVU0w7OH.jpg",
      description: "Crispy deep-fried green chili fritters stuffed with tangy tamarind or potato filling.",
      ingredients: ["Large Green Chilies", "Besan Flour", "Ajwain", "Tamarind Paste", "Potato", "Spices", "Salt"],
      calories: 290,
      cooking: "Slit green chilies and stuff with filling. Dip in besan batter and deep fry until golden and crispy.",
      video: "https://www.youtube.com/embed/vo7Z1BLkTT8",
      swiggy: "https://www.swiggy.com/search?query=mirapakaya%20bajji",
      zomato: "https://www.zomato.com/search?query=mirapakaya%20bajji"
    }
 };

  const recipe = recipes[food] || {
    description: "Recipe not found.",
    ingredients: [],
    calories: 0,
    cooking: "",
    image: "",
    video: "",
    swiggy: "#",
    zomato: "#"
  };

  const styles = {
    container: {
      padding: "30px",
      backgroundColor: "#fff9f5",
      fontFamily: "Segoe UI, sans-serif",
      color: "#3d1f1f"
    },
    header: {
      backgroundColor: "#8B0000",
      color: "#fff",
      padding: "20px",
      fontSize: "2rem",
      textAlign: "center",
      fontWeight: "bold",
    },
    layout: {
      display: "flex",
      gap: "30px",
      flexWrap: "wrap",
      marginTop: "30px",
    },
    leftCol: {
      flex: "2",
      minWidth: "300px",
    },
    rightCol: {
      flex: "1",
      minWidth: "250px",
    },
    image: {
      width: "100%",
      borderRadius: "10px",
      marginBottom: "20px",
    },
    section: {
      marginBottom: "20px",
    },
    sectionTitle: {
      fontSize: "1.2rem",
      fontWeight: "600",
      marginBottom: "10px",
      color: "#8B0000",
    },
    listItem: {
      marginLeft: "20px",
      listStyleType: "square",
    },
    video: {
      width: "100%",
      height: "250px",
      border: "none",
      borderRadius: "10px",
    },
    link: {
      display: "inline-block",
      marginRight: "15px",
      padding: "10px 15px",
      backgroundColor: "#8B0000",
      color: "#fff",
      borderRadius: "5px",
      textDecoration: "none",
      marginTop: "10px",
    },
    footer: {
      backgroundColor: "#8B0000",
      color: "#fff",
      textAlign: "center",
      padding: "10px",
      marginTop: "40px",
    }
  };

  return (
    <div>
      <div style={styles.header}>🍲 {food}</div>
      <div style={styles.container}>
        <div style={styles.layout}>
          {/* Left Section */}
          <div style={styles.leftCol}>
            <div style={styles.section}>
              <div style={styles.sectionTitle}>Description</div>
              <p>{recipe.description}</p>
            </div>

            <div style={styles.section}>
              <div style={styles.sectionTitle}>Ingredients</div>
              <ul>
                {recipe.ingredients.map((item, index) => (
                  <li key={index} style={styles.listItem}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={styles.section}>
              <div style={styles.sectionTitle}>Cooking Instructions</div>
              <p>{recipe.cooking}</p>
            </div>

            <div style={styles.section}>
              <div style={styles.sectionTitle}>Calories</div>
              <p>{recipe.calories} kcal per serving</p>
            </div>

            <div style={styles.section}>
              <div style={styles.sectionTitle}>Order Online</div>
              <a href={recipe.swiggy} target="_blank" rel="noreferrer" style={styles.link}>Swiggy</a>
              <a href={recipe.zomato} target="_blank" rel="noreferrer" style={styles.link}>Zomato</a>
            </div>
          </div>

          {/* Right Section */}
          <div style={styles.rightCol}>
            <img src={recipe.image} alt={food} style={styles.image} />
            <iframe
              src={recipe.video}
              title="Recipe Video"
              allowFullScreen
              style={styles.video}
            ></iframe>
          </div>
        </div>
      </div>

      <div style={styles.footer}>© Bhojanamitra</div>
    </div>
  );
}

export default Recipe;
