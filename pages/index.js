import { useState } from "react"

export default function Home() {
  const [video, setVideo] = useState("")
  const [transcript, setTranscript] = useState("");
  const [summary, setSummary] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()

    const data = {
      video: event.target.video.value
    }

    const JSONdata = JSON.stringify(data)

    const endpoint = "/api/hello"

    const options = {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSONdata
    }

    const response = await fetch(endpoint, options)

    const result = await response.json()
    const rawTranscript = result.video
    console.log(rawTranscript)
    let fullTranscript = ""

    rawTranscript.map(section => {
      fullTranscript += `${section.text}\n`
    })

    setTranscript(fullTranscript);
  }

  return (
    <div className="min-h-screen p-6 bg-blue-800 flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row gap-5 w-4/5 md:w-full md:justify-center">
        <div className="flex flex-col gap-2">
          <form onSubmit={handleSubmit}>
            <input type="text" name="video" id="video" placeholder="Place Link Here" value={video} onChange={(e) => setVideo(e.target.value)}
            className="p-2" />
            <button type="submit"
            className="p-2 border w-64 hover:bg-blue-200 hover:text-black">
              Get Summary and Transcript
            </button>
          </form>
          
          <textarea name="" id="" cols="30" rows="30" placeholder="Transcript Goes Here" disabled value={transcript}
          className=""></textarea>
        </div>
        <textarea name="" id="" cols="30" rows="30" disabled placeholder="Summary Goes Here" value={summary}
        className="md:w-1/3"></textarea>
      </div>
      <h1>{video}</h1>
    </div>
  )
}
