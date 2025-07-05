import { IoChevronForward } from "react-icons/io5";
export default function ({ navigation }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "20px 12px",
        fontWeight: 200,
        fontSize: "16px",
        lineHeight: "160%",
        color: "#8F8F8F",
      }}
    >
      {navigation.map((el) => (
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
        >
          {el} <IoChevronForward />
        </h4>
      ))}
    </div>
  );
}
