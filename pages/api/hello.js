// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import YoutubeTranscript from "youtube-transcript";
import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
  const body = req.body;
  const videoLink = `The video link is ${body.video}`;
  const transcript = await YoutubeTranscript.fetchTranscript(`${videoLink}`)
  res.status(200).json({ video: transcript })
}
