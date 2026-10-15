import { useState } from "react"

const NavBar = () => {
  const [searchActive, setSearchActive] = useState(false)

  return (
    <div className="nav">
      <div className="logo"></div>
      <div className="nav-search" style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search destinations..."
          onFocus={() => setSearchActive(true)}
          onBlur={() => setSearchActive(false)}
          style={{
            ...styles.searchInput,
            borderColor: searchActive ? "#ff5a6e" : "#e0e0e0",
            boxShadow: searchActive ? "0 2px 8px rgba(255, 90, 110, 0.2)" : "none",
          }}
        />
      </div>
      <div style={styles.navRight}>
        <button style={styles.navButton}>Become a host</button>
        <button style={styles.navButton}>Account</button>
      </div>
    </div>
  )
}

const styles = {
  searchContainer: {
    flex: 1,
    maxWidth: "400px",
    margin: "0 40px",
  },
  searchInput: {
    width: "100%",
    padding: "10px 16px",
    border: "1px solid #e0e0e0",
    borderRadius: "24px",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.3s ease",
    backgroundColor: "#f8f8f8",
  },
  navRight: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
  },
  navButton: {
    padding: "8px 16px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "transparent",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    color: "#222",
    transition: "all 0.3s ease",
  },
}

export default NavBar
