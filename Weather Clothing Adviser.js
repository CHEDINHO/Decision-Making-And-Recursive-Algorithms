function clothingAdviser(temperature, raining) {
    if (temperature < 10) {
        if (raining) {
            return "Wear a warm coat and bring an umbrella.";
        } else {
            return "Wear a warm coat.";
        }
    } else if (temperature < 20) {
        if (raining) {
            return "Bring a light jacket and an umbrella.";
        } else {
            return "Wear a light jacket.";
        }
    } else {
        if (raining) {
            return "Bring a light sweater and an umbrella.";
        } else {
            return "Wear a light sweater.";
        }
    }
}