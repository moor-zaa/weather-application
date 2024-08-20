import { render, screen } from "@testing-library/react";
import ForecastItem from "../components/Forecast/ForecastItem";

describe("ForecastItem Component", () => {
  const mockData = {
    weather: [{ main: "Cloudy" }],
    main: {
      temp_max: 22,
      temp_min: 18,
      humidity: 80,
    },
    wind: { speed: 10 },
  };

  test("renders forecast for each day correctly", () => {
    render(<ForecastItem item={mockData} />);

    // Check the weather img is rendered
    expect(screen.getByAltText("Cloudy")).toBeInTheDocument();

    // Check the min temp and max temp appear correctly
    expect(screen.getByText(/22/i)).toBeInTheDocument();
    expect(screen.getByText(/18/i)).toBeInTheDocument();

    // Check the humidity appear correctly
    expect(screen.getByText(/80/i)).toBeInTheDocument();
  });
});
