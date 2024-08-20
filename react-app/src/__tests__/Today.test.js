import React from "react";
import { render, screen } from "@testing-library/react";
import moment from "moment";
import Today from "../components/Today";

describe("Today Component", () => {
  const mockWeather = {
    weather: {
      weather: [{ main: "Cloudy", description: "overcast clouds", speed: 15 }],
      wind: { speed: 15 },
      main: { humidity: 80 },
    },
    temperature: 22,
    location: "New York",
  };

  test("renders weather information correctly", () => {
    render(<Today todayData={mockWeather} />);

    // Check that the weather image is rendered
    expect(screen.getByAltText("Cloudy")).toBeInTheDocument();

    // Check that temperature and description are rendered
    expect(screen.getByText(mockWeather.temperature)).toBeInTheDocument();
    expect(screen.getByText(/overcast clouds/i)).toBeInTheDocument();

    // Check that location is rendered
    expect(screen.getByText(mockWeather.location)).toBeInTheDocument();

    // Check that wind speed is rendered
    expect(screen.getByText(/15 km\/h/i)).toBeInTheDocument();

    // Check that humidity is rendered
    expect(screen.getByText(/80 %/i)).toBeInTheDocument();

    // Check that the date is rendered correctly
    expect(
      screen.getByText(`Today - ${moment(Date.now()).format("dddd")}`)
    ).toBeInTheDocument();
  });
});
