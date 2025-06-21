import React, { useState, useCallback } from "react";

const GeminiIdeaGeneratorSection = () => {
  const [ideaName, setIdeaName] = useState("");
  const [ideaDescription, setIdeaDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResultCard, setShowResultCard] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = "";

  const handleGenerateIdea = useCallback(async () => {
    setShowResultCard(false);
    setIsLoading(true);
    setError(null);
    setIdeaName("");
    setIdeaDescription("");
    if (!apiKey) {
      setIdeaName("API Key Missing!");
      setIdeaDescription("Please provide a valid Gemini API key to use this feature.");
      setShowResultCard(true);
      setIsLoading(false);
      return;
    }
    const prompt =
      "Generate a fun and cheesy project idea that could be built using a backend-as-a-service platform. Make it sound exciting and slightly over-the-top. The response should be a JSON object with two keys: 'projectName' and 'projectDescription'.";
    const payload = {
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            projectName: { type: "STRING" },
            projectDescription: { type: "STRING" },
          },
          required: ["projectName", "projectDescription"],
        },
      },
    };
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API request failed: ${errorData?.error?.message || response.statusText}`);
      }
      const result = await response.json();
      if (result.candidates?.[0]?.content?.parts?.[0]) {
        const parsedJson = JSON.parse(result.candidates[0].content.parts[0].text);
        setIdeaName(parsedJson.projectName || "A Cheesy Concoction!");
        setIdeaDescription(parsedJson.projectDescription || "Something wonderfully cheesy awaits!");
      } else {
        setIdeaName("Hmm, a cheese-block!");
        setIdeaDescription("Try again for inspiration!");
      }
    } catch (err) {
      setError(err.message);
      setIdeaName("Oops! A Curd-tastrophe!");
      setIdeaDescription(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
      setShowResultCard(true);
    }
  }, [apiKey]);

  return (
    <section id="gemini-idea-generator" className="py-16 md:py-24 bg-theme-translucent-dark">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
          Need a <span className="text-yellow-400">Cheesy Project Idea</span>?
        </h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Let our AI Cheesemonger conjure up a delectable project concept!
        </p>
        <button
          onClick={handleGenerateIdea}
          disabled={isLoading}
          className="animated-cta-button bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg mb-8 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Conjuring..." : "Conjure a Cheesy Idea!"}
        </button>
        {isLoading && <div className="loader"></div>}
        {showResultCard && !isLoading && (
          <div className="idea-card p-6 rounded-lg text-left text-gray-300 max-w-2xl mx-auto">
            <h4 className="text-2xl font-semibold text-yellow-400 mb-3">{ideaName}</h4>
            <p className="text-gray-400">{ideaDescription}</p>
            {error && <p className="text-red-400 mt-2">Error: {error}</p>}
          </div>
        )}
      </div>
    </section>
  );
};

GeminiIdeaGeneratorSection.displayName = "GeminiIdeaGeneratorSection";
export default GeminiIdeaGeneratorSection;
