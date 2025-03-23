import { useState } from "react";
const Hero = () => {
  const [formData, setFormData] = useState({
    width: 0,
    length: 0,
    height: 0,
  });   

  const [errors, setErrors] = useState("");
  const [result, setResult] = useState(0);

  function heroCal(length, width, height) {
    let s = (Number(length) + Number(width) + Number(height)) / 2;
    let area = Math.sqrt(
      s * ((s - Number(length)) * (s - Number(width)) * (s - Number(height)))
    );

    return Math.floor(area);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let len = Number(formData.length);
    let width = Number(formData.width);
    let height = Number(formData.height);
    if (height < width || height < len) {
      setErrors("Height cannot be less than both length and width");
      return;
    }
    const area = heroCal(len, width, height);
    setResult(area);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          gap: 10,
        }}
      >
        <label htmlFor="a">Enter Length(A):</label>
        <input
          type="number"
          name="length"
          onChange={handleChange}
          style={{ padding: "10px" }}
        />

        <label htmlFor="b">Enter Width(B):</label>
        <input
          type="number"
          name="width"
          onChange={handleChange}
          style={{ padding: "10px" }}
        />

        <label htmlFor="c">Enter Height(C):</label>
        <input
          type="number"
          name="height"
          onChange={handleChange}
          style={{ padding: "10px" }}
        />
        {errors && <span style={{ color: "red" }}>{errors}</span>}

        <button
          type="submit"
          style={{
            border: "none",
            padding: "20px",
            fontSize: "14px",
            color: "#fff",
            backgroundColor: "blue",
          }}
        >
          Solve Area of Triangle
        </button>
      </form>
      {result && (
        <div
          style={{ backgroundColor: "gray", width: "100px", padding: "10px" }}
        >
          {result}
        </div>
      )}
    </div>
  );
};

export default Hero;