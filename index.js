const express = require("express");
const fetch = require("node-fetch");
const app = express();
app.use(express.json());

app.post("/getMealPlan", async (req, res) => {
  const { age, weight, height, gender, activity_level } = req.body;

  const response = await fetch(
    "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1",
    {
      method: "POST",
      headers: {
        "Authorization": "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",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: Give a daily meal plan and health tips in plain text for a person aged ${age}, weighing ${weight} kg, height ${height} cm, gender ${gender}, with ${activityLevel} activity level.
      })
    }
  );

  const data = await response.json();
  res.json({ mealPlan: data });
});

app.listen(3000, () => console.log("Server running"));
