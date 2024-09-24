go get github.com/google/generative-ai-go

```go 
import (
  // import standard libraries
  // Import the GenerativeAI package for Go
  "github.com/google/generative-ai-go/genai"
  "google.golang.org/api/option"
)

ctx := context.Background()
// Access your API key as an environment variable
client, err := genai.NewClient(ctx, option.WithAPIKey(os.Getenv("API_KEY")))
if err != nil {
  log.Fatal(err)
}
defer client.Close()

model := client.GenerativeModel("gemini-1.5-flash")
cs := model.StartChat()

cs.History = []*genai.Content{
	{
		Parts: []genai.Part{
			genai.Text("Hello, I have 2 dogs in my house."),
		},
		Role: "user",
	},
	{
		Parts: []genai.Part{
			genai.Text("Great to meet you. What would you like to know?"),
		},
		Role: "model",
	},
}

res, err := cs.SendMessage(ctx, genai.Text("How many paws are in my house?"))
if err != nil {
	log.Fatal(err)
}
printResponse(res)

```