import { urlFor } from "../sanity"

const Review = ({ review }) => {
  return (
    <div className="review-box">
      <img
        src={urlFor(review.traveller.image)
          .width(50)
          .height(50)
          .crop("focalpoint")
          .auto("format")}
        alt={review.traveller.name}
      />
      <div style={{ flex: 1 }}>
        <h2>{review.traveller.name}</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
          <h1>{review.rating}</h1>
          <span style={{ color: "#717171", fontSize: "12px" }}>★</span>
        </div>
      </div>
    </div>
  )
}

export default Review
